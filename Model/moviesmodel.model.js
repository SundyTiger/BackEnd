const mongoose = require("mongoose");

const moviesScema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Lenth: {
    type: String,
    required: true,
  },
  Year: {
    type: Number,
    required: true,
  },
  Image: {
    type: String,
  },
  Video: {
    type: String,
  },
  Stream: {
    type: String,
    enum: ["Disney Plus", "Kids", "HotStar", "Sports", "Pixar", "Marvel"],
    required: true,
  },
  Geners: {
    type: String,
    enum: [
      "Animation",
      "Adventure",
      "Action",
      "Talk Show",
      "Comedy",
      "Romance",
      "Biopic",
      "Drama",
      "Reality",
      "Documentry",
      "Horror",
      "Periodic",
      "Superhero",
    ],
    required: true,
  },
  Certified: {
    type: String,
    enum: ["U", "U/A", "A"],
    required: true,
  },
  Language: {
    type: String,
    enum: [
      "Hindi",
      "Bengali",
      "Telugu",
      "Malayalam",
      "Tamil",
      "Marathi",
      "English",
      "Kannada",
    ],
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
});
const Movies = mongoose.model("movies", moviesScema);
const addMovies = async (movie) => {
  const addMovie = new Movies(movie);
  return await addMovie.save();
};
const getMovies = async () => {
  const showMovies = await Movies.find();
  return showMovies;
};
const filterMovie = async (data) => {
  const showMovies = await Movies.find(data);
  return showMovies;
};
const filterData = async (data) => {
  const showData = await Movies.find({ $or: data });
};
module.exports = {
  getMovies,
  addMovies,
  filterMovie,
  filterData,
};
