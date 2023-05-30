const express = require('express');
const { getAllPosts, addPosts } = require('../controller/post.controller');
const router = express.Router();

router.get("/get-posts",getAllPosts)
router.post("/post-posts", addPosts)

module.exports = router;