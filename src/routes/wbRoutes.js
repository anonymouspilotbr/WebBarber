const express = require('express')
const router = express.Router();

const webBarberControllers = require('../controllers/wbControllers');
const AuthController = require('../controllers/AuthController');

router.get('/', webBarberControllers.loginView);
router.get('/home', AuthController.verificarAuth, webBarberControllers.homeView);
router.get('/home_time', AuthController.verificarAuth, webBarberControllers.homeViewTime);
router.get('/cadastro', webBarberControllers.cadastroView);
router.post('/cadastrar_usuario', webBarberControllers.cadastrarUsuario);
router.post('/alterar_dados', webBarberControllers.alterarDados);
router.post('/sair', AuthController.sair);
router.post('/agendar', webBarberControllers.agendarServico);

module.exports = router;