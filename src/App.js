// Main requirements
const express = require("express");
const cors = require("cors");
const db = require("./db/models");
const app = express();
const dataRouter = require("./routers/dataRouter");

//middleware
app.use(cors());

app.use("/colleges", dataRouter);
// App intialization
const run = async () => {
  try {
    await db.sequelize.sync();
    console.log("Connection to the database successful!");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }

  await app.listen(8001, () => {
    console.log("The application is running on localhost:8000");
  });
};

run();
