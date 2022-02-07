const mongoose = require("mongoose");


const adminschema = new mongoose.Schema({
  Email: {
    type: String,
    required: true,
  },
  PassWord: {
    type: String,
    required: true,
  },
});
const AdminPass = mongoose.model("AdminInfo", adminschema);
async function createAdmin(email, password) {
  const admininfo = new AdminPass({
    Email: email,
    PassWord: password,
  });
  try {
    const data = await admininfo.save();
  } catch (err) {
    console.log("Login Error" + err);
  }
}
async function getAdmin(email) {
  try {
    const admin = await AdminPass.find({
      Email: email,
    });
    if (!admin) return console.log("Invalid User");
    return admin;
  } catch (err) {
    console.error("Error in getUser" + err);
  }
}
async function updateAdminPassWord(email, password) {
  try {
    const admin = await AdminPass.updateOne(
      { Email: email },
      {
        $set: {
          PassWord: password,
        },
      }
    );
    if (!admin) return console.log("Invalid EmailID or Password");
  } catch (err) {
    console.log("Error in UpdatePassword: " + err);
  }
}
async function validateAdminEmail(email) {
  try {
    const admin = await AdminPass.find({
      Email: email,
    });
    console.log();
    // const value = typeof(user) == "boolean";
    // const value = typeof(user) == "undefined";
    // console.log(value);
    if (admin.length == 0) {
      console.log("valid Email Address!!!");
      return false;
    } else {
      console.log("Email is Already Exists!!!");
      return true;
    }
  } catch (err) {
    console.error("Error in getUser" + err);
  }
}
module.exports = {
  getAdmin,
  createAdmin,
  updateAdminPassWord,
  validateAdminEmail,
};
