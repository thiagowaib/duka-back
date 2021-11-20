let mongoose = require('mongoose');

const TalentosSchema = new mongoose.Schema({
    nome: {
      type: String,
      default: "",
    },
    curso_ids:[{
      type: Number,
      default: null
    }],
    curso_info:[{
      type:{
        curso_concluido: {type: Boolean},
        aulas_total: {type: Number},
        aulas_concluidas: [{type: Number}],
        quiz_concluido: {type: Boolean},
        quiz_timestamp: {type: Date},
      },
      default:{
        curso_concluido: false,
        aulas_total: 1,
        aulas_concluidas: [],
        quiz_concluido: false,
        quiz_timestamp: null,
      }
    }],
    historico_ids:[{
      type: Number,
      default: null
    }],
    tutorial:{
      type: Boolean,
      default: false,
    }
}, {timestamps: true});


module.exports = mongoose.model('Talentos', TalentosSchema, 'talentos');