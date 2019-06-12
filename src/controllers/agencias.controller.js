const agenciasService = require('../services/agencia.service');

const findAll = async (req, res, next) => {
  try {
    const agencias = await agenciasService.findAll();
    res.send(agencias);
    return next();
  } catch (error) {
    res.status(400).send({
      message: 'Error ao tentar buscar as agências'
    });
  }
};

const findById = async (req, res, next) => {
  try {
    const agencia = await agenciasService.findById(req.params.id);
    res.send(agencia);
    return next();
  } catch (error) {}
};

const save = async (req, res, next) => {
  try {
    const agencia = await agenciasService.save(req.body);
    res.send(agencia);
    return next();
  } catch (error) {
    res.status(400).send({
      message: 'Error ao tentar salvar uma nova agência'
    });
  }
};

const update = async (req, res, next) => {
  try {
    const agencia = await agenciasService.update(req);
    res.send(agencia);
    return next();
  } catch (error) {
    res.status(400).send({
      message: 'Error ao tentar atualizar.'
    });
  }
};

const remove = async (req, res, next) => {
  try {
    const agencia = await agenciasService.remove(req.params.id);
    res.send(agencia);
    return next();
  } catch (error) {}
};

module.exports = {
  findAll,
  save,
  findById,
  update,
  remove
};
