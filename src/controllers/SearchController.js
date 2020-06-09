const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
    async index(request, response){
        const {latitude, longitude, techs } = request.query;

        const teachsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {  
                $in: teachsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            } ,
        });

        return response.json({ devs });
        // busca todos os devs num raio de 10Km
        // filtrar por tecnologias
        
    }
}