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

  async getFollows(req, res){
    const queryId = "6197d4122d54571fb65b5480"
    const olheiro = await Olheiros.findById(queryId)
    const dado = olheiro.talentos
    return res.status(200).send(dado)
  },
  async updateFollows(req, res){
    const {action, nome} = req.body
    const queryId = "6197d4122d54571fb65b5480"
    const olheiro = await Olheiros.findById(queryId)
    if(action.toLowerCase() === "push")
      olheiro.talentos.push(nome.toString())
    else if(action.toLowerCase() === "pop")
      olheiro.talentos = olheiro.talentos.filter(talento => talento!==nome)
    olheiro.save((err)=>{
      if(err)
        return res.status(400).send()
      else
        return res.status(200).send()
    })
  }
};
