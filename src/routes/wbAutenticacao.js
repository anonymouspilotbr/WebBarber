const express = require('express');
const router = express.Router();

const Auth = require('../controllers/AuthController');

router.get('/home', Auth.homeView);
router.post('/login', Auth.Autenticar);

module.exports = router;