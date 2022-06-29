
const homeRoutuer = require('./home');
const CategoryRouter = require('./categories')
const PostRouter = require('./posts');
function route(app) {
  // app.get('/', (req, res) => {
  //     res.render('home')
  //   })

  //   app.get('/search', (req, res) => {
  //     console.log(req.query.query)
  //     res.render('search')
  //   })

  //   app.get('/new', (req, res) => {
  //     console.log(req.query.q)
  //     res.render('new')
  //   })
  // app.use('/chudes', chudesRouter);
  // app.use('/news', newsRouter);
  app.use('/posts', PostRouter);
  app.use('/category', CategoryRouter);
  app.use('/', homeRoutuer);
}

module.exports = route;
