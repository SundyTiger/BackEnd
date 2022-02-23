const mongoose = require("mongoose");

const dphschema = new mongoose.Schema({
  Email: {
    type: String,
    required: true,
  },
  PassWord: {
    type: String,
    required: true,
  },
  WatchList: {
    type: Array,
  },
  isFree: {
    type: Boolean,
    default: true,
  },
  isPremium: {
    type: Boolean,
    default: false,
  },
});
const UserPass = mongoose.model("UserInfo", dphschema);
async function createUser(email, password) {
  const userinfo = new UserPass({
    Email: email,
    PassWord: password,
  });
  try {
    const data = await userinfo.save();
  } catch (err) {
    console.log("Login Error" + err);
  }
}
async function getUser(email) {
  try {
    const user = await UserPass.find({
      Email: email,
    });
    if (!user) return console.log("Invalid User");
    return user;
  } catch (err) {
    console.error("Error in getUser" + err);
  }
}
async function updatePassWord(email, password) {
  try {
    const user = await UserPass.updateOne(
      { Email: email },
      {
        $set: {
          PassWord: password,
        },
      }
    );
    if (!user) return console.log("Invalid EmailID or Password");
  } catch (err) {
    console.log("Error in UpdatePassword: " + err);
  }
}
async function validateEmail(email) {
  try {
    const user = await UserPass.find({
      Email: email,
    });
    console.log();
    // const value = typeof(user) == "boolean";
    // const value = typeof(user) == "undefined";
    // console.log(value);
    if (user.length == 0) {
      console.log("valid Email Address!!!");
      return false;
    } else {
      console.log("Email is Already Exists!!!");
      return true;
    }
  } catch (err) {
    return "Error in getUser" + err;
  }
}
async function AddToWatchList(email, data) {
  try {
    const user = await UserPass.findOne({
      Email: email,
    });
    if (!user["WatchList"].includes(data)) {
      user["WatchList"].push(data);
    }
    return user.save();
  } catch (e) {
    console.log("Add to WatchList Error" + e);
  }
}
async function RemoveFromWatchList(email, data) {
  try {
    const user = await UserPass.findOne({
      Email: email,
    });
    if (user["WatchList"].includes(data)) {
      user["WatchList"].filter((name, index) => {
        if (name == data) {
          user["WatchList"].splice(index, 1);
        }
      });
    }
    return user.save();
  } catch (e) {
    console.log("Remove From The WatchList" + e);
  }
}
module.exports = {
  getUser,
  createUser,
  updatePassWord,
  validateEmail,
  AddToWatchList,
  RemoveFromWatchList,
};
