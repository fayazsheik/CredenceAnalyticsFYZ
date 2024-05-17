const Movie = require('../models/Movie');

const createMovie = async(req,res)=>{
  try{
    const{name, img,summary} = req.body

    const movie= new Movie({
      name,
      img,
      summary
    })
    await movie.save();
    res.status(201).json(movie)
  }catch(err){
    console.log("there is an error:", err)
    res.status(500).json({message: "Server error"})
  }

}

const getMovies= async(req, res)=>{
  try{
    const movies = await Movie.find()
    res.status(200).json(movies)
  }catch(err){
    console.log("there is an error:", err)
    res.status(500).json({message: "Server error"})
  }
}

const singleMovie= async(req, res)=>{
  try{
    const movie = await Movie.findById(req.params.id)

    if(!movie){
      return res.status(404).json({message: "Movie not found"})
    }
    res.status(200).json(movie)
  }catch(err){
    console.log("there is an error:", err)
    res.status(500).json({message: "Server error"})
  }
}

const updateMovie= async(req, res)=>{
  try{
    const {name, img, summary} = req.body
    const myMovie= await Movie.findByIdAndUpdate(
      req.params.id,
      {name, img, summary}
    )
    if(!myMovie){
      return res.status(404).json({message: "Movie not found"})
    }
    res.status(200).json(myMovie)
}
  catch(err){
    console.log("there is an error:", err)
    res.status(500).json({message: "Server error"})
  }
}


const deleteMovie= async(req, res)=>{
  try{
    const deleteMovie = await Movie.findByIdAndDelete(req.params.id)
    if(!deleteMovie){
      return res.status(404).json({message: "Movie not found"})
    }
    res.status(200).send()
  }catch(err){
    console.log("there is an error:", err)
    res.status(500).json({message: "Server error"})
  }
}
module.exports = {createMovie, getMovies , singleMovie, updateMovie, deleteMovie}




