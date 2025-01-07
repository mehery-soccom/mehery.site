// vue.config.js
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                implementation: require("sass"),
                sassOptions: {
                    // Optional: Silence deprecation warnings
                    silenceDeprecations: ["legacy-js-api"]
                }
            }
        }
    }
};
