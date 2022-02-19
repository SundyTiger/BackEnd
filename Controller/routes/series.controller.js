const express = require("express");
const router = express.Router();
const { Series } = require("../../Domains/user.domains");
const { validateToken } = require("../../Middleware/tokenVaditaor");
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
router.post(
  "/serials",
  validateToken,
  upload.fields([
    { name: "Images", maxCount: 1 },
    { name: "Video", maxCount: 1 },
  ]),
  SeriesRoutes.addSerial
);
router.post(
  "/seasons/:name",
  validateToken,
  upload.fields([
    { name: "Images", maxCount: 1 },
    { name: "Video", maxCount: 1 },
  ]),
  SeriesRoutes.addSeason
);
router.post(
  "/seasons/episodes/:name",
  validateToken,
  upload.fields([
    { name: "Images", maxCount: 1 },
    { name: "Video", maxCount: 1 },
  ]),
  SeriesRoutes.addEpisode
);

module.exports = router;
