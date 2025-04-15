export const MRY_APP_NAME = "mry";
export const MRY_APP_CONTEXT = "";

export const PUSH_APP_NAME = "pushapp";
export const PUSH_APP_CONTEXT = "pushapp";

export const APP = window.CONST.APP;
export const APP_CONTEXT = {
    app: "app",
    [MRY_APP_NAME]: MRY_APP_CONTEXT ? `/${MRY_APP_CONTEXT}` : "",
    [PUSH_APP_NAME]: PUSH_APP_CONTEXT ? `/${PUSH_APP_CONTEXT}` : ""
}[window.CONST.APP];

export const remoteServerUrl = window.CONST.remoteServerUrl;
export const remoteJsUrl = window.CONST.remoteJsUrl;
