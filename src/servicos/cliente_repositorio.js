const mongoose = require('../config/mongoose');

const Cliente = mongoose.model('clientes', {
  nome: {type: String},
  telefone: {type: String},
  cpf: {type: String},
  email: {type: String},
  createat: {type: Date, default:new Date() },
  updatetat: {type: Date, required: true, default:new Date() }
});

module.exports = {
  inserir: async cliente => {
    return await Cliente.create(cliente);
  },
  atualizar: async (id, cliente) => {
    return await Cliente.findByIdAndUpdate(id, cliente)
  },
  buscar: async parans => {
    return await Cliente.find(parans);
  },
  apagar: async id => {
    return await Cliente.findByIdAndDelete(id);
  }
}