var express = require('express');
var router = express.Router();

const PostsController = require('../app/controllers/PostsController');
router.get('/me/public', PostsController.userpostpublic);
router.get('/me/draft', PostsController.userpostdraft);
router.get('/me', PostsController.userpost);
router.get('/new', PostsController.newpost);
router.post('/create', PostsController.create);
router.get('/public', PostsController.public);
router.get('/:id/edit', PostsController.edit);
router.put('/:id', PostsController.update);
router.get('/:id/status', PostsController.status);
router.delete('/:id', PostsController.delete);
router.get('/', PostsController.index);

module.exports = router;
