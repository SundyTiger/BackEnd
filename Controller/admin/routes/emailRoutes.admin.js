// const express = require("express");
// const bcrypt = require("bcryptjs");
// const router = express.Router();
// const { token, verify } = require("../../../Authentication/adminAuthorization");
// const { validateAdmin } = require("../../../Validation/validation");
// const { validateToken } = require("../../../Middleware/tokenVaditaor");
// const {
//   createAdmin,
//   getAdmin,
//   validateAdminEmail,
//   updateAdminPassWord,
// } = require("../../../Model/login.admin");
// let adminValid
// router.use(express.json());
// router.post("/disneyplushotstar/admin/register", async (req, res, next) => {
//   try {
//     const email = req.body.email;
//     const password = req.body.password;
//     // console.log(email, password);
//     const admin = {
//       Email: email,
//       PassWord: password,
//     };
//     const { error } = validateAdmin.validate(admin);
//     if (error) {
//       res.json({
//         message: "Valid Email name And PassWord required",
//       });
//     //   console.log(error);
//     } else {
//       if (await validateAdminEmail(email)) {
//         res.json({
//           message: "Entered Email is Already Exists!!!",
//         });
//       } else {
//         const hashedPassword = await bcrypt.hash(password, 10);
//         await createAdmin(email, hashedPassword);
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
// router.post("/disneyplushotstar/admin/login", async (req, res, next) => {
//   try {
//     const getadmin = {
//       email: req.body.email,
//       password: req.body.password,
//     };
//     // const email = req.body.email;
//     // const password = req.body.password;
//     const data = await getAdmin(getadmin.email);
//     await data.find(async (admin) => {
//       try {
//         if (
//           admin.Email == getadmin.email &&
//           (await bcrypt.compare(getadmin.password, admin.PassWord))
//         ) {
//           res.json({
//             message: "LogIn SuccessFul",
//             accessToken: token(getadmin),
//             accessTime: Date(),
//           });
//           adminValid = {email:getadmin.email}
//         } else {
//           console.error("Error in Login");
//           res.json({
//             message: "Invalid Admin Login!!!!",
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
// router.post(
//   "/disneyplushotstar/admin/forgotpassword",
//   async (req, res, next) => {
//     try {
//       const email = req.body.email;
//       const password = req.body.password;
//       const hashedPassword = await bcrypt.hash(password, 10);
//       const admin = {
//         Email: email,
//         PassWord: password,
//       };
//       const { error } = validateAdmin.validate(admin);
//       if (error) {
//         res.json({
//           message: "Does not match PassWord specification",
//         });
//       } else {
//         await updateAdminPassWord(email, hashedPassword);
//         res.json({
//           message: "Successfully Changed Password",
//         });
//       }
//     } catch (err) {
//       console.log("Error in Updating Password");
//     }
//   }
// );
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
