const express = require('express')
const router = express.Router()
const { 
    getHomepage,
    createUser,
    getCreatePage,
    getUpdatePage,
    updateUser,
    deleteUser
} = require('../controllers/homeController')
const { getHomepage2, getCreatePage2, createUser2,getUpdatePage2, updateUser2, deleteUser2  } = require('../controllers/homeControllers2')

// router.get('/', getHomepage)
router.get('/', getHomepage2)
// router.get('/create', getCreatePage)
router.get('/create', getCreatePage2)
// router.get('/update/:id', getUpdatePage)
router.get('/update/:id', getUpdatePage2)
// router.post('/create-user', createUser)
router.post('/create-user', createUser2)
// router.post('/update-user/:id', updateUser)
router.post('/update-user/:id', updateUser2)
// router.post('/delete-user/:id', deleteUser)
router.post('/delete-user/:id', deleteUser2)

module.exports = router
