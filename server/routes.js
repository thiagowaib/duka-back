const express = require('express');
const routes = new express.Router();

const ControllerTalentos = require('./controllers/ControllerTalentos');
const ControllerOlheiros = require('./controllers/ControllerOlheiros');

// Rotas controladoras dos Talentos
    // --CRUD TESTE
    routes.get("/listTalentos", ControllerTalentos.list)
    routes.post("/createTalento", ControllerTalentos.create)
    routes.delete("/removeTalento/:id", ControllerTalentos.remove)
    // --Set|Get Tutorial
    routes.post("/updateTutorial", ControllerTalentos.updateTutorial) 
    routes.get("/getTutorial", ControllerTalentos.getTutorial) 

// Rotas controladoras dos Olheiros
    // --CRUD TESTE
    routes.get("/listOlheiros", ControllerOlheiros.list)
    routes.post("/createOlheiro", ControllerOlheiros.create)
    routes.delete("/removeOlheiro/:id", ControllerOlheiros.remove)
    // --Set|Get Talentos
    routes.post("/updateFollows", ControllerOlheiros.updateFollows) 
    routes.get("/getFollows", ControllerOlheiros.getFollows) 

module.exports = routes;