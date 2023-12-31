const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const Dotenv = require( 'dotenv-webpack' );
const { InjectManifest } = require( 'workbox-webpack-plugin' );
const CopyPlugin = require( 'copy-webpack-plugin' );

const webpackPlugins = [
    new HtmlWebpackPlugin( {
      template: path.resolve( __dirname, 'public/index.html' ),
      filename: 'index.html',
    } ),
    new Dotenv( {
      path: './.env', // Path to .env file (this is the default)
      systemvars: true,
    } ),
    new CopyPlugin( {
      patterns: [
        { from: './src/favicon.ico', to: '' },
        { from: './src/manifest.json', to: '' },
        { from: './src/logo192.png', to: '' },
        { from: './src/logo512.png', to: '' },
      ],
    } ),
];

if ( 'production' === process.env.NODE_ENV ) {
    webpackPlugins.push( new InjectManifest( {
      swSrc: './src/src-sw.js',
      swDest: 'sw.js',
    } ) );
}
  

module.exports = {
    entry: {
        app: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
       historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|svg|gif)?$/,
                use: 'file-loader?name=./images/[name].[ext]'
            },
            {
                test: /\.(mov|mp4|webm)$/,
                type: 'asset',
            },
            {
                test: /\.txt/,
                type: 'asset/source'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env' ],
                        plugins: [ '@babel/plugin-proposal-class-properties' ]
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /strings\.json$/,
                use: [
                    'webpack-json-access-optimizer', 
                ],
                type: 'json'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    plugins: webpackPlugins,
};