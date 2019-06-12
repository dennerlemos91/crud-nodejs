const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller');

router.get('/', usuariosController.findAll);
router.get('/:id', usuariosController.findById);
router.post('/', usuariosController.save);
router.put('/:id', usuariosController.update);
router.delete('/:id', usuariosController.remove);

module.exports = router;
