const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  date: String,
  fileName:String,
  projectName:String,
  deployedLink:String,
});

const Project = mongoose.model("projects", projectSchema);

module.exports = Project;