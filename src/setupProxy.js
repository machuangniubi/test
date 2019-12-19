const proxy = require('http-proxy-middleware')
module.exports = function(app) {
    app.use(proxy('/ali', { 
        target: 'https://job.alibaba.com/' ,
        changeOrigin: true,
        pathRewrite: {
        "^/ali": "/"
        }
    }))
}