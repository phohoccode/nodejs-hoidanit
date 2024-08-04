const express = require('express')
const path = require('path')
const app = express()
require('dotenv').config()

console.log(process.env)

const port = process.env.POST || 8888
const hostname = process.env.HOST_NAME

// config temple engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('example.ejs')
})

app.listen(port, hostname, () => {
    console.log(`http://${hostname}:${port}`)
})