const Olheiros = require("../models/Olheiros")

module.exports = {
  // _______________________________________________
  // CRUD Básico - Para Teste (Na maioria das vezes)
  async list(req, res) {
    const olheiros = await Olheiros.find().sort("createdAt")
    return res.status(200).send(olheiros)
  },

  async create(req, res){
        const novoOlheiro = new Olheiros(req.body);
        novoOlheiro.save((err)=>{
            if(err)
              return res.status(400).send({error: err})
            else
              return res.status(201).send({id: novoOlheiro._id})
        })
  },

  async remove(req, res){
    const removeId = req.params.id
    Olheiros.findByIdAndRemove(removeId, (err, doc)=>{
      if(err)
        return res.status(400).send({error: err})
      else
        return res.status(200).send()
    })
},
  // _______________________________________________
  // 
};
