const connection = require('../config/database')

const createNewUser = (name, email, city, res) => {
    return new Promise((resolve, reject) => {
        connection.query(
            `insert into user (name, email, city) values(?,?,?)`,
            [name, email, city],
            (err, results) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(results)
                    res.redirect('/')
                    console.log('create user success!')
                }
            }
        )
    })
}

const getAllUser = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM user',
            (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
    });
}

const getUserById = (id) => {
    return new Promise((resolve, reject) => {
        connection.query(`select * from user where id = ${id}`,
            (err, results) => {
                if (err) {
                    reject(err)
                } else {
                    results = results && results.length > 0 ? results[0] : {}
                    resolve(results)
                }
            })
    })
}

const updateUserById = (id, name, email, city, res) => {
    return new Promise((resolve, reject) => {
        connection.query(
            `update user set name=?, email=?, city=? where id=?`, [name, email, city, id],
            (err, results) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(results)
                    console.log('update success!')
                    res.redirect('/')
                }
            })
    })
}

const deleteUserById = (id, res) => {
    return new Promise((resolve, reject) => {
        connection.query(
            'delete from user where id = ?', [id],
            (err, results) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(results)
                    console.log('Delete success!');
                    res.redirect('/')
                }
            })
    })
}


module.exports = {
    createNewUser,
    getAllUser,
    getUserById,
    updateUserById,
    deleteUserById
}