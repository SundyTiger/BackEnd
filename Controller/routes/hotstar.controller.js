// const express = require('express');
// const router = express.Router();
// const { getMovies } = require('../../Model/movies.model');
// const { getSerial } = require('../../Model/serial.model');
// const { getSports } = require('../../Model/sports.model');
// const { verify } = require('../../Authentication/authorization');
// router.use(express.json());
// router.get('/movies', async (req, res, next) => {
//     try {
//         const movies = await getMovies()
//         if (verify(req.token)) {
//             res.json({
//                 movies
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
//         console.log(err)
//     }
// })
// router.get('/serials', async (req, res, next) => {
//     try {
//         const serials = await getSerial()
//         if (verify(req.token)) {
//             res.json({
//                 serials
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
// router.get('/sports', async (req, res, next) => {
//     try {
//         const sports = await getSports()
//         if (verify(req.token)) {
//             res.json({
//                 sports
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

// module.exports = router;