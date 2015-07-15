module.exports = {
  context: path.join(__dirname, 'app/assets/javascripts'),
  entry: "./entry",
  output: {
    path: path.join(__dirname, 'public'),
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
      }
    ]
  }
};
