require('dotenv').config()
const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const mysql = require('mysql2');
const connection = require('./config/database')
const webRoutes = require('./routes/web')

const app = express()
const port = process.env.POST || 8888
const hostname = process.env.HOST_NAME

// config temple engine
configViewEngine(app);

// config static files
app.use('/', webRoutes)

// test connection
connection.query(
    'SELECT * FROM `user`',
    function (err, results, fields) {
        console.log(results);
    }
);

app.listen(port, hostname, () => {
    console.log(`http://${hostname}:${port}`)
})