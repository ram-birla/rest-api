const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("connected to users db");
  })
  .catch((err) => {
    console.log("connection error: " + err);
  });