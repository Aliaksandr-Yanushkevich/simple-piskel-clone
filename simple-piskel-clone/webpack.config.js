const path = require('path');

let conf = {
  entry: {
    index: './src/index.js',
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          cache: true,
          fix: true
        },
      },
      {
        test: /\.css|scss$/,
        use: ['style-loader', 'css-loader','sass-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'url-loader',
        options: {
          name: "./fonts/[name].[ext]",
          publicPath: "../",
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: "./fonts/[name].[ext]",
          publicPath: "../",
        }
      }
    ]
  }
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    conf.devtool = 'source-map';
  }
  return conf;
};
