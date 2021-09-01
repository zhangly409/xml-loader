# xml-loader

## 为什么需要 loader

webpack只能解析js和JSON文件，需要loader对于一些解析不了的文件进行转换。

## 定义一个loader

见 src/loader/xml-loader

## webpack配置

    ```js
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
    ```
