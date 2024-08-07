require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const configViewEngine = require('./config/viewEngine')
const mysql = require('mysql2');
const webRoutes = require('./routes/web')
const port = process.env.POST || 8888
const hostname = process.env.HOST_NAME

// config temple engine
configViewEngine(app);

// config static files
app.use('/', webRoutes)

// test connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '123456',
    database: 'hoidanit',
});

connection.query(
    'SELECT * FROM `user`',
    function (err, results, fields) {
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
    }
);

app.listen(port, hostname, () => {
    console.log(`http://${hostname}:${port}`)
})