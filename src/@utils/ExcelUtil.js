const XLSX = require("xlsx");

const EXCEL_UTIL = {
    instance: XLSX
};

if (module) {
    module.exports = EXCEL_UTIL;
}
