const moviesService = require('../../database/Services/Apis/moviesServices');

const moviesController = {

   
    create: async function(req,res) {
      
        try{
            const newMovie = await moviesService.create(req.body);
            return res.status(201).json(newMovie);
        } catch (error) {
            return res.status(500).json({
                message: 'Error al crear la película Controller'
            });
        }
    }
    
    
    
    }
    
    module.exports = moviesController;
