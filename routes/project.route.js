const express = require("express");
const router = express.Router();

const Project = require("../Schemas/project.schema");
router.post("/:projectName", async (req, res) => {
  try {
    let fileName = req.params.projectName+"-"+Date.now();
    await createProject("../demo", `../projects/${projectData}`);
    const date = new Date();
    let projectData = Project.create({
        date: date.getDate(),
        fileName,
        projectName: req.params.projectName,
        deployedLink:"https://localhost:3006/"
    })
    res.status(200).json({
      msg: "Project Created",
    });
  } catch (error) {
    res.status(200).json({
      msg: "Project Not Created",
      error,
    });
  }
});

module.exports = router;
