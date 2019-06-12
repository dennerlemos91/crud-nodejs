const usuariosService = require('../services/usuario.service');

const findAll = async (req, res, next) => {
  try {
    const usuarios = await usuariosService.findAll();
    res.send(usuarios);
    return next();
  } catch (error) {
    res.status(400).send({
      message: 'Error ao tentar buscar os usuários'
    });
  }
};

const findById = async (req, res, next) => {
  try {
    const usuario = await usuariosService.findById(req.params.id);
    res.send(usuario);
    return next();
  } catch (error) {}
};

const save = async (req, res, next) => {
  try {
    const usuario = await usuariosService.save(req.body);
    res.send(usuario);
    return next();
  } catch (error) {
    res.status(400).send({
      message: 'Error ao tentar salvar um novo usuário'
    });
  }
};

const update = async (req, res, next) => {
  try {
    const usuario = await usuariosService.update(req);
    res.send(usuario);
    return next();
  } catch (error) {
    res.status(400).send({
      message: 'Error ao tentar atualizar.'
    });
  }
};

const remove = async (req, res, next) => {
  try {
    const usuario = await usuariosService.remove(req.params.id);
    res.send(usuario);
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
