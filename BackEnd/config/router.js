const express = require('express')
const router = express.Router()

const lojaController = require('../controller/lojaController')

lojaController(router)

module.exports = router


