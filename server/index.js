const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

async function initServer(){

    const app = express();
    await mongoose.connect(process.env.SERVER_URL,
    {
        useNewUrlParser: true,
    });
    app.use(express.json());
    app.use(cors());

    // Conexão com rotas
    app.use(require('./routes'));

    // Conexão com porta {port} + Mensagem de confirmação
    const server = require('http').Server(app);
    server.listen(process.env.PORT || 5000);
    
    console.log("Backend Online")
}
initServer()

