const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  nome: { type: String, required: true, default: '' },
  email: { type: String, default: '' },
  cep: { type: String, default: '' },
  banco: { type: String, default: '' },
  agencia: { type: Number, default: '' },
  conta: { type: Number, default: '' }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);
module.exports = Usuario;
