const db = require('../../database/models');

const genresController = {
    list: async function (req,res) {

        try {
            const genres= await db.Genre.findAll();
            res.json(genres)
        } catch (error){
            console.log('Error al obtener generos Api',error);
            res.status(500).send('Error al obtener generos Api');
        }
    },

    detail: async function (req,res) {
        try {
            const genre = await db.Genre.findByPk(req.params.id);
            res.json(genre);
        } catch (error) {
            console.log('Error al obtener detale Api');
            res.status(500).send('Error al obtener detalle Api');  // Importante que el send vaya al final porque si va al inicio antes que status no se enviara el status.
        }
    }

}

module.exports = genresController;