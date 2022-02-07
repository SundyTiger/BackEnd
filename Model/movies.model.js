const mongoose = require('mongoose');

const moviesScema = new mongoose.Schema({
    Name: String,
    Lenth: Date,
    Year: Number,
    Geners: {
        type: String,
        enum: ['Comedy', 'Biopic', 'Drama', 'Romance', 'Periodic', 'Documentary']
    },
    Certified: {
        type: String,
        enum: ['U', 'U/A', 'A']
    },
    Language: {
        type: String,
        enum: ['Hindi', 'Bengali', 'Telugu', 'Malayalam', 'Tamil', 'Marathi', 'English', 'Kannada']
    },
    Description: String

})
const Movies = mongoose.model('movies', moviesScema)
const addMovies = async (movie) => {
    const addMovie = new Movies(movie)
    return await addMovie.save()

}
const getMovies = async () => {
    const showMovies = await Movies.find()
    return showMovies
}

module.exports = {
    getMovies, addMovies
}