const express = require('express');
const router = express.Router();
const agenciasController = require('../controllers/agencias.controller');

router.get('/', agenciasController.findAll);
router.get('/:id', agenciasController.findById);
router.post('/', agenciasController.save);
router.put('/:id', agenciasController.update);
router.delete('/:id', agenciasController.remove);

module.exports = router;
