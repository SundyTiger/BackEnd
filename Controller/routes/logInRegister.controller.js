const express = require("express");
const router = express.Router();
const { User, Admin } = require("../../Domains/login.domains");
router.use(express.json());
class UserRoutes {
  static async register(req, res) {
    const user = new User();
    user.create(req, res);
  }
  static async otpVal(req, res) {
    const user = new User();
    user.otpgenerate(req, res);
  }
  static async logIn(req, res) {
    const user = new User();
    user.logIn(req, res);
  }
  static async forget(req, res) {
    const user = new User();
    user.forgetPassword(req, res);
  }
  static async AddWatch(req, res) {
    const user = new User();
    user.AddToWatch(req, res);
  }
  static async RemoveWatch(req, res) {
    const user = new User();
    user.RemoveFromWatch(req, res);
  }
}
class AdminRoutes {
  static async register(req, res) {
    const admin = new Admin();
    admin.create(req, res);
  }
  static async logIn(req, res) {
    const admin = new Admin();
    admin.logIn(req, res);
  }
  static async forget(req, res) {
    const admin = new Admin();
    admin.forgetPassword(req, res);
  }
}

router.post("/disneyplushotstar/register", UserRoutes.register);
router.post("/disneyplushotstar/otp", UserRoutes.otpVal);
router.post("/disneyplushotstar/admin/register", AdminRoutes.register);
router.post("/disneyplushotstar/login", UserRoutes.logIn);
router.post("/disneyplushotstar/admin/login", AdminRoutes.logIn);
router.post("/disneyplushotstar/forgetpassword", UserRoutes.forget);
router.post("/disneyplushotstar/admin/forgetpassword", AdminRoutes.forget);
router.post("/disneyplushotstar/watchlist", UserRoutes.AddWatch);
router.put("/disneyplushotstar/watchlist", UserRoutes.RemoveWatch);
module.exports = router;
