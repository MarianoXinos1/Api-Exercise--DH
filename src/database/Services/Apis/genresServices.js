
const db = require('../../models');

const genreService = {
    
    getAllGenres: async function () {
        try {
            const genres = await db.Genre.findAll();
            return {
                status: 200,
                total: genres.length,
                data: genres
            };
        } catch (error) {
            console.log('Error al obtener generos Api', error);
            return { status: 500 };
        }
    },

    getGenreById: async function (id) {
        try {
            const genre = await db.Genre.findByPk(id);
            return {
                status: 200,
                data: genre
            };
        } catch (error) {
            console.log('Error al obtener detalle Api');
            return { status: 500 };
        }
    }
}

module.exports = genreService;