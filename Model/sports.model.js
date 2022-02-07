const mongoose = require("mongoose");

const sportSchema = mongoose.Schema({
  Title: String,
  Sports: {
    type: String,
    enum: [
      "Cricket",
      "Football",
      "Badminton",
      "Formula 1",
      "Kabbadi",
      "Tennis",
      "American Football",
      "eSports",
      "Formula E",
      "Martial Arts",
      "Hockey",
      "Athletics",
      "Golf",
      "Wrestling",
    ],
  },
  Date: Date,
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
  Live: {
    type: Boolean,
    default: false,
  },
});
const Sports = mongoose.model("sports", sportSchema);
const addSports = async (sport) => {
  const sports = new Sports(sport);
  return await sports.save();
};
const getSports = async () => {
  const sports = await Sports.find();
  return sports;
};

module.exports = {
  addSports,
  getSports,
};
