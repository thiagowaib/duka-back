let mongoose = require('mongoose');

const OlheirosSchema = new mongoose.Schema({
    nome: {
      type: String,
      default: "",
    },
    talento_ids: [{
      type: String,
      default: null
    }],
    talentos: [{
      type: String,
    }]
}, {timestamps: true});


module.exports = mongoose.model('Olheiros', OlheirosSchema, 'Olheiros');