const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');

router.get('/', articleController.getAllArtticles);
router.get('/article/:slug', articleController.getArticleBySlug);
router.get('/author/:author_id', articleController.getAtricleByAuthor);

module.exports = router;
