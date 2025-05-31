const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const CopyPlugin = require('copy-webpack-plugin');

//Configure prod enviroment by using common configuration and adding some more options
module.exports = merge(common, {
    mode: 'production',
    devtool: false,
    //we can add many of optimizations configurations as minification, compression and so on, 
    //but to be a minumal project exemple so its needs to have only minimal configuration
        plugins: [ 
        new CopyPlugin({
            patterns: [
                {
                    from: 'public/pdfs', 
                    to: 'pdfs',          
                },
            ],
        }),
    ],
})