const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const webpack = require('webpack');
const cssnano = require('cssnano');
const isDev = process.env.NODE_ENV === 'development';
const styleLoader = isDev ? 'style-loader' : MiniCssExtractPlugin.loader;

module.exports = {
  entry: {
    index: './src/index.js',
    articles: './src/articles.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      //{
        //test: /\.css$/, // применять это правило только к CSS-файлам
        //use: [MiniCssExtractPlugin.loader, 'css-loader'] // к этим файлам нужно применить пакеты, которые мы уже установили
      //},
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|ico|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: 'images',
              outputPath: 'images',
              useRelativePath: true,
              esModule: false,
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {}
          },
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=./vendor/[name].[ext]&publicPath=../',
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new HtmlWebpackPlugin({ // настроили плагин
      inject: false,
      template: './src/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/articles.html',
      filename: 'articles.html',
    }),
    new WebpackMd5Hash(),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano,
      cssProcessorPluginOptions: {
        preset: ['default', {
          discardComments: {
            removeAll: true
          },
          canPrint: true
        }]
      },
    }),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}

