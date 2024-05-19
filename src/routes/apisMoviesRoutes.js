const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/Apis/moviesController');

router.post('/movies', moviesController.create);
router.delete('/movies/:id', moviesController.destroy)

module.exports = router;