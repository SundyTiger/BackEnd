// const express = require("express");
// const bcrypt = require("bcryptjs");
// const router = express.Router();
// const { token, verify } = require("../../Authentication/authorization");
// const { validateUser } = require("../../Validation/validation");
// const { validateToken } = require("../../Middleware/tokenVaditaor");
// const {
//   createUser,
//   getUser,
//   updatePassWord,
//   validateEmail,
// } = require("../../Model/logindata.model");
// router.use(express.json());
// router.post("/disneyplushotstar/register", async (req, res, next) => {
//   try {
//     const email = req.body.email;
//     const password = req.body.password;
//     const user = {
//       Email: email,
//       PassWord: password,
//     };
//     const { error } = validateUser.validate(user);
//     if (error) {
//       res.json({
//         message: "Valid Email name And PassWord required",
//       });
//     } else {
//       if (await validateEmail(email)) {
//         res.json({
//           message: "Entered Email is Already Exists!!!",
//         });
//       } else {
//         const hashedPassword = await bcrypt.hash(password, 10);
//         await createUser(email, hashedPassword);
//         res.json({
//           message: "Registration is SuccessFul",
//         });
//         next();
//       }
//     }
//   } catch (err) {
//     console.error("Error in Api" + err);
//   }
// });
// router.post("/disneyplushotstar/login", async (req, res, next) => {
//   try {
//     const getuser = {
//       email: req.body.email,
//       password: req.body.password,
//     };
//     // const email = req.body.email;
//     // const password = req.body.password;
//     const data = await getUser(getuser.email);
//     await data.find(async (user) => {
//       try {
//         if (
//           user.Email == getuser.email &&
//           (await bcrypt.compare(getuser.password, user.PassWord))
//         ) {
//           console.log("SuccessFul");
//           res.json({
//             message: "LogIn SuccessFul",
//             accessToken: token(getuser),
//             accessTime: Date(),
//           });
//         } else {
//           console.error("Error in Login");
//           res.json({
//             message: "Invalid User Login!!!!",
//           });
//         }
//       } catch (err) {
//         console.log("error in filtering" + err);
//       }
//     });
//   } catch (err) {
//     console.log("Error in LogIn" + err);
//   }
// });
// router.post("/disneyplushotstar/forgotpassword", async (req, res, next) => {
//   try {
//     const email = req.body.email;
//     const password = req.body.password;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = {
//       Email: email,
//       PassWord: password,
//     };
//     const { error } = validateUser.validate(user);
//     if (error) {
//       res.json({
//         message: "Does not match PassWord specification",
//       });
//     } else {
//       await updatePassWord(email, hashedPassword);
//       res.json({
//         message: "Successfully Changed Password",
//       });
//     }
//   } catch (err) {
//     console.log("Error in Updating Password");
//   }
// });
// router.get("/disneyplushotstar", validateToken, async (req, res, next) => {
//   try {
//     if (verify(req.token)) {
//       res.json({
//         message: "User Can Access Data",
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

// module.exports = router;
