const Agencia = require('../models/agencia.model');

const findAll = async req => {
  return await Agencia.find({});
};

const save = async body => {
  return await Agencia.create(body);
};

const findById = async id => {
  return await Agencia.findById(id);
};

const update = async req => {
  return await Agencia.findOneAndUpdate(req.params.id, req.body, {
    new: false
  });
};

const remove = async id => {
  return await Agencia.findByIdAndDelete(id);
};

module.exports = {
  findAll,
  save,
  findById,
  update,
  remove
};
