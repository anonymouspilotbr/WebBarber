const express = require('express');
const router = express.Router();

const Auth = require('../controllers/AuthController');

router.get('/home', Auth.homeView);
router.post('/login', Auth.autenticar);
router.get('/perfil', Auth.verificarAuth, Auth.perfilView);

module.exports = router;