const mongoose = require("mongoose");

const dpmoviesScema = new mongoose.Schema({
  isSubscriber: {
    type: String,
    enum: ["Super", "Prime"],
  },
  Universe: {
    type: String,
    enum: [
      "Disney Plus Originals",
      "Pixar",
      "Marvel",
      "Star Wars",
      "National Geographic",
    ],
  },
  Name: String,
  Length: String,
  Image: String,
  Year: Number,
  Geners: {
    type: String,
    enum: ["Comedy", "Biopic", "Drama", "Romance", "Periodic", "Action"],
  },
  Certified: {
    type: String,
    enum: ["U", "U/A", "A"],
  },
  Language: {
    type: String,
    enum: ["Hindi", "Telugu", "Malayalam", "Tamil", "English"],
  },
  Description: String,
});
const DPMovies = mongoose.model("dpMovies", dpmoviesScema);

const addDpMovies = async (movie) => {
  const movies = new DPMovies(movie);
  return await movies.save();
};
const getDpMovies = async () => {
  const movies = await DPMovies.find();
  return movies;
};

module.exports = {
  addDpMovies,
  getDpMovies,
};
