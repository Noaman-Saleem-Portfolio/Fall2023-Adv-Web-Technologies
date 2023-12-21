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

//read all blogs
router.get("/blog/all", blogController.getAll);

//read blog by id
router.get("/blog/:id", blogController.getBlogById);

//update blog
router.patch("/blog/:id", blogController.updateBlog);

//delete blog
router.delete("/blog/:id", blogController.deleteBlog);

module.exports = router;
