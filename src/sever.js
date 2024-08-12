require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')

const app = express()
const port = process.env.POST || 8888
const hostname = process.env.HOST_NAME || 'localhost'

// config temple engine
configViewEngine(app);

// config req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// config static files
app.use('/', webRoutes)

app.listen(port, hostname, () => {
    console.log(`http://${hostname}:${port}`)
})