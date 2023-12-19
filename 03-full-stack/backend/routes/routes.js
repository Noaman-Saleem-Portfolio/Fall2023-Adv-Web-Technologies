const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

//home route
router.get("/", (req, res) => {
  res.send("This is the response from API at path /");
});

//Blogs

//create new blog
router.post("/blog/new", blogController.create);

//get all blogs
router.get("/blog/all", blogController.getAll);

module.exports = router;
