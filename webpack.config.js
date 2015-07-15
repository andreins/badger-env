module.exports = {
  entry: "./app/assets/javascripts/entry",
  output: {
    path: './public',
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      },
      {
        test: require.resolve("React"),
        loader: "expose?React"
      }
    ]
  }
};
