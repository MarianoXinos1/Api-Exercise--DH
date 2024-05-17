const express = require('express');
const router = express.Router();
const genresController = require('../controllers/Apis/genresController');


router.get('/movies', genresController.list);
router.get('/movies/:id', genresController.detail);


module.exports = router;