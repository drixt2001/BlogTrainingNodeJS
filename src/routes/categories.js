var express = require('express');
var router = express.Router();

const CategoriesController = require('../app/controllers/CategoriesController');
router.get('/', CategoriesController.index);
router.get('/:slug', CategoriesController.posts);
module.exports = router;
