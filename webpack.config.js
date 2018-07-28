const path = require('path');

module.exports = {
    entry:{
        index:"./src/index.js"
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'example')
    },
    optimization: {
        splitChunks: {
            minChunks:1, //入口引用公共模块的次数，如设置成2则是当两个入口都用到了某个模块时，该模块才会被提取打包成一个chunk，默认为1
            chunks: 'all',//initial 只对入口初始化依赖模块进行处理,对于异步导入的文件不处理;async 异步chunk，只对异步导入的文件处理（个人理解);all 全部chunk（我反正选all，不甚理解）
            minSize: 30000, //文件大于30kb会进行处理
            maxAsyncRequests: 5, //每个页面最大异步请求（即打包出来的js文件/chunk数目）不可超过5
            maxInitialRequests: 3, //每个页面最大初始化请求（即打包出来的js文件/chunk数目）不可超过3,否则请求数过多，没有必要再分chunk
            automaticNameDelimiter: '_',  //自动命名连接符
            name:true,//使用自动命名，也可以使用函数返回值进行自定义
            // 通过 optimization 配置可以将模块分配给缓存组。
            // 默认会将node_modules中的所有模块分配到一个名为vendors的缓存组；并将所有被引用2次及以上的模块分配到一个名为default的变更组。
            // 一个模块可以被分配给多个缓存组。 Optimization 会优先选择更高优先级（priority 选项）的缓存组，或者更大的缓存组。
            cacheGroups: {  //缓存组可以继承和/或覆盖splitChunk中的任何选项
                vendors: {
                    test:/[\\/]node_modules[\\/]/,
                    priority: -5,
                    minChunks: 1
                },
                vendors_2: {
                    test:/[\\/]node_modules[\\/]/,
                    priority: -8,
                    minChunks: 2,
                    name:'name2'
                },
                default: {  //不符合上面的test规则的chunk就用这个规则
                    minChunks: 2,
                    priority: -15,
                    reuseExistingChunk: true
                }
            }
        }
    }
}

