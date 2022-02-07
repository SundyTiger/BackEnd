const mongoose = require("mongoose");

const kidMovieSchema = mongoose.Schema({
  kidsmode: {
    type: Boolean,
    default: false,
  },
  Title: String,
  Geners: {
    type: String,
    enum: ["Adventure", "Comedy", "Drama", "Family", "Action", "Anime"],
  },
  Language: {
    type: String,
    enum: ["Hindi", "Telugu", "Tamil"],
  },
  Certified: {
    type: String,
    enum: ["U", "U/A", "A"],
  },
  Description: String,
});
const KidMovies = mongoose.model("kidmovie", kidMovieSchema);

const addKidsMovies = async (movie) => {
  const movies = new KidSerial(movie);
  return await movies.save();
};
const getKidMovies = async () => {
  const movies = await KidMovies.find();
  return movies;
};

module.exports = {
  addKidsMovies,
  getKidMovies,
};
