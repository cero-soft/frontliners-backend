const fs = require("fs-extra");

const createProject = (source, destination) => {
  console.log(source);
  const projectPromise = new Promise((resolve, reject) => {
    fs.copy(source, destination, function (err) {
      if (err) {
        reject(err);
        return console.error(err);
      }

      resolve();
      console.log("Copy completed!");
    });
  });

  return projectPromise;
};

module.exports = {
    createProject
}