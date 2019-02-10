const routes = require('next-routes');

module.exports = routes()
  .add('index', '/')
  .add('content', '/:slug+');
