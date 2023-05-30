const express = require('express');
const { getPosts, addPosts, deletePosts } = require('../controller/post.controller');
const router = express.Router();

router.get("/get-posts",getPosts)
router.post("/post-posts", addPosts)
router.delete("/delete-posts/:id", deletePosts)


module.exports = router;