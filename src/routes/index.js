const router = require('express').Router();

router.use('/usuarios', require('./usuario.router'));
router.use('/agencias', require('./agencia.router'));

module.exports = router;
