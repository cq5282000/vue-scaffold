const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
let publicPathStr = '/entry/'; // 公共路径字符串
const path = require('path');
let NODE_ENV = process.env.NODE_ENV || 'production';
if (NODE_ENV.toLowerCase() === 'product') {
    NODE_ENV = 'production';
}
let webpackConfig = {
    entry: {
        app: [
            './src/app.js'
        ]
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
    mode: NODE_ENV,
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', // 生成文件位置
            template: 'src/template/index.html', // 模版文件位置
            // chunks: [lastPortion], // 绑定对应打包的JS文件
        }),
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(NODE_ENV),
            },
        })
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
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.less$/,
                use: [
                    'less-loader',
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            javascriptEnabled: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
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
switch(NODE_ENV) {
    case 'development':
        webpackConfig.entry.app = [
            'webpack-dev-server/client?http://localhost:8000/',
            'webpack/hot/dev-server',
            ...webpackConfig.entry.app, 
        ];
        webpackConfig.plugins = [
            ...webpackConfig.plugins,
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ];
        break;
    case 'production':
        webpackConfig.plugins = [
            ...webpackConfig.plugins,
            // 指定生产环境，以便在压缩时可以让 UglifyJS 自动删除警告代码块,根据环境配置开启
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ];
}
module.exports = webpackConfig;