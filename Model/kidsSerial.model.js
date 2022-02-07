const mongoose = require("mongoose");

const kidsepisodeSchema = new mongoose.Schema({
  Name: String,
  Episode: Number,
  Date: Date,
  Description: String,
});
const kidsseasonSchema = new mongoose.Schema({
  Name: String,
  Title: String,
  Season: Number,
  TotalEpisodes: Number,
  Episodes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "kidsepisode",
    },
  ],
});

const kidSerialSchema = mongoose.Schema({
  kidsmode: {
    type: Boolean,
    default: false,
  },
  Name: String,
  Season: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "kidsseason",
    },
  ],
  Episodes: Number,
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
  Channel: {
    type: String,
    enum: [
      "hotstar-specials",
      "quix",
      "star-jalsa",
      "star-plus",
      "star-vijay",
      "star-bharat",
      "Asianet",
      "star-maa",
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
  },
});
const KidSerial = mongoose.model("kidserial", kidSerialSchema);
const KidSeason = mongoose.model("kidsseason", kidsseasonSchema);
const KidEpisode = mongoose.model("kidsepisode", kidsepisodeSchema);
const addKidsSerial = async (serial) => {
  const serials = new KidSerial(serial);
  return await serials.save();
};
const getKidSerial = async () => {
  const serials = await KidSerial.find();
  return serials;
};

const addKidSeasonsID = async (name, seasonId) => {
  const series = await KidSerial.findOne({ Name: name });
  series.Season.push(seasonId);
  return await series.save();
};
const addKidEpisodeID = async (title, episodeId) => {
  const season = await KidSeason.findOne({ Title: title });
  season.Episodes.push(episodeId);
  return await season.save();
};
const addKidSeason = async (season) => {
  const seasons = new KidSeason(season);
  return await seasons.save();
};
const addKidEpisode = async (episode) => {
  const episodes = new KidSeason(episode);
  return await episodes.save();
};
module.exports = {
  addKidsSerial,
  getKidSerial,
  addKidSeason,
  addKidEpisode,
  addKidEpisodeID,
  addKidSeasonsID,
};
