const express = require("express");
const router = express.Router();
const { Movies } = require("../../Domains/user.domains");
const upload = require("../../utils/multer");
const { validateToken } = require("../../Middleware/tokenVaditaor");
router.use(express.json());
class MoviesRoutes {
  static async getAll(req, res) {
    const movies = new Movies();
    movies.getAllMovies(req, res);
  }
  static async add(req, res) {
    const movies = new Movies();
    movies.addMovies(req, res);
  }
  static async filter(req, res) {
    const movies = new Movies();
    movies.filterMovies(req, res);
  }
  static async filterData(req, res) {
    const movies = new Movies();
    movies.filterData(req, res);
  }
}
router.get("/movies", MoviesRoutes.getAll);
router.post(
  "/movies",
  validateToken,
  upload.fields([
    { name: "Images", maxCount: 1 },
    { name: "Video", maxCount: 1 },
  ]),
  MoviesRoutes.add
);
router.post("/movies/filter", MoviesRoutes.filter);
router.post("/movies/filterData", MoviesRoutes.filterData);
module.exports = router;
