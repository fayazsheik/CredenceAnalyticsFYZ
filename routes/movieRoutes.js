const express = require('express')
const router = express.Router()
const movieController= require("../controllers/movieController")
const Movie=require("../models/Movie")


//get, post, put, delete
router.post('/add-movie',movieController.createMovie) 
router.get('/all-movies', movieController.getMovies)
router.get('/movie/:id', movieController.singleMovie)
router.put('/update/:id', movieController.updateMovie)
router.delete('/delete/:id', movieController.deleteMovie)
module.exports = router

