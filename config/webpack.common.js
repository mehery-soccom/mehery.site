const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const __base = path.resolve(__dirname, "..");
const __src = path.resolve(__base, "src");

module.exports = {
    entry: path.resolve(__src, "main.js"),

    output: {
        clean: true,
        path: path.resolve(__base, "dist"),
        filename: "[name].bundle.js",
        chunkFilename: "[name].chunk.js"
    },

    resolve: {
        alias: {
            vue: "@vue/compat", // compatiibilty for vue 2
            // vue$: "vue/dist/vue.esm.js", // If using the runtime only build
            vue$: "vue/dist/vue.runtime.esm.js", // If using full build of Vue (runtime + compiler)

            "@src": path.resolve(__base, "src"),
            "@assets": path.resolve(__base, "src/@assets"),
            "@components": path.resolve(__base, "src/@components"),
            "@layout": path.resolve(__base, "src/@layout"),
            "@services": path.resolve(__base, "src/@services"),
            "@utils": path.resolve(__base, "src/@utils")
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__base, "public", "index.html"),
            favicon: path.resolve(__base, "public", "favicon.ico"),
            inject: false
        }),
        new MiniCssExtractPlugin({
            filename: "[name].bundle.css",
            chunkFilename: "[name].chunk.css"
        }),
        new VueLoaderPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "resources",
                    to: "resources"
                }
            ]
        })
    ],

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    compilerOptions: {
                        compatConfig: {
                            MODE: 2
                        }
                    }
                }
            },

            {
                test: /\.js$/,
                loader: "babel-loader"
            },

            // SASS and CSS files from Vue Single File Components:
            {
                test: /\.vue\.(s?[ac]ss)$/,
                use: ["vue-style-loader", "css-loader", "sass-loader"]
            },

            // SASS and CSS files (standalone):
            {
                test: /(?<!\.vue)\.(s?[ac]ss)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },

            {
                test: /\.(woff|woff2|eot|ttf|svg|jpg|jpeg|gif|png|ico)$/,
                type: "asset/resource"
            }
        ]
    }
};
