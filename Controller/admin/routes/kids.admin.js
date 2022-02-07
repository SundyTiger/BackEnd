// const express = require('express');
// const router = express.Router();
// const { verify } = require('../../../Authentication/adminAuthorization');
// const { addKidsSerial } = require('../../../Model/kidsSerial.model');
// const { addKidsMovies } = require('../../../Model/kidsMovie.model');

// router.use(express.json());
// router.post('/kidserial', async (req, res, next) => {
//     try {
//         const data = req.body
//         const serial = await addKidsSerial(data)
//         if (verify(req.token)) {
//             res.json({
//                 serial
//             })
//         }
//         else {
//             res.json({
//                 message: "Invalid Token or Token is Expired!!!"
//             })
//         }
//         next()
//     }
//     catch (err) {
//         res.json({
//             message: "Token Error"
//         })
//     }
// })
// router.post('/kidmovies', async (req, res, next) => {
//     try {
//         const data = req.body
//         const movie = await addKidsMovies(data)
//         if (verify(req.token)) {
//             res.json({
//                 movie
//             })
//         }
//         else {
//             res.json({
//                 message: "Invalid Token or Token is Expired!!!"
//             })
//         }
//     }
//     catch (err) {
//         res.json({
//             message: "Token Error"
//         })
//     }
// })
// router.post("/kidseasons/:name", async (req, res, next) => {
//     try {
//       const name = req.params.name;
//       const data = req.body;
//       console.log(data);
//       const seasons = await addSeasons(data);
//       const series = await addSeasonsID(name, seasons._id);
//       if (verify(req.token)) {
//         res.json({
//           series,
//           seasons,
//         });
//       } else {
//         res.json({
//           message: "Invalid Token or Token is Expired!!!",
//         });
//       }
//     } catch (err) {
//       res.json({
//         message: "Token Error",
//       });
//       console.log(err);
//     }
//   });
//   router.post("/kidseasons/episodes/:name", async (req, res, next) => {
//     try {
//       const name = req.params.name;
//       const data = req.body;
//       const episode = await addEpisode(data);
//       const season = await addEpisodeID(name, episode._id);
//       if (verify(req.token)) {
//         res.json({
//           episode,
//           season,
//         });
//       } else {
//         res.json({
//           message: "Invalid Token or Token is Expired!!!",
//         });
//       }
//     } catch (err) {
//       res.json({
//         message: "Token Error",
//       });
//       console.log(err);
//     }
//   });
  
// module.exports = router;