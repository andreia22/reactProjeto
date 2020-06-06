const express = require('express');

const app = express();

mongoose.connect('mongodb+srv://dbAndreia:305306@cluster0-bqn0a.mongodb.net/semana10?retryWrites=true&w=majority');

app.use(express.json())
// Metodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetro:

// query Paarms: request.query (Filtros, ordenaçao, paginação...)
// Route Params: request.params(Identificar um recurso na alteração ou remoção)
// body: request.body(Dados para alteraçao ou alteração de um registro)

// MongoDB (Não-Relacional)

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({mesage: 'Hello World'});
});
   
app.listen(3333);