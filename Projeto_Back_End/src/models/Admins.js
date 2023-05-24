
const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    username: String,
    nome: String,
    email: String,
    nascimento: String,
    password: String,
    adminToken: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Admin', AdminSchema);