const express = require('express')
const router = express.Router();

const WebBarberControllers = require('../controllers/WebBarberControllers');

router.get('/', WebBarberControllers.loginView);
router.get('/cadastro', WebBarberControllers.cadastroView);

module.exports = router;