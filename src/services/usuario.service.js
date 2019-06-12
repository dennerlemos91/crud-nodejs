const Usuario = require('../models/usuario.model');

const findAll = async req => {
  return await Usuario.find({});
};

const save = async body => {
  return await Usuario.create(body);
};

const findById = async id => {
  return await Usuario.findById(id);
};

const update = async req => {
  return await Usuario.findOneAndUpdate(req.params.id, req.body, {
    new: false
  });
};

const remove = async id => {
  return await Usuario.findByIdAndDelete(id);
};

module.exports = {
  findAll,
  save,
  findById,
  update,
  remove
};
