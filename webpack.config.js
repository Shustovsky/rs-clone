const path = require('path');
const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack')

const baseConfig = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|mp3)$/i,
                type: 'asset',
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.ico$/,
                loader: 'file-loader'
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            },
            {
                test: /\.js$/, loader: "source-map-loader"
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'],
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        assetModuleFilename: 'images/[hash][ext][query]',
    },
    resolve: {
        extensions: [ ".ts", ".js"],
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src', 'template.html'),
            favicon: path.join(__dirname, 'src', 'assets', 'icons', 'favicon.ico'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        })
    ]
};

module.exports = ({mode}) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};
