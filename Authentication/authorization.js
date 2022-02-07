const config = require("./global.config");
const jwt = require("jsonwebtoken");

const token = (user) => {
  return jwt.sign(user, config.secretKey, {
    algorithm: config.algorithm,
    expiresIn: "40m",
  });
};
const verify = (accessToken) => {
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
module.exports = { token, verify };
