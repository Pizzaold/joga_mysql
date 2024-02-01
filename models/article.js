const BaseSQLModel = require('./base');

class articleModel extends BaseSQLModel {
    constructor() {
        super('article');
    }

    async findAll() {
        const articles = await super.findAll();
        return articles;
    }

    async findOne(slug) {
        const article = await super.findOne('slug', slug);
        return article;
    }

    async findMany(author) {
        const articles = await super.findMany('author_id', author.id);
        return articles;
    }

    async create(article) {
        const createArdicleId = await super.create(article);
        return createArdicleId;
    }

    async update(id, article) {
        const updatedArticle = await super.update(id, article);
        return updatedArticle;
    }
}

module.exports = articleModel;