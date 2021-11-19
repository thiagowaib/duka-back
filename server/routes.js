const express = require('express');
const routes = new express.Router();

const ControllerTalentos = require('./controllers/ControllerTalentos');

routes.get("/listTalentos", ControllerTalentos.list)
routes.post("/createTalento", ControllerTalentos.create)
routes.delete("/removeTalento/:id", ControllerTalentos.remove)


module.exports = routes;