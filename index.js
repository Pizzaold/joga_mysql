const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const articleControllerClass = require('./controllers/article');
const articleController = new articleControllerClass();

const articleRouter = require('./routes/articles');
app.use('/articles', articleRouter);

/* const path = require('path');

const hbs = require('express-handlebars');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
}))

app.use(express.static('public'));

const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "jurmo",
    password: "password",
    database: "joga_mysql"
})

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to joga_mysql db!");
})

app.get('/', (req, res) => {
    let query = "SELECT * FROM article";
    let article = [];
    con.query(query, (err, result) => {
        if (err) throw err;
        articles = result;
        res.render('index', { article: article });
    })
});

app.get('/article/:slug', (req, res) => {
    let query = `SELECT * FROM article WHERE slug = "${req.params.slug}"`;
    let article;
    con.query(query, (err, result) => {
        if (err) throw err;
        article = result;
        res.render('article', { article: article });
    })
}); */

app.listen(3000, () => {
    console.log('Server is running at port 3000');
});