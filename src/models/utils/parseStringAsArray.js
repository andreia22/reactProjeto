module.exports = function parseStringAsArray(arrayAsSting){
    return  arrayAsSting.split(',').map(tech => tech.trim());
}