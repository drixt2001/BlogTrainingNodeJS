const User = require('../models/User');
const cookieParser = require('cookie-parser');
class UsersController {

  //GET /signup
  signuplayout(req, res, next) {
    res.render('signup')
  }
  
  //POST /signup
  signup(req, res, next) {
    const user = new User(req.body);
    User.findOne({email: req.body.email}).lean()
        .then(User => {
          if(User){
            res.render('signup',{User})
          } else{
            res.cookie('emailuser', req.body.email, { signed : true });
            user.save().then(() => res.redirect('/profile'))
          }
        })
        .catch(next);
  }

  //GET /login
  signin(req, res, next) {
    res.render('login')
    // console.log(req.signedCookies.emailuser)
  }

  //POST /login
  login(req, res, next) {
    var Show = {showAlert: true};
    User.findOne({email: req.body.email, password: req.body.password}).lean()
        .then(User => {
          if(User){
          // Set cookie
          res.cookie('emailuser', req.body.email, { signed : true });
          res.redirect('profile')
          } else{
            res.render('login',{Show})
          }
        })
        .catch(next);
  }

  //GET /profile
  profile(req, res, next) {
    if(req.signedCookies.emailuser){
      var u = req.query.u;
      console.log(u);
      User.findOne({email: req.signedCookies.emailuser}).lean()
      .then(User => res.render('user',{
        User, u}))
      .catch(next);
    } else{
      res.redirect('/signin')
    }
    
  }

  //GET /logout
  logout(req, res, next) {
    res.clearCookie('emailuser');
    res.redirect('/signin')
  }

  //POST /profile
  profileUpdate(req, res, next) {
    var Show = {showAlert: true};
    User.updateOne({email: req.signedCookies.emailuser}, req.body).lean()
    .then(User => res.redirect('profile/?u='+req.signedCookies.emailuser))
    .catch(next);
    
  }
}



module.exports = new UsersController();
