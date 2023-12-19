const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

//home route
router.get("/", (req, res) => {
  res.send("This is the response from API at path /");
});

module.exports = router;
