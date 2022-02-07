const { getMovies, addMovies } = require("../Model/moviesmodel.model");
const { verify } = require("../Authentication/authorization");
const { verifyAdmin } = require("../Authentication/adminAuthorization");
const {
  addEpisode,
  addSeasons,
  addSerial,
  getSerial,
  addEpisodeID,
  addSeasonsID,
} = require("../Model/seriesmodel.model");
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
class Movies {
  async getAllMovies(req, res) {
    try {
      const movies = await getMovies();
      if (verify(req.token)) {
        res.json({
          movies,
        });
      } else {
        res.json({
          message: "Invalid Token or Token is Expired!!!",
        });
      }
    } catch (e) {
      res.json({
        message: "Token Error",
      });
    }
  }
  async addMovies(req, res, next) {
    try {
      const data = req.body;
      const result = await cloudinary.uploader.upload(req.file.path);
      console.log(result);
      data["Image"] = result.secure_url;
      const movie = await addMovies(data);
      if (verifyAdmin(req.token)) {
        res.json({
          movie,
        });
      } else {
        res.json({
          message: "Invalid Token or Token is Expired!!!",
        });
      }
    } catch (err) {
      res.json({
        message: "Token Error",
      });
    }
  }
}
class Series {
  async getAllSeries(req, res) {
    try {
      const serials = await getSerial();
      if (verify(req.token)) {
        res.json({
          serials,
        });
      } else {
        res.json({
          message: "Invalid Token or Token is Expired!!!",
        });
      }
    } catch (err) {
      res.json({
        message: "Token Error",
      });
    }
  }
  async addSeries(req, res) {
    try {
      const data = req.body;
      const result = await cloudinary.uploader.upload(req.file.path);
      console.log(result);
      data["Image"] = result.secure_url;
      const serials = await addSerial(data);
      if (verifyAdmin(req.token)) {
        res.json({
          serials,
        });
      } else {
        res.json({
          message: "Invalid Token or Token is Expired!!!",
        });
      }
    } catch (err) {
      res.json({
        message: "Token Error",
      });
      console.log(err);
    }
  }
  async addSeasons(req, res) {
    try {
      const name = req.params.name;
      const data = req.body;
      console.log(data);
      const result = await cloudinary.uploader.upload(req.file.path);
      console.log(result);
      data["Image"] = result.secure_url;
      console.log(data);
      const seasons = await addSeasons(data);
      const series = await addSeasonsID(name, seasons._id);
      if (verifyAdmin(req.token)) {
        res.json({
          series,
          seasons,
        });
      } else {
        res.json({
          message: "Invalid Token or Token is Expired!!!",
        });
      }
    } catch (err) {
      res.json({
        message: "Token Error",
      });
      console.log(err);
    }
  }
  async addEpisodes(req, res) {
    try {
      const name = req.params.name;
      const data = req.body;
      const result = await cloudinary.uploader.upload(req.file.path);
      console.log(result);
      data["Image"] = result.secure_url;
      const episode = await addEpisode(data);
      const season = await addEpisodeID(name, episode._id);
      if (verify(req.token)) {
        res.json({
          episode,
          season,
        });
      } else {
        res.json({
          message: "Invalid Token or Token is Expired!!!",
        });
      }
    } catch (err) {
      res.json({
        message: "Token Error",
      });
      console.log(err);
    }
  }
}
module.exports = {
  Movies,
  Series,
};
