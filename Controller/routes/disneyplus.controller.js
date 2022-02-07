// const express = require("express");
// const router = express.Router();
// const { verify } = require("../../Authentication/authorization");
// const { getDpMovies } = require("../../Model/disneyplusMovies.model");
// const { getDpSeries } = require("../../Model/disneyplusSeries.model");
// const { Movies } = require("../../Domains/user.domains");
// router.use(express.json());
// router.get("/dpmovies", async (req, res, next) => {
//   try {
//     const movie = await getDpMovies();
//     if (verify(req.token)) {
//       res.json({
//         movie,
//       });
//     } else {
//       res.json({
//         message: "Invalid Token or Token is Expired!!!",
//       });
//     }
//   } catch (err) {
//     res.json({
//       message: "Token Error",
//     });
//   }
// });
// router.get("/dpseries", async (req, res, next) => {
//   try {
//     const series = await getDpSeries();
//     if (verify(req.token)) {
//       res.json({
//         series,
//       });
//     } else {
//       res.json({
//         message: "Invalid Token or Token is Expired!!!",
//       });
//     }
//   } catch (err) {
//     res.json({
//       message: "Token Error",
//     });
//     console.log(err);
//   }
// });

// module.exports = router;
