import axios from "axios";
import { serializeParams } from "@utils";

const proxy = false; // TODO - make it dynamic | setting it to false currently since we achieved same using MODHEADER ext.
const SERVER = proxy ? "http://localhost:8010/proxy" : window.CONST?.remoteServerUrl || ""; // https://www.npmjs.com/package/local-cors-proxy | had to use local proxy server since api server was giving cors error.
const APP = window.CONST?.APP || "";
const PREFIX = `${SERVER}${APP ? "/" + APP : ""}`;
const CDN_PREFIX = window.CONST?.remoteJsUrl;

const globalUrlMap = {};

const getUrlMapBasedOnApp = app => globalUrlMap[app];

const DataService = {
    urlMap: getUrlMapBasedOnApp(`${APP}`) || {},

    store: {},

    async init() {
        console.log("Dataservice init");
        this.source = axios.CancelToken.source();
        return this.loadMetaData(APP);
    },

    abortRequests() {
        this.source.cancel();
        this.source = axios.CancelToken.source();
    },

    async get(url, data, _config) {
        let config = _config || {};

        config = {
            ...config,
            headers: {
                Accept: "application/json",
                ...config.headers
            }
        };

        let finalUrl = (_config?.ignorePrefix ? "" : PREFIX) + this.prepare(url, config);

        return axios
            .request({
                url: finalUrl,
                method: "get",
                responseType: config.responseType,
                headers: config.headers,
                params: data,
                cancelToken: config.cancelToken || this.source.token
            })
            .then(async resp => {
                await this.interceptResponse(resp, url, config, data);
                return resp;
            })
            .catch(async resp => {
                throw resp;
            });
    },

    async post(url, data, _config) {
        let config = _config || {};

        config = {
            ...config,
            headers: {
                Accept: "application/json",
                ...config.headers
            }
        };

        let finalUrl = (_config?.ignorePrefix ? "" : PREFIX) + this.prepare(url, config);

        return axios
            .request({
                url: finalUrl,
                data: data,
                method: "post",
                responseType: config.responseType,
                params: config.params,
                headers: config.headers,
                cancelToken: config.cancelToken || this.source.token
            })
            .then(async resp => {
                await this.interceptResponse(resp, url, config, data);
                return resp;
            })
            .catch(async resp => {
                throw resp;
            });
    },

    async postFormData(url, _data, config) {
        let data = _data || {};
        const params = serializeParams(data);
        return this.post(url, params, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            ...config
        });
    },

    async put(url, data, _config) {
        let config = _config || {};

        config = {
            ...config,
            headers: {
                Accept: "application/json",
                ...config.headers
            }
        };

        let finalUrl = (_config?.ignorePrefix ? "" : PREFIX) + this.prepare(url, config);

        return axios
            .request({
                url: finalUrl,
                data: data,
                method: "put",
                responseType: config.responseType,
                params: config.params,
                headers: config.headers,
                cancelToken: config.cancelToken || this.source.token
            })
            .then(async resp => {
                await this.interceptResponse(resp, url, config, data);

                return resp;
            })
            .catch(async resp => {
                throw resp;
            });
    },

    async delete(url, data, _config) {
        let config = _config || {};

        config = {
            ...config,
            headers: {
                Accept: "application/json",
                ...config.headers
            }
        };

        let finalUrl = (_config?.ignorePrefix ? "" : PREFIX) + this.prepare(url, config);

        return axios
            .request({
                url: finalUrl,
                method: "delete",
                responseType: config.responseType,
                headers: config.headers,
                params: data,
                cancelToken: config.cancelToken || this.source.token
            })
            .then(async resp => {
                await this.interceptResponse(resp, url, config, data);
                return resp;
            })
            .catch(async resp => {
                throw resp;
            });
    },

    async interceptResponse(resp, url, config, data) {
        if (resp.data.redirectUrl) {
            window.location.href = resp.data.redirectUrl;
        }

        this.checkDownload(resp);
    },

    checkDownload(resp) {
        if (!resp || !resp.headers["content-disposition"]) return;
        let fileName = (resp.headers["content-disposition"] || "attachment; filename=report.pdf")
            .split(" ")[1]
            .split("=")[1];
        const url = window.URL.createObjectURL(new Blob([resp.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    },

    prepare(url, config) {
        url = this.urlMap[url] || url;
        console.log(url.charAt(0));
        for (var i in config) {
            url = url.replace("{" + i + "}", config[i]);
        }
        return url;
    },

    login() {
        window.location.assign(PREFIX + this.prepare("login"));
    },

    logout() {
        window.location.assign(PREFIX + this.prepare("logout"));
    },

    getFromCDN(url, options = {}) {
        return axios.get(CDN_PREFIX + url, options);
    },

    /* Framework methods start */

    getResourcePath(name) {
        return `/resources/app${APP === "app" ? "-mry" : "-" + APP}${name ? "/" + name : ""}`;
    },

    getResource(name) {
        return this.getFromCDN(this.getResourcePath(name));
    },

    /**
     * Search content by name
     */
    searchResourceByName({ name, query = {}, options = {}, ignoreExtension = true, file = true }) {
        let resourceMeta = null;

        let nameArr = name.split("/");
        let _contentType = nameArr.length > 1 ? nameArr[nameArr.length - 2] : "content";
        let _name = nameArr[nameArr.length - 1];

        for (let i = 0; i < this.store.meta.resources.length; i++) {
            const resource = this.store.meta.resources[i];

            if (
                ((ignoreExtension && resource.fileName === _name) || (!ignoreExtension && resource.file === _name)) &&
                _contentType === resource.contentType
            ) {
                // let queryArr = Object.entries(query);
                // let hasQuery = !!queryArr.length;

                // let tagsArr = Object.entries(resource.fileTags);
                // let hasTags = !!tagsArr.length;

                // let checkFilters = hasQuery || hasTags;

                // if (checkFilters) {
                if (this.matchApplicable({ resource, query })) {
                    // let filtersMatchedArr = queryArr.map(([q, v]) => {
                    //     let r = resource.fileTags[q] === v;
                    //     return r ? [q, v] : false;
                    // });
                    // let filtersMatchedResult =
                    //     filtersMatchedArr.every(r => !!r) && filtersMatchedArr.length === tagsArr.length;

                    // if (filtersMatchedResult) {
                    if (this.matchTags({ resource, query })) {
                        resourceMeta = resource;
                    }
                } else {
                    resourceMeta = resource;
                }

                if (resourceMeta) break;
            }
        }

        if (resourceMeta) {
            if (file) {
                return this.getFromCDN(`/${resourceMeta.filePath}`, options);
            } else {
                return resourceMeta;
            }
        } else {
            throw new Error(`${name} not found`);
        }
    },

    /**
     * Search content by type
     */
    searchResourceByType({ contentType = "content", query = {}, options = {} }) {
        return new Promise((resolve, reject) => {
            let results = (this.store.meta?.resources || []).filter(resource => {
                if (resource.contentType !== contentType) return false;

                return this.matchTags({ resource, query });
            });

            resolve(results);
        });
    },

    matchApplicable(params) {
        const { resource, query = {} } = params;

        let queryArr = Object.entries(query);
        let hasQuery = !!queryArr.length;

        let tagsArr = Object.entries(resource.fileTags);
        let hasTags = !!tagsArr.length;

        return hasQuery || hasTags;
    },

    matchTags(params) {
        const { resource, query = {}, exact = false } = params;
        // console.log("matchResourceTags", { exact, query, tags: resource.fileTags });

        let result = true;

        if (this.matchApplicable(params)) {
            let queryArr = Object.entries(query);
            let queryValMatchesTagDefaultValCount = 0;

            let matchedArr = queryArr.map(([q, v]) => {
                let r;

                if (q === "others") {
                    let _v = v.split(",");
                    let _r = _v
                        .map(o => {
                            return !!resource.fileTags[q]?.includes(o);
                        })
                        .filter(__r => !!__r);

                    if (exact) {
                        r = _r.length === resource.fileTags[q]?.length;
                    } else {
                        r = _r.length === _v.length;
                    }
                } else {
                    r = resource.fileTags[q] === v;

                    if (!r) {
                        if (!resource.fileTags.hasOwnProperty(q) && !this.store.site.tags.hasOwnProperty(q)) {
                            r = true;
                        }
                        if (this.store.site.tags[q]?.default === v) {
                            r = true;
                            queryValMatchesTagDefaultValCount++;
                        }
                    }
                }

                return r;
            });
            // console.log("matchedArr", matchedArr);

            if (exact) {
                let tagsArr = Object.entries(resource.fileTags);
                result =
                    matchedArr.every(r => !!r) &&
                    matchedArr.length === tagsArr.length + queryValMatchesTagDefaultValCount;
            } else {
                result = matchedArr.every(r => !!r) && matchedArr.length === queryArr.length;
            }
        }

        // console.log("result", result);
        return result;
    },

    /* Framework methods end */

    loadMetaData(app) {
        return new Promise(async (resolve, reject) => {
            if (!this.urlMap.loadMetaData) return resolve();

            console.log("Dataservice loadMetaData");
 
            // try {
            //     const siteResp = await this.getResource(`site.json`);
            //     const metaResp = await this.getResource(`meta.json`);

            //     this.store["site"] = siteResp.data;
            //     this.store["meta"] = metaResp.data;

            //     console.log(this.store);

            //     return resolve(this.store);
            // } catch (error) {
            //     console.error("Error while fetching Meta Data", error);

            //     return reject(error);
            // }
        });
    }
};

export default DataService;
