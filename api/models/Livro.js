const mongoose = require('mongoose');

const LivroSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  autor: {
    type: String,
    required: true,
  },
  genero: {
    type: String,
  },
  lido: {
    type: Boolean,
    default: false,
  },
  local: {
    type: String, // Ex: "Setor A - Estante 1 - Prateleira 2"
  }
}, {
  timestamps: true // Adiciona createdAt e updatedAt
});

module.exports = mongoose.model('Livro', LivroSchema);
