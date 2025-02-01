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
            vue: "@vue/compat",
            vue$: "vue/dist/vue.runtime.esm.js",
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
        }),
        new MiniCssExtractPlugin({
            ignoreOrder: true, 
        }),
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
  test: /\.vue$/,
  resourceQuery: /type=style.*lang=scss/,
  use: ["vue-style-loader", "css-loader", "sass-loader"]
},
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            
            {
                test: /\.vue\.(s[ac]ss)$/,
                use: ["vue-style-loader", "css-loader", "sass-loader"]
            },
            
            
            {
                test: /(?<!\.vue)\.(s[ac]ss)$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg|jpg|jpeg|gif|png|ico)$/,
                type: "asset/resource"
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
            }
        ]
    }
};
