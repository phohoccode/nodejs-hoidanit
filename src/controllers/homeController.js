const connection = require('../config/database')

const getHomepage = (req, res) => {
    res.render('example.ejs')
}

module.exports = {
    getHomepage
}