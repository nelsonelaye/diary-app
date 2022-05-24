const mongoose = require("mongoose");

const url = "mongodb://localhost/DiaryDb";

mongoose
  .connect(url)
  .then(() => {
    console.log("Database 101 is ready");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;
