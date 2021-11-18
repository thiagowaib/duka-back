let mongoose = require('mongoose');

const TalentosSchema = new mongoose.Schema({
    nome: {
      type: String,
      default: "",
    },
}, {timestamps: true});


module.exports = mongoose.model('Talentos', TalentosSchema, 'talentos');