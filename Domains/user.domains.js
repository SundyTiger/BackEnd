const {
  getMovies,
  addMovies,
  filterMovie,
} = require("../Model/moviesmodel.model");
const { verify } = require("../Authentication/authorization");
const { verifyAdmin } = require("../Authentication/adminAuthorization");
const { validateMovie, validateSeries } = require("../Validation/validation");
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
      res.status(200).json({
        movies,
      });
    } catch (e) {
      res.status(400).json({
        message: "Token Error",
      });
      console.log(e);
    }
  }
  async addMovies(req, res, next) {
    try {
      const data = req.body;
      let ImagePath = req.files["Images"][0].path;
      let newImgPath = ImagePath.replace(/\\/g, "/");
      let Image = await cloudinary.uploader.upload(newImgPath);
      let VideoPath = req.files["Video"][0].path;
      let orgName = req.files["Video"][0].originalname;
      let newPath = VideoPath.replace(/\\/g, "/");
      let Video = await cloudinary.uploader.upload(newPath, {
        resource_type: "video",
      });
      data["Image"] = Image.secure_url;
      data["Video"] = Video.secure_url;
      if (verifyAdmin(req.token)) {
        const movie = await addMovies(data);
        res.status(200).json({
          movie,
        });
      } else {
        res.status(401).json({
          message: "Invalid Token or Token is Expired!!!",
        });
      }
    } catch (err) {
      res.status(400).json({
        message: "Token Error",
      });
    }
  }
  async filterMovies(req, res) {
    try {
      const data = req.body;
      const filterData = await filterMovie(data);
      res.status(200).json({
        filterData,
      });
    } catch (e) {
      res.status(400).json({
        message: "Filtering Error: " + e,
      });
    }
  }
}
class Series {
  async getAllSeries(req, res) {
    try {
      const serials = await getSerial();
      if (verify(req.token)) {
        res.status(200).json({
          serials,
        });
      } else {
        res.status(401).json({
          message: "Invalid Token or Token is Expired!!!",
        });
      }
    } catch (err) {
      res.status(400).json({
        message: "Token Error",
      });
    }
  }
  async addSeries(req, res) {
    try {
      const data = req.body;
      let ImagePath = req.files["Images"][0].path;
      let newImgPath = ImagePath.replace(/\\/g, "/");
      let Image = await cloudinary.uploader.upload(newImgPath);
      let VideoPath = req.files["Video"][0].path;
      let orgName = req.files["Video"][0].originalname;
      let newPath = VideoPath.replace(/\\/g, "/");
      let Video = await cloudinary.uploader.upload(newPath, {
        resource_type: "video",
      });
      data["Image"] = Image.secure_url;
      data["Video"] = Video.secure_url;
      const serials = await addSerial(data);
      if (verifyAdmin(req.token)) {
        res.status(200).json({
          serials,
        });
      } else {
        res.status(401).json({
          message: "Invalid Token or Token is Expired!!!",
        });
      }
    } catch (err) {
      res.status(400).json({
        message: "Token Error",
      });
      console.log(err);
    }
  }
  async addSeasons(req, res) {
    try {
      const name = req.params.name;
      const data = req.body;
      let ImagePath = req.files["Images"][0].path;
      let newImgPath = ImagePath.replace(/\\/g, "/");
      let Image = await cloudinary.uploader.upload(newImgPath);
      let VideoPath = req.files["Video"][0].path;
      let orgName = req.files["Video"][0].originalname;
      let newPath = VideoPath.replace(/\\/g, "/");
      let Video = await cloudinary.uploader.upload(newPath, {
        resource_type: "video",
      });
      data["Image"] = Image.secure_url;
      data["Video"] = Video.secure_url;
      const seasons = await addSeasons(data);
      const series = await addSeasonsID(name, seasons._id);
      if (verifyAdmin(req.token)) {
        res.status(200).json({
          series,
          seasons,
        });
      } else {
        res.status(401).json({
          message: "Invalid Token or Token is Expired!!!",
        });
      }
    } catch (err) {
      res.status(400).json({
        message: "Token Error",
      });
      console.log(err);
    }
  }
  async addEpisodes(req, res) {
    try {
      const name = req.params.name;
      const data = req.body;
      console.log(req.files);
      const Image = await cloudinary.uploader.upload(req.files["Images"].path);
      const Video = await cloudinary.uploader.upload(req.files["Video"].path);
      console.log(Image);
      data["Image"] = Image.secure_url;
      data["Video"] = Video.secure_url;
      const episode = await addEpisode(data);
      const season = await addEpisodeID(name, episode._id);
      if (verify(req.token)) {
        res.status(200).json({
          episode,
          season,
        });
      } else {
        res.status(401).json({
          message: "Invalid Token or Token is Expired!!!",
        });
      }
    } catch (err) {
      res.status(400).json({
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
