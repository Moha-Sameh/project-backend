// Main requirements
const express = require("express");
const cors = require("cors");
const db = require("./db/models");
const app = express();
const dataRouter = require("./routers/dataRouter");
const courseRouter = require("./routers/courseRouter");
const studentRouter = require("./routers/studentRouter");

//middleware
app.use(cors());
app.use(express.json());

//Router
app.use("/colleges", dataRouter);
app.use("/courses", courseRouter);
app.use("/students", studentRouter);

// App intialization
const run = async () => {
  try {
    await db.sequelize.sync({ force: false });
    console.log("Connection to the database successful!");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }

  await app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });
};

run();
