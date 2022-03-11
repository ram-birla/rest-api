const express = require("express");
require("../db/connection");
const app = express();
const PORT = process.env.PORT || 3000;
const router = require("../routes/students");
app.use(express.json());

// register router
app.use(router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
