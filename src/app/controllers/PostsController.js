const Posts = require('../models/Posts');
const Category = require('../models/Categories');
class PostsController {
  
  //GET /posts
  index(req, res, next) {
    Posts.find({status: 'public'}).lean()
    .then(Posts => res.render('postpublic',{
      Posts
    }))
    .catch(next);
  }
  
  //GET /posts/public
  public(req, res, next) {
    Posts.find({status: 'public'}).lean()
    .then(Posts => res.render('post',{
      Posts
    }))
    .catch(next);
  }

  //GET /posts/new
  newpost(req, res, next) {
    if(req.signedCookies.emailuser){
      var email = req.signedCookies.emailuser;
      Category.find({}).lean()
          .then(Category => res.render('newpost',{
            Category, email
          }))
          .catch(next);
    } else{
      res.redirect('/signin')
    }
    
  }

  //POST /posts/create
  create(req, res, next) {
    const Post = new Posts(req.body);
    Post.save().then(() => res.redirect('/posts'))
  }

  //GET /posts/:id/edit  
  edit(req, res, next) {
    Category.find({}).lean()
    .then(Category => {
      Posts.findById(req.params.id).lean()
      .then(Posts => res.render('editpost',{
      Posts, Category}))
      .catch(next);
    }).catch(next);
    
  }


  //PUT /posts/:id
  update(req, res, next) {
    Posts.updateOne({ _id: req.params.id}, req.body).lean()
    .then(Posts => res.redirect('back'))
    .catch(next);
  }

  //GET /post/:id/status
  status(req, res, next) {
    Posts.findById(req.params.id).lean()
    .then(Posts => res.render('changestatus',{
      Posts}))
    .catch(next);
  }

  //DELETE /posts/:id
  delete(req, res, next) {
    Posts.deleteOne({ _id: req.params.id}).lean()
    .then(() => res.redirect('back'))
    .catch(next);
  }

  //DELETE /posts/me/public
  userpostpublic(req, res, next) {
    if(req.signedCookies.emailuser){
        Posts.find({status: 'public', email: req.signedCookies.emailuser}).lean()
        .then(Posts => res.render('post',{
          Posts
        }))
        .catch(next);
    } else{
      res.redirect('/signin')
    }
  }
  
  //DELETE /posts/me/public
  userpostdraft(req, res, next) {
    if(req.signedCookies.emailuser){
        Posts.find({status: 'draft', email: req.signedCookies.emailuser}).lean()
        .then(Posts => res.render('post',{
          Posts
        }))
        .catch(next);
    } else{
      res.redirect('/signin')
    }
  }

  userpost(req, res, next) {
    if(req.signedCookies.emailuser){
        Posts.find({email: req.signedCookies.emailuser}).lean()
        .then(Posts => res.render('post',{
          Posts
        }))
        .catch(next);
    } else{
      res.redirect('/signin')
    }
  }
}

module.exports = new PostsController();
