const path = require('path');
const webpack = require('webpack');

module.exports = {

    entry: {

        bundle: './app/bundle.js',
        slee: './app/app.js',
        theme: './app/theme.js'

    },

    output: {

        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        library: "Slee",
        libraryTarget: "umd"

    },

    module: {

        rules: [

            {

                // Transpile JS
                test: /\.js$/,
                include: [ path.resolve(__dirname, './app') ],
                use: [

                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }

                ]

            },

            {

                // Transpile Sass to CSS
                test: /\.sass$/,
                include: [ path.resolve(__dirname, './styles') ],
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]

            },

            {
                // SVG
                test: /\.svg$/,
                use: {
                    loader: 'svg-url-loader',
                    options: {}
                }
            }

        ]

    },

    plugins: [

        new webpack.optimize.UglifyJsPlugin({

            output: {
                comments: false,
                beautify: false
            }

        })

    ]

};