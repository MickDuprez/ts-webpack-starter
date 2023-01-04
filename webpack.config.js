const path = require('path')

module.exports = {
    devtool: 'eval-source-map',
    entry: "./src/main.ts",
    module: {
        rules: [
            {
                test: /\.ts$/, // test for .ts files only
                use: 'ts-loader', // now use ts-loader on these files
                include: [path.resolve(__dirname, 'src')] // and only include files from the src dir
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        publicPath: 'auto',
        filename: "bundle.js",
        path: path.resolve(__dirname, "public")
    }
}