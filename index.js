const express = require("express");
const app = express();
const multer = require("multer");
const dotenv = require("dotenv");
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
dotenv.config();
const { validateToken } = require("./Middleware/tokenVaditaor");
// const hotStarRoutes = require("./Controller/routes/hotstar.controller");
// // const verifyToken = require('./Controller/routes/verify.Controller');
// const emailRoutes = require("../BackEnd/Controller/routes/emailRoutes.Controller");
// const kidsRoutes = require("./Controller/routes/kids.controller");
// const disneyplusRoutes = require("./Controller/routes/disneyplus.controller");
// const dpAdmin = require("./Controller/admin/routes/dp.admin");
// const emailAdmin = require("./Controller/admin/routes/emailRoutes.admin");
// const hotStarAdmin = require("./Controller/admin/routes/hotstar.admin");
const logInRegister = require("./Controller/routes/logInRegister.controller");
const movies = require("./Controller/routes/movies.controller");
const series = require("./Controller/routes/series.controller");
// const kidsAdmin = require("./Controller/admin/routes/kids.admin");
const mongoose = require("mongoose");
// const upload = multer({ dest: "public/files" });

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database is Exersicing......."))
  .catch((err) => console.error("Error in Connection" + err));
// app.use(emailRoutes);
// app.use(emailAdmin);
app.use(cors({ corsOptions }));
app.use(express.json());
app.use(logInRegister);
app.use(validateToken);

// app.use("/disneyplushotstar", hotStarRoutes);
// app.use("/disneyplushotstar/kids", kidsRoutes);
// app.use("/disneyplushotstar/disneyplus", disneyplusRoutes);
// app.use("/disneyplushotstar", hotStarAdmin);
// app.use("/disneyplushotstar/kids", kidsAdmin);
// app.use("/disneyplushotstar/disneyplus", dpAdmin);
// app.use(verifyToken);
app.use("/disneyplushotstar", movies);
app.use("/disneyplushotstar", series);
app.listen(3000, () => console.log("Server is Exersicing............."));
