const moviesService = require('../../database/Services/Apis/moviesServices');

const moviesController = {

   
    create: async function(req,res) {
      
        try{
            const newMovie = await moviesService.create(req.body);
            return res.status(201).json(newMovie);
        } catch (error) {
            return res.status(500).json({ message: 'Error al crear la película Controller'});
        }
    },

    destroy: async function(req,res) {

        try {
            const result = await moviesService.destroy(req.params.id);
            return res.status(200).json(result);                               // status va siempre antes que el JSON porque JSON envia la respuesta.
        } catch (error) {
            console.log('Error al eliminar la pelicula Controller', error);
            return res.status(500).json({ message: 'Error al eliminar la película Controller' })
        }
    }
    
    }
    
    module.exports = moviesController;
