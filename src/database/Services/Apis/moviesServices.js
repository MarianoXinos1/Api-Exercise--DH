
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



}

module.exports = moviesService;


// destroy: function (req,res) {
//     let movieId = req.params.id;
//     Movies
//     .destroy({where: {id: movieId}, force: true}) // force: true es para asegurar que se ejecute la acción
//     .then(()=>{
//         return res.redirect('/movies')})
//     .catch(error => res.send(error)) 
// }