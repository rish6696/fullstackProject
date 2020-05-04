const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware('/v1/auth/loginGoogle', { target: 'http://localhost:8555', changeOrigin:true }) );
};