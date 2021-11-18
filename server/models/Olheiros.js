let mongoose = require('mongoose');

const OlheirosSchema = new mongoose.Schema({
    nome: {
      type: String,
      default: "",
    },
}, {timestamps: true});


module.exports = mongoose.model('Olheiros', OlheirosSchema, 'Olheiros');