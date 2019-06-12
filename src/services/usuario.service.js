const Usuario = require('../models/usuario.model');

const findAll = req => {
  return Usuario.find({});
};

const save = body => {
  return Usuario.create(body);
};

module.exports = {
  findAll,
  save
};
