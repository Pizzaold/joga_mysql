const articleDBModel = require('../models/article')
const articleModel = new articleDBModel();

class authorController {
    constructor() {
        const author = []
    }

    async getAuthorById(req, res) {
        const author = await authorModel.findById(req.params.id);
        const articles = await articleModel.findMany(author)
        author['articles'] = articles
        res.render(201).json({ author: author })
    }
}

module.exports = articleController;