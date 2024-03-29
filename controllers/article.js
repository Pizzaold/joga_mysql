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

    async creteNewArticle(req, res) {
        const newArticle = {
            name: req.body.name,
            slug: req.body.slug,
            image: req.body.image,
            body: req.body.body,
            published: new Date().toISOString().slice(0, 19).replace('T', ' '),
            author_id: req.body.author_id
        }
        const articleId = await articleModel.create(newArticle);
        res.render(201).json({
            message: `Article created with id ${articleId}`,
            article: {id: articleId, ...newArticle} 
        })
    }

    async updateArticle(req, res) {
        const article = await articleModel.update(req.params.id, req.body);
        res.render(201).json({ article: article })
    }

    async deleteArticle(req, res) {
        const article = await articleModel.delete(req.params.id);
        res.render(201).json({ article: article })
    }
}

module.exports = articleController;