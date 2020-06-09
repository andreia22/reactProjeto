const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://dbAndreia:305306@cluster0-bqn0a.mongodb.net/dbsemana10?retryWrites=true&w=majority',{
useNewUrlParser: true,
useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);
// Metodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetro:arn

// query Paarms: request.query (Filtros, ordenaçao, paginação...)
// Route Params: request.params(Identificar um recurso na alteração ou remoção)
// body: request.body(Dados para alteraçao ou alteração de um registro)

// MongoDB (Não-Relacional)


   
