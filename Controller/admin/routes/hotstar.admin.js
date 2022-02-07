// const express = require("express");
// const router = express.Router();
// const { addMovies } = require("../../../Model/movies.model");
// const {
//   addSerial,
//   addEpisodeID,
//   addSeasonsID,
//   addSeasons,
//   addEpisode,
// } = require("../../../Model/serial.model");
// const { addSports } = require("../../../Model/sports.model");
// const { verify } = require("../../../Authentication/adminAuthorization");
// router.use(express.json());
// router.post("/movies", async (req, res, next) => {
//   try {
//     const data = req.body;
//     const movies = await addMovies(data);
//     if (verify(req.token)) {
//       res.json({
//         movies,
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
// router.post("/serials", async (req, res, next) => {
//   try {
//     const data = req.body;
//     const serials = await addSerial(data);
//     if (verify(req.token)) {
//       res.json({
//         serials,
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
// router.post("/sports", async (req, res, next) => {
//   try {
//     const data = req.body;
//     const sports = await addSports(data);
//     if (verify(req.token)) {
//       res.json({
//         sports,
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

// // router.post("/seasons/:name", async (req, res, next) => {
// //   try {
// //     const name = req.params.name;
// //     const data = req.body;
// //     console.log(data);
// //     const seasons = await addSeasons(data);
// //     const series = await addSeasonsID(name, seasons._id);
// //     if (verify(req.token)) {
// //       res.json({
// //         series,
// //         seasons,
// //       });
// //     } else {
// //       res.json({
// //         message: "Invalid Token or Token is Expired!!!",
// //       });
// //     }
// //   } catch (err) {
// //     res.json({
// //       message: "Token Error",
// //     });
// //     console.log(err);
// //   }
// // });
// // router.post("/seasons/episodes/:name", async (req, res, next) => {
// //   try {
// //     const name = req.params.name;
// //     const data = req.body;
// //     const episode = await addEpisode(data);
// //     const season = await addEpisodeID(name, episode._id);
// //     if (verify(req.token)) {
// //       res.json({
// //         episode,
// //         season,
// //       });
// //     } else {
// //       res.json({
// //         message: "Invalid Token or Token is Expired!!!",
// //       });
// //     }
// //   } catch (err) {
// //     res.json({
// //       message: "Token Error",
// //     });
// //     console.log(err);
// //   }
// // });

// // module.exports = router;
