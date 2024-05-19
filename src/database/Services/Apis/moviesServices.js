
const db = require('../../models');



const moviesService = {

    create: async function(movieData) {
        try {
            return await db.Movie.create(movieData);
        } catch (error) {
            console.log('Error al crear la película Service', error);
            return { status: 500 };
        }
    },


    destroy: async function(movieId) {
        try {
            const movie = await db.Movie.destroy({
                where: {id: movieId}
            });
            return {status: 200}

        } catch (error) {
            console.log('Error al eliminar la película Service', error);
        }
    }
}

module.exports = moviesService;
