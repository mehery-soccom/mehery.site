__webpack_public_path__ = `${window.CONST.remoteJsUrl}/${
    window.CONST.buildFolder ? window.CONST.buildFolder + "/" : ""
}`;

// if (!window.CONST.APP) {
    // console.log("window.CONST.APP found empty");

    let pathname = location.pathname;

    if (pathname.indexOf("/app") === 0) {
        window.CONST.APP = "app";
    } else if (pathname.indexOf("/pushapp") === 0) {
        window.CONST.APP = "pushapp";
    } else {
        window.CONST.APP = "mry";
    }
// }

console.log("window.CONST.APP", window.CONST.APP);
