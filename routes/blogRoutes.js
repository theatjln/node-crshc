const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

/// --ROUTE BLOGS
// ALL BLOGS ROUTE
router.get("/", blogController.blog_index);

// NEW BLOG SUBMIT ROUTE
router.post("/", blogController.blog_create_post);

// CREATE A SINGLE BLOG
router.get("/create", blogController.blog_create_get);

// GET A SINGLE BLOG ROUTE
router.get("/:id", blogController.blog_details);

// DELETE A SINGLE BLOG ROUTE
router.delete("/:id", blogController.blog_delete);

module.exports = router;
