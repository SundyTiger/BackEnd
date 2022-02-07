// const express = require('express');
// const router = express.Router();
// const { verify } = require('../../Authentication/authorization');
// const { getKidSerial } = require('../../Model/kidsSerial.model');
// const { getKidMovies } = require('../../Model/kidsMovie.model');

// router.use(express.json());
// router.get('/kidserial', async (req, res, next) => {
//     try {
//         const serial = await getKidSerial()
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
// router.get('/kidmovies', async (req, res, next) => {
//     try {
//         const movie = await getKidMovies()
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

// module.exports = router;