var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');


const HomeController = require('../app/controllers/HomeController');
const UsersController = require('../app/controllers/UsersController');

router.get('/signup', UsersController.signuplayout);
router.post('/signup', UsersController.signup);
router.get('/signin', UsersController.signin);
router.post('/login', UsersController.login);
router.get('/logout', UsersController.logout);
router.get('/profile', UsersController.profile);
router.post('/profile', UsersController.profileUpdate);
router.get('/profile/:u', UsersController.profile);
router.get('/', HomeController.direct);


module.exports = router;
