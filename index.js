const express = require('express');
const app = express();

const path = require('path');
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

app.listen(3000, () => {
    console.log('Server is running at port 3000');
});