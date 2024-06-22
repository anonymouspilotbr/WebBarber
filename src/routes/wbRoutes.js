const express = require('express')
const router = express.Router();

const webBarberControllers = require('../controllers/wbControllers');
const AuthController = require('../controllers/AuthController');

router.get('/', webBarberControllers.loginView);
router.get('/home', /*AuthController.verificarAuth,*/ webBarberControllers.homeView);
router.get('/home_time', /*AuthController.verificarAuth,*/ webBarberControllers.homeViewTime);
router.get('/cadastro', webBarberControllers.cadastroView);
router.get('/perfil', webBarberControllers.perfilView);
router.post('/cadastrar_usuario', webBarberControllers.cadastrarUsuario);

module.exports = router;