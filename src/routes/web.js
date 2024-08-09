const express = require('express')
const router = express.Router()
const { 
    getHomepage,
    createUser,
    getCreatePage
} = require('../controllers/homeController')

router.get('/', getHomepage)
router.post('/create-user', createUser)
router.get('/create', getCreatePage)

module.exports = router
