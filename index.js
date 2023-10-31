const express = require('express');
const app = express();

const path = require('path');

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

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

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

app.listen(3000, () => {
    console.log('Server is running at port 3000');
});