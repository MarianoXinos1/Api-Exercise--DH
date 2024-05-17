const genreService = require('../../database/Services/Apis/genresServices');

const genresController = {
    list: async function (req, res) {
        const result = await genreService.getAllGenres();
        if (result.status === 200) {
            res.json(result);
        } else {
            res.status(result.status).send(result.message);
        }
    },

    detail: async function (req, res) {
        const result = await genreService.getGenreById(req.params.id);
        if (result.status === 200) {
            res.json(result);
        } else {
            res.status(result.status).send(result.message); // Importante que el send vaya al final porque si va al inicio antes que status no se enviara el status.
   
        }
    }
}

module.exports = genresController;  