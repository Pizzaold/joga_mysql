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

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const articleRouter = require('./routes/article');

app.use('/', articleRouter);
app.use('/article', articleRouter);
app.use('/author', articleRouter);

app.listen(3004, () => {
    console.log('Server is running at port 3004');
});