const express = require("express");
const router = new express.Router();
const Users = require("../models/users");


// get users
router.get("/users", async (req, res) => {
  try {
    const result = await Users.find();
    res.status(201).send(result);
  } catch (err) {
    res.status(404).send({ status: 404, message: err.message });
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const result = await Users.findById({ _id: req.params.id });
    if (!result) {
      res.status(404).send({ status: 404, message: "No User Found" });
    } else {
      res.status(201).send(result);
    }
  } catch (err) {
    res.status(404).send({ status: 404, message: err.message });
  }
});

// create a new user
router.post("/users", async (req, res) => {
  console.log(req.body);
  try {
    const newUser = new Users(req.body);
    const result = await newUser.save();
    res.status(201).send(result);
  } catch (err) {
    res.status(404).send({ status: 404, message: err.message });
  }
});

// update a user
router.put("/users/:id", (req, res) => {});

router.patch("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const result = await Users.findByIdAndUpdate(_id, req.body, { new: true });
    res.status(201).send(result);
  } catch (err) {
    res.status(404).send({ status: 404, message: err.message });
  }
});

// delete a user
router.delete("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const result = await Users.findByIdAndDelete(_id);
    res.status(201).send(result);
  } catch (err) {
    res.status(404).send({ status: 404, message: err.message });
  }
});

module.exports = router;
