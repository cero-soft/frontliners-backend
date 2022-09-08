const express = require("express");
const path = require("path");
const router = express.Router();

const { createProject } = require("../utils/copy-folder");

const Project = require("../Schemas/project.schema");
router.post("/:projectName", async (req, res) => {
  try {
    let fileName = req.params.projectName + "-" + Date.now();
    await createProject(
      path.join(__dirname, "../", "demo"),
      path.join(__dirname, "../", `projects/${fileName}`)
    );
    const date = new Date();
    let projectData = Project.create({
      date:
        date.getDate().toString() +
        " / " +
        (date.getMonth() + 1) +
        " / " +
        date.getFullYear().toString(),
      fileName,
      projectName: req.params.projectName,
      deployedLink: "https://localhost:3006/",
    });
    res.status(200).json({
      msg: "Project Created",
      projectData,
    });
  } catch (error) {
    res.status(200).json({
      msg: "Project Not Created",
      error,
    });
  }
});

module.exports = router;
