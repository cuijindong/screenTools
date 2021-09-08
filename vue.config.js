const config = require("./src/config");
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "src/assets/css/public.scss";`
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
    },
    // 开发环境访问地址、代理等配置
    devServer: {
        host: '0.0.0.0',
        port: '9000',
        proxy: {
            '/api': {
                target: config.baseUrl,
                changeOrigin: true, // 跨域
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
