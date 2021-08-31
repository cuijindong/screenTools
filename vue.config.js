const config = require("./src/config");

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "src/assets/css/public.scss";`
            }
        }
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
