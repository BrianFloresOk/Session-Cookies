const express = require('express')
const router = express.Router()
const indexController = require('../controllers/indexController')
const loginValidations = require('../validations/loginValidator')

 router.get('/', indexController.index)
 router.post('/login', loginValidations, indexController.login)
 router.get('/saludo', indexController.saludo)
 router.get('/olvidar', indexController.olvidar)

module.exports = router