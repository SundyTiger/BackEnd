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
  Stream: {
    type: String,
    enum: ["Disney Plus", "Kids", "HotStar", "Sports", "Pixar", "Marvel"],
    required: true,
  },
  Geners: {
    type: String,
    enum: [
      "Animation",
      "Comedy",
      "Biopic",
      "Drama",
      "Romance",
      "Periodic",
      "Documentary",
      "Horror",
      "Action",
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
const addImages = async (name, image) => {
  const addImage = await Movies.findOne({ Name: name });
  console.log(image);
  addImage.Image = image.filename;
  return addImage;
};

module.exports = {
  getMovies,
  addMovies,
  addImages,
};
