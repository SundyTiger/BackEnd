const mongoose = require("mongoose");

const episodeSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Image: { type: String, required: true },
  Episode: { type: Number, required: true },
  Video: { type: String },
  Date: { type: Date, required: true },
  Description: { type: String, required: true },
});
const seasonSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Image: { type: String, required: true },
  Title: { type: String, required: true },
  Season: { type: String, required: true },
  Video: { type: String },
  TotalEpisodes: { type: String, required: true },
  Episodes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "episodes",
    },
  ],
});

const serialSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  Name: { type: String, required: true },
  Season: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "season",
    },
  ],
  Stream: {
    type: String,
    enum: ["Disney Plus", "HotStar", "Kids", "Sports"],
    required: true,
  },
  Image: { type: String },
  Video: { type: String },
  Episodes: { type: Number, required: true },
  Geners: {
    type: String,
    enum: [
      "Talk Show",
      "Comedy",
      "Drama",
      "Reality",
      "News",
      "Documentry",
      "Anime",
      "Cartoon",
      "Horror",
    ],
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
  Certified: {
    type: String,
    enum: ["U", "U/A", "A"],
    required: true,
  },
  Description: String,
  Channel: {
    type: String,
    enum: [
      "HotStar Specials",
      "Quix",
      "Star Jalsha",
      "Star Plus",
      "Star Vijay",
      "Star Bharat",
      "Asianet",
      "Star Maa",
      "star-world",
      "hbo-originals",
      "show-time",
      "select-picks",
      "abc-studios",
      "star-pravah",
      "fox-life",
      "asianet-plus",
      "star-suvarna",
      "maa-gold",
      "star-utsav",
      "star-sports-1",
      "star-sports-2",
      "star-sports-tamil-1",
      "star-sports-telugu-1",
      "star-sports-hindi-2",
      "star-sports-first",
      "star-sports-kannada-1",
      "star-sports-bangla-1",
      "star-sports-marathi-1",
      "star-sports-select-1-hd",
      "star-sports-select-2-hd",
    ],
    required: true,
  },
});

const Serial = mongoose.model("serial", serialSchema);
const Season = mongoose.model("season", seasonSchema);
const Episode = mongoose.model("episodes", episodeSchema);
const addSerial = async (serial) => {
  const serials = new Serial(serial);
  return await serials.save();
};
const getSerial = async () => {
  const serials = await Serial.find();
  return serials;
};
const addSeasonsID = async (name, seasonInfo) => {
  try {
    const series = await Serial.findOne({ Name: name });
    console.log(series);
    series["Season"].push(seasonInfo);
    return await series.save();
  } catch (err) {
    console.log(err);
  }
};
const addEpisodeID = async (title, episodeId) => {
  const season = await Season.findOne({ Title: title });
  season.Episodes.push(episodeId);
  return await season.save();
};
const addSeasons = async (season) => {
  const seasons = new Season(season);
  return await seasons.save();
};
const addEpisode = async (episode) => {
  const episodes = new Episode(episode);
  return await episodes.save();
};
module.exports = {
  getSerial,
  addSerial,
  addSeasons,
  addEpisodeID,
  addSeasonsID,
  addEpisode,
};
