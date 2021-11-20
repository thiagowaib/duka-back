const Talentos = require("../models/Talentos")

module.exports = {
  // _______________________________________________
  // CRUD Básico - Para Teste (Na maioria das vezes)
  async list(req, res) {
    const talentos = await Talentos.find().sort("createdAt")
    return res.status(200).send(talentos)
  },

  async create(req, res){
        const novoTalento = new Talentos(req.body);
        novoTalento.save((err)=>{
            if(err)
              return res.status(400).send({error: err})
            else
              return res.status(201).send({id: novoTalento._id})
        })
  },

  async remove(req, res){
    const removeId = req.params.id
    Talentos.findByIdAndRemove(removeId, (err, doc)=>{
      if(err)
        return res.status(400).send({error: err})
      else
        return res.status(200).send()
    })
},
  // _______________________________________________
  // 

  
  async updateTutorial(req, res){
    const queryId = "6197bb2c4e1bb09ffb56d75a"
    const {status} = req.body

    const raquel = await Talentos.findById(queryId)
    raquel.tutorial = status
    raquel.save((err)=>{
      if(err)
        return res.status(400).send({error: err})
      else
        return res.status(200).send()
    })
  },

  async getTutorial(req, res){
    const queryId = "6197bb2c4e1bb09ffb56d75a"
    const raquel = await Talentos.findById(queryId)
    const dado = raquel.tutorial
    return res.status(200).send(dado)
  }
};
