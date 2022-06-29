class HomeController {
  //GET /
  direct(req, res, next) {
    if(req.signedCookies.emailuser){
      res.redirect('/posts')
    } else{
      res.redirect('/signin')
    }
  }

}

module.exports = new HomeController();
