const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

const app = express();

mongoose.connect(process.env.SERVER_URL,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
},()=>{
    console.log("Backend Conectado.")
});

app.use(express.json());
app.use(cors());

// Conexão com rotas
app.use(require('./routes'));

// Conexão com porta {port} + Mensagem de confirmação
const server = require('http').Server(app);
server.listen(process.env.SERVER_PORT);