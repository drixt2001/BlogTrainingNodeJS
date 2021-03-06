const Categories = require('../models/Category');
const Posts = require('../models/Post');

class CategoriesController {
  
    //GET /category
    index(req, res, next) {
        Categories.find({}).lean()
        .then(Categories => res.render('category',{
        Categories
        }))
        .catch(next);
    }
    //GET /category/:slug
    posts(req, res, next) {
        Posts.find({category: req.params.slug, status: 'public'}).lean()
        .then(Posts => res.render('post',{
          Posts
        }))
        .catch(next);
      }
}

module.exports = new CategoriesController();
