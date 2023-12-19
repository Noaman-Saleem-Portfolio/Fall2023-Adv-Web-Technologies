const Blog = require("../models/Blog");

const blogController = {
  //create blog
  async create(req, res) {
    // console.log(req.body);

    const { title, description, image } = req.body;
    const blog = new Blog({
      title,
      description,
      image,
    });

    try {
      await blog.save();
      res
        .status(201)
        .json({ msg: "This API will create new blog in DB", blog });
    } catch (error) {
      console.log("OH NO ERROR");
      console.log(error);
      res.status(400).json({ msg: error.message });
    }
  },

  //read all blogs
  async getAll(req, res) {
    try {
      const blogs = await Blog.find({});
      res
        .status(200)
        .json({ msg: "All blogs are here", total: blogs.length, blogs });
    } catch (error) {
      console.log("OH NO ERROR");
      console.log(error);
      res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = blogController;
