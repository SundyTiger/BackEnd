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
}
router.get("/movies", MoviesRoutes.getAll);
router.post(
  "/movies",
  validateToken,
  upload.single("Images"),
  MoviesRoutes.add
);

module.exports = router;
