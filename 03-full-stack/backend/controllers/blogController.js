const { isValidObjectId } = require("mongoose");

const Blog = require("../models/Blog");

const blogController = {
  /////////////////////////////////////////////////
  //create blog
  /////////////////////////////////////////////////

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
      return res
        .status(201)
        .json({ msg: "This API will create new blog in DB", blog });
    } catch (error) {
      console.log("OH NO ERROR");
      console.log(error);
      return res.status(400).json({ msg: error.message });
    }
  },

  /////////////////////////////////////////////////
  //read all blogs
  /////////////////////////////////////////////////

  async getAll(req, res) {
    try {
      const blogs = await Blog.find({});
      return res
        .status(200)
        .json({ msg: "All blogs are here", total: blogs.length, blogs });
    } catch (error) {
      console.log("OH NO ERROR");
      console.log(error);
      return res.status(500).json({ msg: error.message });
    }
  },

  /////////////////////////////////////////////////
  //get specific blog by id
  /////////////////////////////////////////////////

  async getBlogById(req, res) {
    const { id } = req.params;

    try {
      const blog = await Blog.findOne({ _id: id });

      if (!blog) throw { message: `Item is not present in the DB` };

      return res.status(200).json({ blog, msg: "Blog Found Success" });
    } catch (error) {
      console.log("OH NO ERROR");
      console.log(error);
      return res.status(400).json({ msg: error.message });
    }
  },

  /////////////////////////////////////////////////
  //update blog
  /////////////////////////////////////////////////

  async updateBlog(req, res) {
    const { id } = req.params;

    // console.log(req.body);

    try {
      const updatedBlog = await Blog.updateOne({ _id: id }, req.body);

      // const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {
      //   new: true,
      // });

      // console.log("Updated Blog :::");
      // console.log(updatedBlog);

      // HTTP 204 should imply "resource updated successfully"
      // res.status(204).json({ msg: `updated hostel in DB!` });
      return res
        .status(200)
        .json({ updatedBlog, msg: `updated hostel in DB!` });
    } catch (error) {
      console.log("OH NO ERROR");
      console.log(error);
      return res.status(400).json({ msg: error.message });
    }
  },

  /////////////////////////////////////////////////
  //delete blog
  /////////////////////////////////////////////////

  async deleteBlog(req, res) {
    const { id } = req.params;

    try {
      //ensuring mongoDB id is of correct format
      const isIDValid = isValidObjectId(id);
      // console.log(isIDValid);
      if (!isIDValid) throw { message: `Invalid ID provided!` };

      //ensuring document with same id is present in DB
      const blog = await Blog.findOne({ _id: id });
      if (!blog) throw { message: `Item is not present in the DB` };

      const x = await Blog.deleteOne({ _id: id });
      console.log(x);
      // await Blog.findByIdAndDelete(id);

      return res.status(200).json({ msg: "Blog deleted" });
    } catch (error) {
      console.log("OH NO ERROR");
      console.log(error);
      return res.status(400).json({ msg: error.message });
    }
  },
};

module.exports = blogController;
