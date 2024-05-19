const genreService = require('../../database/Services/Apis/genresServices');

const genresController = {
    
    list: async function (req, res) {
        try {
            const result = await genreService.getAllGenres();
            res.json(result);
        } catch (error) {
            return res.status(500).json({
                message: 'Error al obtener los géneros'
            }); 
        }
    },
    

    detail: async function (req, res) {
        try {
            const result = await genreService.getGenreById(req.params.id);
            res.json(result);
        } catch (error) {
            return res.status(500).json({
                message: 'Error al obtener el género'
            }); 
        }
    }
}

module.exports = genresController;  