var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: './assets/js/main.jsx',
    output: {
        filename: './assets/js/bundle.js', //this is the default name, so you can skip it

        //at this directory our bundle file will be available
        //make sure port 8091 is used when launching webpack-dev-server
        publicPath: 'http://localhost:8091/assets'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            }
        ]
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        'react': 'React'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
        modulesDirectories: ['node_modules', 'bower_components']
        /*
         ,
         root: [path.join(__dirname, "bower_components")]
         */
    },
    plugins: [
        /*
         new webpack.ResolverPlugin(
         new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
         )
         */
    ]
};
