const mongoose = require("mongoose");

const dpepisodeSchema = new mongoose.Schema({
  Name: String,
  Title: String,
  Episode: Number,
  Date: Date,
  Description: String,
});
const dpseasonSchema = new mongoose.Schema({
  Name: String,
  Title: String,
  Season: Number,
  TotalEpisodes: Number,
  Episodes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "dpepisodes",
    },
  ],
});
const dpseriesScema = new mongoose.Schema({
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
  Season: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "dpseason",
    },
  ],
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
const DPSeries = mongoose.model("dpSeries", dpseriesScema);
const DPSeason = mongoose.model("dpseason", dpseasonSchema);
const DPEpisode = mongoose.model("dpepisodes", dpepisodeSchema);

const addDpSeries = async (movie) => {
  const movies = new DPSeries(movie);
  return await movies.save();
};
const getDpSeries = async () => {
  const movies = await DPSeries.find();
  return movies;
};
const addDPSeasonsId = async (name, seasonId) => {
  try {
    const series = await DPSeries.findOne({ Name: name });
    series.Season.push(seasonId);
    return await series.save();
  } catch (e) {
    console.log("Season Error: " + e);
  }
};
const addDPEpisodeId = async (name, episodeId) => {
  try {
    const season = await DPSeason.findOne({ Name: name });
    season.Episodes.push(episodeId);
    return await season.save();
  } catch (e) {
    console.log(e);
  }
};
const addDPEpisode = async (episode) => {
  const episodes = new DPEpisode(episode);
  return await episodes.save();
};
const addDPSeason = async (season) => {
  const seasons = new DPSeason(season);
  return await seasons.save();
};
module.exports = {
  addDpSeries,
  getDpSeries,
  addDPEpisodeId,
  addDPSeason,
  addDPEpisode,
  addDPSeasonsId,
};
