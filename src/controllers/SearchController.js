const Dev = require('../models/Dev');

module.exports = {
    async index(request, response){
        console.log(request.query);
        // busca todos os devs num raio de 10Km
        // filtrar por tecnologias
        return response.json({ devs: [] });
    }
}