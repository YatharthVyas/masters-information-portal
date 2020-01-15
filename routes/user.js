const express = require('express');
const router = express.Router();
const { userController } = require('../controllers/index');

router.get('/hello', userController.greetUser);

module.exports = router;