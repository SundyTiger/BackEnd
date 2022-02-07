// require('dotenv').config();
// const jwt = require('jsonwebtoken');

// function verifyToken(req,res,next){
//     let bearerHeader= req.headers.authorization
//     if(typeof(bearerHeader)=='undefined')
//     {
//         res.json({
//             message:"Bearer is not defined"
//         })
//     }
//     else{
//     const bearerToken = bearerHeader.split(' ')[1]
//     }
//     jwt.verify(req.token,process.env.ACCESS_TOKEN_SECRET,(err,access)=>{
//         if(err)
//         {
//             res.json({
//                 message:"token is Invalid or Expired!!!"
//             })
//         }
//         else{
//             req.token = bearerToken
//             res.json({
//                 message:"User is Still LogIn"
//             })
//         }
//     })
// }
// module.exports = verifyToken