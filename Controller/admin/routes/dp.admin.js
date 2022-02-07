// const express = require("express");
// const { decode } = require("jsonwebtoken");
// const router = express.Router();
// const { verify } = require("../../../Authentication/adminAuthorization");
// const { addDpMovies } = require("../../../Model/disneyplusMovies.model");
// const {
//   addDpSeries,
//   addDPEpisode,
//   addDPEpisodeId,
//   addDPSeason,
//   addDPSeasonsId,
// } = require("../../../Model/disneyplusSeries.model");
// router.use(express.json());
// router.post("/dpmovies", async (req, res, next) => {
//   try {
//     const data = req.body;
//     const movie = await addDpMovies(data);
//     if (verify(req.token)) {
//       res.json({
//         movie,
//       });
//     } else {
//       res.json({
//         message: "Invalid Token or Token is Expired!!!",
//       });
//     }
//     next();
//   } catch (err) {
//     res.json({
//       message: "Token Error",
//     });
//     console.log(err);
//   }
// });
// router.post("/dpseries", async (req, res, next) => {
//   try {
//     const data = req.body;
//     const series = await addDpSeries(data);
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

// router.post("/dpseries/seasons/:name", async (req, res, next) => {
//   try {
//     const name = req.params.name;
//     const data = req.body;
//     console.log(data);
//     const seasons = await addDPSeason(data);
//     const series = await addDPSeasonsId(name, seasons._id);
//     if (verify(req.token)) {
//       res.json({
//         series,
//         seasons,
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
// router.post("/dpseries/seasons/episodes/:name", async (req, res, next) => {
//   try {
//     const name = req.params.name;
//     const data = req.body;
//       const episode = await addDPEpisode(data);
//       const season = await addDPEpisodeId(name, episode._id);
//     if (verify(req.token)) {
//       res.json({
//         episode,
//         season,
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
