const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname == "Video") {
      cb(null, "./public/videos/");
    } else if (file.fieldname == "Images") {
      cb(null, "./public/images/");
    }
  },
  filename: (req, file, cb) => {
    console.log(file);
    var filetype = "";
    if (file.fieldname == "Video") {
      if (file.mimetype === "video/mp4") {
        filetype = "mp4";
        cb(null, Date.now() + "." + filetype);
      } else {
        cb("video file type is invalid", false);
      }
    } else if (file.fieldname == "Images") {
      if (file.mimetype === "image/png") {
        filetype = "png";
        cb(null, Date.now() + "." + filetype);
      } else if (file.mimetype === "image/jpeg") {
        filetype = "jpg";
        cb(null, Date.now() + "." + filetype);
      } else {
        cb("image file type is invalid", false);
      }
    }
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
