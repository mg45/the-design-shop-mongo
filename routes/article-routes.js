const express = require('express');

const articlesControllers = require('../controllers/articles-controller')

const router = express.Router();

router.get('/', articlesControllers.getAllArticles)
router.get('/articles/new', articlesControllers.newArticle)
router.get('/articles/:articleId', articlesControllers.getArticleById)
router.post('/articles/new', articlesControllers.createArticle)
router.get('/articles/form/update/:articleId', articlesControllers.updateArticleForm)
router.post('/articles/update', articlesControllers.updateArticle)
router.get('/articles/delete/:articleId', articlesControllers.deleteArticle)

module.exports = router;