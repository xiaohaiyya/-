module.exports = {
    //axios域代理，解决axios跨域问题
    // baseUrl: '/',
    publicPath: '/',
    devServer: {
        proxy: {
            '': {
                target: 'http://192.168.3.61:20005',
                changeOrigin: true,
                ws: true,
                pathRewrite: {

                }
            }
        }
    }
}