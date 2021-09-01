const path = require('path')
module.exports = {
    devServer:{
        host:'0.0.0.0',
        port:'8080',
        // https:false,
        open:true,
        //以上的ip和端口是我们本机的;下面为需要跨域的
        proxy:{ //配置跨域
            '/api':{
                target:'http://localhost:3000/',// 后端服务的 http 地址
                ws:true,
                changeOrigin:true,//允许跨域
                pathRewrie:{
                    '^/api':''   //请求的时候使用这个api就可以
                }
            }
        }
    },
    configureWebpack: {
        resolveLoader: {
          modules: ['node_modules', path.join(__dirname, 'src/loader')],
        },
      },
    chainWebpack: config => {
        config.module
            .rule('xml')
            .test(/\.xml$/)
            .use('xml-loader')
            .loader('xml-loader')
            .end()
    }
}