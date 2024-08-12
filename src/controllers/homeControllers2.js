const connection = require("../config/database")

const getHomepage2 = async (req, res) => {
    try {
        connection.query('select * from user', (error, result) => {
            console.log(result)
            res.render('homepage.ejs', { listUser: result })
        })
    } catch (error) {
        console.log(error)
    }
}

const getCreatePage2 = (req, res) => {
    res.render('create.ejs')
}

const createUser2 = async (req, res) => {
    const { name, email, city } = req.body
    console.log(req.body)
    try {
        connection.query(
            'insert into user (name, email, city) values (?,?,?)', [name, email, city], (error, result) => {
                console.log('Thêm người dùng thành công!')
                res.redirect('/')
            })
    } catch (error) {
        console.log(error)
    }
}

const deleteUser2 = async (req, res) => {
    const userId = req.params.id
    try {
        connection.query('delete from user where id = ?', [userId], (error, result) => {
            console.log('Xoá người dùng thành công!')
            res.redirect('/')
        })
    } catch (error) {
        console.log(error)
    }
}

const getUpdatePage2 = async (req, res) => {
    const userId = req.params.id
    console.log(userId)
    try {
        connection.query('select * from user where id = ?', [userId], (error, result) => {
            console.log(result)
            result = result && result.length > 0 ? result[0] : {}
            res.render('edit.ejs', { user: result })
        })
    } catch (error) {

    }
}

const updateUser2 = async (req, res) => {
    const userId = req.params.id
    const { name, email, city } = req.body
    try {
        console.log(req.body, req.params.id)
        connection.query('update user set name = ?, email = ?,city=? where id = ?', [name, email, city, userId], (error, result) => {
            console.log('Cập nhật người dùng thành công!')
            res.redirect('/')
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getHomepage2, getCreatePage2, createUser2, getUpdatePage2, updateUser2, deleteUser2
}