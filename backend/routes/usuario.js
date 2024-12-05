const router = require('express').Router()
const {signUpUsers,signInUsers} = require('../controllers/userController')


router.post('/create-user', signUpUsers)
router.post('/login', signInUsers)


module.exports = router

