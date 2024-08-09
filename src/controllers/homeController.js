const connection = require('../config/database')
const { getAllUser } = require('../services/CRUDService')

const getHomepage = async (req, res) => {
    // connection.query(`select * from user`, function (err, results) {
    //     console.log(results)
    //     res.render('homepage.ejs', { listUser: results })
    // })
    const users = await getAllUser();
    res.render('homepage.ejs', { listUser: users })
    console.log('Users:', users);

}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const createUser = async (req, res) => {
    const { name, email, city } = req.body
    connection.query(
        `insert into user (name, email, city) values(?,?,?)`,
        [name, email, city], function (err, results) {
            console.log('create user success!')
        }
    )
}

module.exports = {
    getHomepage,
    createUser,
    getCreatePage
}