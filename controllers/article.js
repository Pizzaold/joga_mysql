const articleDBModel = require('../models/article')
const articleModel = new articleDBModel();

class articleController {
    constructor() {
        const articles = []
    }

    async getAllArticles(req, res) {
        const articles = await articleModel.findAll();
        res.render(201).json({ articles: articles })
    }

    async getArticleBySlug(req, res) {
        const article = await articleModel.findOne(req.params.slug);
        res.render(201).json({ article: article })
    }
}

module.exports = articleController;