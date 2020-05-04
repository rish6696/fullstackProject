const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware('/v1/auth/getUser', { target: 'http://localhost:5896', changeOrigin:true }) );
  app.use(createProxyMiddleware('/v1/auth/loginGoogle', { target: 'http://localhost:5896', changeOrigin:true }) );
};