const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    Foto: String,
    Nome: String,
    Email: String,
    Telefone: String,
    País: String,
    Estado: String,
    CPF: String,
    Endereco: String,
    EstadoCivil: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Client', ClientSchema);