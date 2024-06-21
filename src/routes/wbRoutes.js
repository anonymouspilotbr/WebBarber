const express = require('express')
const router = express.Router();

const webBarberControllers = require('../controllers/wbControllers');
const AuthController = require('../controllers/AuthController');

router.get('/', webBarberControllers.loginView);
router.get('/home', AuthController.verificarAuth, webBarberControllers.homeView);
router.get('/cadastro', webBarberControllers.cadastroView);
router.post('/cadastrar_usuario', webBarberControllers.cadastrarUsuario);

module.exports = router;