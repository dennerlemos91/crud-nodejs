const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agenciaSchema = new Schema({
  banco: { type: String, default: '' },
  agencia: { type: Number, default: '' },
  endereco: { type: String, default: '' }
});

const Agencia = mongoose.model('Agencia', agenciaSchema);
module.exports = Agencia;
