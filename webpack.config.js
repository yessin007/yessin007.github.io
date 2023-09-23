// webpack.config.js

module.exports = {
    // ...other webpack configuration options...

    output: {
        filename: 'bundle.js',
        // Set the MIME type for the generated JavaScript modules
        module: {
            type: 'module',
        },
    },

    module: {
        rules: [
            // ...other webpack rules...

            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    },
                },
            },
        ],
    },
};