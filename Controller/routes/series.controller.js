const express = require("express");
const router = express.Router();
const { Series } = require("../../Domains/user.domains");
const upload = require("../../utils/multer");
class SeriesRoutes {
  static async getAll(req, res) {
    const serial = new Series();
    serial.getAllSeries(req, res);
  }
  static async addSerial(req, res) {
    const serial = new Series();
    serial.addSeries(req, res);
  }
  static async addSeason(req, res) {
    const season = new Series();
    season.addSeasons(req, res);
  }
  static async addEpisode(req, res) {
    const episode = new Series();
    episode.addEpisodes(req, res);
  }
}
router.get("/serials", SeriesRoutes.getAll);
router.post("/serials", upload.single("Images"), SeriesRoutes.addSerial);
router.post("/seasons/:name", upload.single("Images"), SeriesRoutes.addSeason);
router.post(
  "/seasons/episodes/:name",
  upload.single("Images"),
  SeriesRoutes.addEpisode
);

module.exports = router;
