const connection = require('../config/database')
const { use } = require('../routes/web')

const getAllUser = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM user', (err, results) => {
            if (!err) {
                resolve(results);
            }
        });
    });
}

module.exports = {
    getAllUser
}