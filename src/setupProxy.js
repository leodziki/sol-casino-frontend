const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config({ path: '.env.local' });

module.exports = function(app) {
  app.use(
    '/api/',
    createProxyMiddleware({
      target: process.env.REACT_APP_SERVER_URI,      
      changeOrigin: true,
    })
  );
};