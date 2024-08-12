const { getAllUser, getUserById, createNewUser, updateUserById, deleteUserById } = require('../services/CRUDService')

const getHomepage = async (req, res) => {
    try {
        const users = await getAllUser();
        res.render('homepage.ejs', { listUser: users })
    } catch (error) {
        console.log(error);
    }

}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const createUser = async (req, res) => {
    try {
        const { name, email, city } = req.body
        await createNewUser(name, email, city, res)
    } catch (error) {
        console.log(error)
    }
}

const getUpdatePage = async (req, res) => {
    const { id } = req.params
    try {
        const user = await getUserById(id)
        console.log(user);
        res.render('edit.ejs', { user: user })
    } catch (error) {
        console.log(error);
    }
}

const updateUser = async (req, res) => {
    const { name, email, city } = req.body
    const id = req.params.id
    try {
        await updateUserById(id, name, email, city, res)
    } catch (error) {
        console.log(error)
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params
    console.log(id);
    
    try {
        await deleteUserById(id, res)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getHomepage,
    createUser,
    getCreatePage,
    getUpdatePage,
    updateUser,
    deleteUser
}