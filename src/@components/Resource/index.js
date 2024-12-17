import DataService from "@services/DataService";
import ExcelUtil from "@utils/ExcelUtil.js";
import MdUtil from "@utils/MdUtil.js";

const Resource = {
    read: async ({ contentType = "content", src = "", query = {} } = {}) => {
        /**
         * if resource
         *      check for compiled
         *          which will always be sequential > '.json', '.html'
         *      else
         *          compile raw ( local )
         * else
         *      check for raw ( remote ) and compile
         *
         * TODO
         *      take expected multiverse as input argument and return accordingly ( dont rely on default sequence )
         */
        try {
            const resource = await DataService.searchResourceByName({
                name: `${contentType}/${src}`,
                query,
                ignoreExtension: false,
                file: false
            });
            if (resource) {
                const name = src.split(".")[0];
                const extension = src.split(".")[1];

                if (resource.multiverse) {
                    if (resource.multiverse.html) {
                        const htmlResp = await DataService.getFromCDN(`/${resource.multiverse.html.filePath}`);

                        let mdPayload = {
                            data: htmlResp.data,
                            results: null,
                            extension: "html"
                        };

                        return mdPayload;
                    } else if (resource.multiverse.json) {
                        const jsonResp = await DataService.getFromCDN(`/${resource.multiverse.json.filePath}`);

                        const data = jsonResp.data;
                        let jsonPayload = {
                            data: null,
                            results: Array.isArray(data) ? data : [data],
                            extension: "json"
                        };

                        return jsonPayload;
                    } else {
                        throw Error(`Multiverse handling not found`);
                    }
                } else {
                    try {
                        switch (extension) {
                            case "xlsx":
                                const xlsxResp = await DataService.searchResourceByName({
                                    name: `${contentType}/${name}.${extension}`,
                                    query,
                                    ignoreExtension: false,
                                    options: {
                                        responseType: "arraybuffer"
                                    }
                                });
                                const workbook = ExcelUtil.instance.read(xlsxResp.data);
                                const results = ExcelUtil.instance.sheet_to_json(
                                    workbook.Sheets[workbook.SheetNames[0]]
                                );

                                let xlsxPayload = {
                                    data: null,
                                    results,
                                    extension
                                };

                                return xlsxPayload;

                            default:
                                throw Error(`No handling found for local resource of ${extension} extension`);
                        }
                    } catch (error) {
                        throw error;
                    }
                }
            } else {
                throw Error(`Resource not found locally`);
            }
        } catch (error) {
            throw error;
        }
    },

    searchTokens: async ({ text, contentType = "content", src = "", query = {} } = {}) => {
        /**
         * if src
         *      search file
         * else
         *      search folder
         */
        let results = [];
        if (!text) return results;
        try {
            let files = await DataService.searchResourceByType({
                contentType,
                query
            });
            files = files.filter(r => {
                if (r.fileExtension !== "md") return false;
                if (r.info.active === "false") return false;
                if (!r.multiverse?.json) return false;
                return true;
            });
            // console.log("searchTokens > entry", { text, contentType, files });
            for (const file of files) {
                let fileResp = await DataService.getFromCDN(`/${file.multiverse.json.filePath}`, {}); // TODO - add caching
                let fileTokens = Array.isArray(fileResp.data) ? fileResp.data : null;
                if (!fileTokens) return;
                const found = Resource.searchArrayObjects(fileTokens, text);
                // console.log("searchTokens > found", { found });
                results = results.concat(found);
            }
        } catch (error) {
            console.error("searchTokens", error);
        } finally {
            return results;
        }
    },

    searchArrayObjects(array, searchText, parent, id) {
        let results = [];
        array.forEach((item, i) => {
            if (item.attrs?.includes("data-search") && item.text.search(new RegExp(searchText, "i")) > -1) {
                results.push({ item, parent });
            }
            if (item.tokens && Array.isArray(item.tokens)) {
                let _results = Resource.searchArrayObjects(item.tokens, searchText, item, i);
                results = results.concat(_results);
            }
        });
        return results;
    },

    parseTokens: MdUtil.parseTokens
};

export default Resource;
