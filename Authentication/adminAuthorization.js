const config = require("./admin.config");
const jwt = require("jsonwebtoken");

const tokenAdmin = (admin) => {
  return jwt.sign(admin, config.secretKey, {
    algorithm: config.algorithm,
    expiresIn: "40m",
  });
};
const verifyAdmin = (accessToken) => {
  return (
    jwt.verify(accessToken, config.secretKey, {
      algorithm: config.algorithm,
      expiresIn: "2h",
    }),
    (err, decode) => {
      if (err) {
        console.log(err);
      } else {
        console.log(decode);
      }
    }
  );
};
module.exports = { tokenAdmin, verifyAdmin };
