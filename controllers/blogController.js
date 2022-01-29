// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete

const Blog = require("../models/blog");

/// --ROUTE BLOGS
// ALL BLOGS ROUTE
const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 }) //sort by a particular field in the document,sorted reversely
    .then((result) =>
      res.render("blogs/index", { title: "All Blogs", blogs: result }),
    )
    .catch((err) => console.log(error));
};

// NEW BLOG SUBMIT ROUTE
const blog_create_post = (req, res) => {
  console.log(req.body);

  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => res.redirect("/blogs"))
    .catch((err) => console.log(err));
};

// CREATE A SINGLE BLOG
const blog_create_get = (req, res) => {
  res.render("blogs/create", { title: "Create" });
};

// GET A SINGLE BLOG ROUTE
const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) =>
      res.render("blogs/details", { blog: result, title: "Blog Details" }),
    )
    .catch((err) => res.status(404).render("404", {title: "Blog not found"}));
};

// DELETE A SINGLE BLOG ROUTE
const blog_delete = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => res.json({ redirect: "/blogs" }))
    .catch((err) => console.log(error));
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
};
