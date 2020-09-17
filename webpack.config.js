const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: `${__dirname}/dist/js`
    },
    devServer:
    {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html', filename: 'index.html' })
    ]
    ,
    module:
    {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                use:
                {
                    loader: 'babel-loader'
                }
            },
            {
                test: /.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'style-loader'
                    }
                ]
            }
        ]
    }

}