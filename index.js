const express = require("express");
const { createProject } = require("./utils/copy-folder");

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    await createProject("demo","projects");
    res.status(200).json({
        msg:"Project Created",
    })
  } catch (error) {
    res.status(200).json({
        msg:"Project Not Created",
        error,
    })
  }
});
app.listen(3001, () => {
  console.log("Server Started");
});
