const express = require('express');
const routes = new express.Router();

const ControllerTalentos = require('./controllers/ControllerTalentos');
const ControllerOlheiros = require('./controllers/ControllerOlheiros');

// Rotas controladoras dos Talentos
    // --CRUD TESTE
    routes.get("/listTalentos", ControllerTalentos.list)
    routes.post("/createTalento", ControllerTalentos.create)
    routes.delete("/removeTalento/:id", ControllerTalentos.remove)

// Rotas controladoras dos Olheiros
    // --CRUD TESTE
    routes.get("/listOlheiros", ControllerOlheiros.list)
    routes.post("/createOlheiro", ControllerOlheiros.create)
    routes.delete("/removeOlheiro/:id", ControllerOlheiros.remove)


module.exports = routes;