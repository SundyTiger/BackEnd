const mongoose = require("mongoose");

const moviesScema = new mongoose.Schema({
  Name: String,
  Lenth: String,
  Year: Number,
  Image: String,
  Stream: {
    type: String,
    enum: ["Disney Plus", "Kids", "HotStar", "Sports"],
  },
  Geners: {
    type: String,
    enum: [
      "Comedy",
      "Biopic",
      "Drama",
      "Romance",
      "Periodic",
      "Documentary",
      "Horror",
    ],
  },
  Certified: {
    type: String,
    enum: ["U", "U/A", "A"],
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
  },
  Description: String,
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
