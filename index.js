const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const ProjectRoute = require("./routes/project.route");
const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    res.status(200).json({
      msg: "Server Working",
    });
  } catch (error) {
    res.status(200).json({
      msg: "Server Not Working",
      error,
    });
  }
});

app.use("/api/project",ProjectRoute);

const connect = () => {
  return mongoose.connect(process.env.mongoDB_URL);
};
const start = async () => {
  await connect();
  app.listen(3001, () => {
    console.log("Server Started");
  });
};

start();
