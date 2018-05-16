const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
let publicPathStr = '/entry/'; // 公共路径字符串
const path = require('path');
module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // __dirname指的是当前文件所在目录的根目录
        filename: '[name].js',
        // publicPath: publicPathStr,
        // library: 'app',
        // libraryTarget: 'commonjs2',
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
    },
    // target: "node",
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', // 生成文件位置
            template: 'src/template/index.html', // 模版文件位置
            // chunks: [lastPortion], // 绑定对应打包的JS文件
        }),
        new VueLoaderPlugin()
        // 指定生产环境，以便在压缩时可以让 UglifyJS 自动删除警告代码块,根据环境配置开启
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                include: path.resolve(__dirname),
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
        ],
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        hot: true, // 告诉 dev-server 我们在使用 HMR
        contentBase: path.resolve(__dirname, 'node_modules'),
        inline: true,
        historyApiFallback: true,
        stats: 'normal',
        publicPath: publicPathStr,
        host: '0.0.0.0',
        port: 8000,
    },
}