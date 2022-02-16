const { token } = require("../Authentication/authorization");
const { validateUser, validateAdmin } = require("../Validation/validation");
const { mailData, transport } = require("../utils/nodemailer");
const bcrypt = require("bcryptjs");
const fs = require("fs");
const {
  createUser,
  getUser,
  updatePassWord,
  validateEmail,
} = require("../Model/logindata.model");
const { tokenAdmin } = require("../Authentication/adminAuthorization");
const {
  createAdmin,
  getAdmin,
  validateAdminEmail,
  updateAdminPassWord,
} = require("../Model/login.admin");
class User {
  async create(req, res) {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const otpcheck = parseInt(req.body.otp);
      const otporiginal = fs.readFileSync("otp.txt", "utf8");
      console.log(otporiginal);
      if (otporiginal == otpcheck) {
        const user = {
          Email: email,
          PassWord: password,
        };
        fs.unlinkSync("otp.txt");
        const { error } = validateUser.validate(user);
        if (error) {
          res.status(400).json({
            message: "Valid Email name And PassWord required",
          });
        } else {
          if (await validateEmail(email)) {
            res.status(401).json({
              message: "Entered Email is Already Exists!!!",
            });
          } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            await createUser(email, hashedPassword);
            res.status(200).json({
              message: "Registration is SuccessFul",
            });
          }
        }
      } else {
        res.status(401).json({
          message: "Invalid OTP Entered",
        });
      }
    } catch (err) {
      console.error("Error in Api" + err);
    }
  }
  async otpgenerate(req, res) {
    try {
      const email = req.body.email;
      let otpgen = Math.floor(100000 + Math.random() * 900000);
      if (await validateEmail(email)) {
        fs.writeFileSync("forget.txt", String(otpgen));
        const data = mailData(email, otpgen);
        transport(data);
        res.status(200).json({
          message: "OTP is Sent SuccessFully",
        });
      } else {
        fs.writeFileSync("otp.txt", String(otpgen));
        const data = mailData(email, otpgen);
        transport(data);
        res.status(200).json({
          message: "OTP is Sent Successfully",
        });
      }
    } catch (e) {
      res.status(400).json({
        message: "Bad Request" + e,
      });
    }
  }
  async logIn(req, res) {
    try {
      const getuser = {
        email: req.body.email,
        password: req.body.password,
      };
      // const email = req.body.email;
      // const password = req.body.password;
      const data = await getUser(getuser.email);
      await data.find(async (user) => {
        try {
          if (
            user.Email == getuser.email &&
            (await bcrypt.compare(getuser.password, user.PassWord))
          ) {
            console.log("SuccessFul");
            res.status(200).json({
              message: "LogIn SuccessFul",
              user: user,
              accessToken: token(getuser),
              accessTime: Date(),
            });
          } else {
            console.error("Error in Login");
            res.status(401).json({
              message: "Invalid User Login!!!!",
            });
          }
        } catch (err) {
          console.log("error in filtering" + err);
        }
      });
    } catch (err) {
      console.log("Error in LogIn" + err);
    }
  }
  async forgetPassword(req, res) {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const otpcheck = parseInt(req.body.otp);
      const otporiginal = fs.readFileSync("forget.txt", "utf8");
      if (otporiginal == otpcheck) {
        fs.unlinkSync("forget.txt");
        if (await validateEmail(email)) {
          const hashedPassword = await bcrypt.hash(password, 10);
          const user = {
            Email: email,
            PassWord: password,
          };
          const { error } = validateUser.validate(user);
          if (error) {
            res.status(400).json({
              message: "Does not match PassWord specification",
            });
          } else {
            await updatePassWord(email, hashedPassword);
            res.status(200).json({
              message: "Successfully Changed Password",
            });
          }
        } else {
          res.status(401).json({
            message: "You are not Registered User!!!",
          });
        }
      } else {
        res.status(401).json({
          message: "Invalid OTP!!!",
        });
      }
    } catch (err) {
      console.log("Error in Updating Password");
    }
  }
}
class Admin {
  async create(req, res) {
    try {
      const email = req.body.email;
      const password = req.body.password;
      // console.log(email, password);
      const admin = {
        Email: email,
        PassWord: password,
      };
      const { error } = validateAdmin.validate(admin);
      if (error) {
        res.status(400).json({
          message: "Valid Email name And PassWord required",
        });
        //   console.log(error);
      } else {
        if (await validateAdminEmail(email)) {
          res.status(401).json({
            message: "Entered Email is Already Exists!!!",
          });
        } else {
          const hashedPassword = await bcrypt.hash(password, 10);
          await createAdmin(email, hashedPassword);
          res.status(200).json({
            message: "Registration is SuccessFul",
          });
        }
      }
    } catch (err) {
      console.error("Error in Api" + err);
    }
  }
  async logIn(req, res) {
    try {
      const getadmin = {
        email: req.body.email,
        password: req.body.password,
      };
      // const email = req.body.email;
      // const password = req.body.password;
      const data = await getAdmin(getadmin.email);
      await data.find(async (admin) => {
        try {
          if (
            admin.Email == getadmin.email &&
            (await bcrypt.compare(getadmin.password, admin.PassWord))
          ) {
            res.status(200).json({
              message: "LogIn SuccessFul",
              accessToken: tokenAdmin(getadmin),
              accessTime: Date(),
            });
            // adminValid = { email: getadmin.email };
          } else {
            console.error("Error in Login");
            res.status(401).json({
              message: "Invalid Admin Login!!!!",
            });
          }
        } catch (err) {
          console.log("error in filtering" + err);
        }
      });
    } catch (err) {
      console.log("Error in LogIn" + err);
    }
  }
  async forgetPassword(req, res) {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const hashedPassword = await bcrypt.hash(password, 10);
      const admin = {
        Email: email,
        PassWord: password,
      };
      const { error } = validateAdmin.validate(admin);
      if (error) {
        res.status(400).json({
          message: "Does not match PassWord specification",
        });
      } else {
        await updateAdminPassWord(email, hashedPassword);
        res.status(200).json({
          message: "Successfully Changed Password",
        });
      }
    } catch (err) {
      console.log("Error in Updating Password");
    }
  }
}

module.exports = {
  User,
  Admin,
};
