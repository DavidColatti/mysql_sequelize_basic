const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/all", (req, res) => {
  db.User.findAll({
    include: [db.Profile, db.Post],
  }).then((allUsers) => res.send(allUsers));
});

router.post("/new", (req, res) => {
  db.User.create({
    username: req.body.username,
  }).then((newUser) => res.send(newUser));
});

module.exports = router;
