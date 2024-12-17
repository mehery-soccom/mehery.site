const fs = require("fs");
const path = require("path");
const DomParserUtil = require("../src/@utils/DomParserUtil");
const ExcelUtil = require("../src/@utils/ExcelUtil.js");
const MdUtil = require("../src/@utils/MdUtil.js");

const __base = path.resolve(__dirname, "..");

const isAppDirectory = name => name.indexOf("app-") === 0;
const isDirectory = ({ dir, dirMain, dirNext }) => fs.lstatSync(dir || dirMain + "/" + dirNext).isDirectory();
const getIntersection = (a, b) => {
    let intersection = a.filter(v => b.includes(v));
    return intersection.length ? intersection.join(", ") : null;
};
const getStamp = () => {
    const d = new Date();
    const offset = d.getTimezoneOffset() + "";
    return {
        str: d.toISOString(),
        offset: `${offset.slice(0, 1)}${Math.floor(offset.slice(1) / 60)}.${offset.slice(1) % 60}`,
        stamp: +d
    };
};
function updateAttrsInArray(array) {
    array.forEach(obj => {
        if (!obj) return;

        // Update 'attrs' property if it exists
        if (obj.hasOwnProperty("attrs") && !!obj.attrs) {
            let _attrs = Object.entries(obj.attrs).reduce((acc, [k, v], i) => {
                return acc.concat(` ${k}="${v}"`).trim();
            }, "");
            obj.attrs = _attrs;
        }

        // Recursively check nested objects if they exist
        Object.keys(obj).forEach(key => {
            if (Array.isArray(obj[key])) {
                // If the property is an array, recursively update it
                updateAttrsInArray(obj[key]);
            } else if (typeof obj[key] === "object" && obj[key] !== null) {
                // If the property is an object, recursively update it
                updateAttrsInObject(obj[key]);
            }
        });
    });
}
function updateAttrsInObject(obj) {
    if (!obj) return;

    // Update 'attrs' property if it exists
    if (obj.hasOwnProperty("attrs") && !!obj.attrs) {
        let _attrs = Object.entries(obj.attrs).reduce((acc, [k, v], i) => {
            return acc.concat(` ${k}="${v}"`).trim();
        }, "");
        obj.attrs = _attrs;
    }

    // Recursively check nested objects if they exist
    Object.keys(obj).forEach(key => {
        if (Array.isArray(obj[key])) {
            // If the property is an array, recursively update it
            updateAttrsInArray(obj[key]);
        } else if (typeof obj[key] === "object" && obj[key] !== null) {
            // If the property is an object, recursively update it
            updateAttrsInObject(obj[key]);
        }
    });
}

const task = {
    /**
     * data structure : {
     *     [app] : {
     *          meta : {
     *              resources : [
     *                  {
     *                      file : "iphone-launch.en_US.v2.md",
     *                      html : "iphone-launch.md.html",
     *                      tags : {
     *                          lang: "en_US",
     *                          version: "v2"
     *                      }
     *                  }
     *              ]
     *          },
     *          site : {}
     *     }
     * }
     */
    data: {},
    async init() {
        return new Promise(async (resolve, reject) => {
            await this.processFolder({
                levelPath: `${__base}/resources`,
                levelPathRelative: `resources`,
                folderContents: fs.readdirSync(`${__base}/resources`)
            });

            return resolve();
        });
    },
    async init_old() {
        return new Promise(async (resolve, reject) => {
            const __path_level_0 = `${__base}/resources`;
            const apps = fs.readdirSync(__path_level_0);
            /**
             * scan each app ( resource ) folder
             */
            for (const app of apps) {
                const __path_level_1 = `${__path_level_0}/${app}`;
                if (isDirectory({ dir: __path_level_1 }) && isAppDirectory(app)) {
                    console.log(`processing ${app}`);

                    const updateTime = getStamp();
                    const siteData = JSON.parse(fs.readFileSync(`${__path_level_1}/site.json`));
                    this.data[app] = {
                        ["meta"]: { ["resources"]: [], updateTime },
                        ["site"]: { ...siteData, updateTime }
                    };

                    const __path_level_2 = `${__path_level_1}/content`;
                    const appContents = fs.readdirSync(__path_level_2);
                    /**
                     * scan app/content folder
                     */
                    for (const content of appContents) {
                        const __path_level_3 = `${__path_level_2}/${content}`;
                        if (isDirectory({ dir: __path_level_3 })) {
                            const appContentFiles = fs.readdirSync(__path_level_3);
                            /**
                             * scan app/content/{content} folder
                             */
                            for (const file of appContentFiles) {
                                const __path_level_4 = `${__path_level_3}/${file}`;
                                if (isDirectory({ dir: __path_level_4 })) {
                                    const appInnerContentFiles = fs.readdirSync(__path_level_4);
                                    /**
                                     * scan app/content/{content}/{innerContent} folder
                                     */
                                    for (const innerFile of appInnerContentFiles) {
                                        await this.processFile({
                                            app,
                                            absolutePath: __path_level_4,
                                            relativePath: `resources/${app}/content/${content}/${file}`,
                                            file: innerFile,
                                            contentType: `${content}/${file}`
                                        });
                                    }
                                } else {
                                    await this.processFile({
                                        app,
                                        absolutePath: __path_level_3,
                                        relativePath: `resources/${app}/content/${content}`,
                                        file,
                                        contentType: content
                                    });
                                }
                            }
                        } else {
                            await this.processFile({
                                app,
                                absolutePath: __path_level_2,
                                relativePath: `resources/${app}/content`,
                                file: content,
                                contentType: "root"
                            });
                        }
                    }
                } else {
                    //
                }
            }

            return resolve();
        });
    },
    processFolder({ level = 0, levelPath, levelPathRelative, folderContents, app }) {
        return new Promise(async (resolve, reject) => {
            const ignoreContent = ["meta.json", "site.json"];

            for (const folderContent of folderContents) {
                if (ignoreContent.includes(folderContent) || folderContent.charAt(0) === "_") continue;

                const _levelPath = `${levelPath}/${folderContent}`;

                /* level specific handling */
                if (level == 0) {
                    const updateTime = getStamp();
                    const siteData = JSON.parse(fs.readFileSync(`${_levelPath}/site.json`));
                    this.data[folderContent] = {
                        ["meta"]: { ["resources"]: [], updateTime },
                        ["site"]: { ...siteData }
                    };
                }

                if (isDirectory({ dir: _levelPath })) {
                    // console.log(`processing ${folderContent} folder`);

                    const _level = level + 1;
                    const _levelPathRelative = `${levelPathRelative}/${folderContent}`;
                    const _folderContents = fs.readdirSync(_levelPath);
                    const _app = level === 0 ? folderContent : app; /* level specific handling */

                    await this.processFolder({
                        level: _level,
                        levelPath: _levelPath,
                        levelPathRelative: _levelPathRelative,
                        folderContents: _folderContents,
                        app: _app
                    });
                } else {
                    // console.log(`processing ${folderContent} file`);

                    await this.processFile({
                        app,
                        absolutePath: _levelPath,
                        relativePath: levelPathRelative,
                        file: folderContent,
                        contentType: levelPathRelative?.split("/").pop()
                    });
                }
            }

            return resolve();
        });
    },
    processFile({ app, absolutePath, relativePath, file, contentType }) {
        // console.log(`processing ${absolutePath}`);

        return new Promise(async (resolve, reject) => {
            let fileDetails = file.split(".");

            let fileName = fileDetails[0];
            let fileExtension = fileDetails[fileDetails.length - 1];
            let fileTags = fileDetails.slice(1, -1);
            let info = {};
            let multiverse = {};

            switch (fileExtension) {
                case "html":
                    try {
                        const htmlStr = fs.readFileSync(`${absolutePath}`, "utf8");
                        if (htmlStr) {
                            let content_dom = DomParserUtil.convertStringToNode(`<root>${htmlStr}</root>`);
                            let content_json = DomParserUtil.toJSON(content_dom);
                            let infoTagNode = DomParserUtil.findTagNode("info", content_json);

                            if (infoTagNode) {
                                for (let index = 0; index < infoTagNode.childNodes.length; index++) {
                                    const childNode = infoTagNode.childNodes[index];

                                    if (childNode.tagName?.indexOf("info-") === 0) {
                                        let tagName = childNode.tagName.split("info-")[1];

                                        let tagValue = "";
                                        for (let _index = 0; _index < childNode.childNodes?.length; _index++) {
                                            const _childNode = childNode.childNodes[_index];

                                            if (_childNode.nodeValue) {
                                                tagValue += _childNode.nodeValue;
                                            }
                                        }

                                        /**
                                         * resolve links relative path
                                         */
                                        if (tagName.indexOf("link-") === 0) {
                                            tagName = tagName.split("link-")[1];
                                            tagValue = `/${tagValue.replace("./", `${contentType}/`)}`;
                                        }

                                        info[tagName] = tagValue;
                                    }
                                }
                            }
                        }
                    } catch (error) {
                        console.error("failed to process .html", error);
                    }
                    break;

                case "md":
                    try {
                        const content = fs.readFileSync(`${absolutePath}`, "utf8");

                        const fmResult = MdUtil.fm(content);
                        info = fmResult.attributes;

                        const html = MdUtil.marked.parse(content);
                        const _file = `_${file.replace(".md", ".html")}`;
                        const _absolutePath = absolutePath.replace(file, _file);
                        fs.writeFileSync(_absolutePath, html, "utf8");
                        multiverse.html = {
                            file: _file,
                            filePath: `${relativePath}/${_file}`
                        };

                        if (info.version && info.version >= 2) {
                            let tokens = MdUtil.marked.lexer(fmResult.body);
                            updateAttrsInArray(tokens);
                            const __file = `_${file.replace(".md", ".json")}`;
                            const __absolutePath = absolutePath.replace(file, __file);
                            fs.writeFileSync(__absolutePath, JSON.stringify(tokens, null, 4));
                            multiverse.json = {
                                file: __file,
                                filePath: `${relativePath}/${__file}`
                            };
                        }
                    } catch (error) {
                        console.error("failed to process .md", error);
                    }
                    break;

                case "xlsx":
                    // convert to json
                    try {
                        var workbook = ExcelUtil.instance.readFile(absolutePath);

                        var results = ExcelUtil.instance.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

                        const _file = `_${file.replace(".xlsx", ".json")}`;
                        const _absolutePath = absolutePath.replace(file, _file);
                        fs.writeFileSync(_absolutePath, JSON.stringify(results, null, 4));
                        multiverse.json = {
                            file: _file,
                            filePath: `${relativePath}/${_file}`
                        };
                    } catch (error) {
                        console.error("failed to process .xlsx", error);
                    }
                    break;

                default:
                    break;
            }

            let result = {
                contentType,

                file,
                filePath: `${relativePath}/${file}`,
                fileName,
                fileExtension,
                fileTags: this.processTags({ app, fileTags }),

                info,

                multiverse
            };

            this.data[app]["meta"]["resources"].push(result);

            resolve();
        });
    },
    processTags({ app, fileTags = [] } = {}) {
        let result = {};

        if (
            !app ||
            !fileTags.length // comment if you want default tags assigned to resource
        )
            return result;

        let master = this.data[app].site.tags;

        if (master) {
            master = Object.entries(master);

            for (const [mk, mv] of master) {
                const matched = getIntersection(mv.values, fileTags);
                if (matched) fileTags = fileTags.filter(t => !matched.includes(t));
                result[mk] = matched || mv.default;
            }
        }

        if (fileTags.length) result["others"] = fileTags; //.join(", ");

        return result;
    },
    writeFiles() {
        return new Promise(async (resolve, reject) => {
            const data = Object.entries(this.data);

            for (const [app, appdata] of data) {
                fs.writeFileSync(
                    path.resolve(__base, `resources/${app}/meta.json`),
                    JSON.stringify(appdata.meta, null, 4)
                );
            }

            resolve();
        });
    }
};

(async () => {
    await task.init();

    await task.writeFiles();
})();

if (module) module.exports = {};
