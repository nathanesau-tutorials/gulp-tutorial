const webpack = require('webpack')

const config = {
    entry: './src/js/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'main.js'
    },
    watch: true
}

module.exports = config