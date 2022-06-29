const homeRoutuer = require('./home');
const CategoryRouter = require('./categories')
const PostRouter = require('./posts');
function route(app) {
  app.use('/posts', PostRouter);
  app.use('/category', CategoryRouter);
  app.use('/', homeRoutuer);
}

module.exports = route;
