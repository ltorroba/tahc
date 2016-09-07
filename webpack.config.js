var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    "./src/index.tsx"
  ],

  output: {
    filename: "./dist/bundle.js",
  },

  devtool: "source-map",

  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".css", ".scss"]
  },

  module: {
    loaders: [
      { test: /\.tsx?$/, loaders: ["react-hot-loader/webpack", "ts-loader"] },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.scss$/, loaders: ["style", "css", "sass"] }
    ],

    preLoaders: [
      { test: /\.js$/, loader: "source-map-loader" }
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "react-router": "ReactRouter",
    "redux": "Redux",
    "redux-actions": "ReduxActions"
  },

  plugins: [new HtmlWebpackPlugin({
    template: "index.html"
  })]
};
