module.exports = {
    //axios域代理，解决axios跨域问题
    // baseUrl: '/',
    publicPath: '/',
    devServer: {
        proxy: {
            '': {
                target: 'http://192.168.3.252:5000',
                changeOrigin: true,
                ws: true,
                pathRewrite: {

                }
            }
        }
    }
}