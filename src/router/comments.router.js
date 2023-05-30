const express = require('express');
const { getAllComments, addComments } = require('../controller/comments.controller');

const router = express.Router();

router.get("/get-comments", getAllComments)
router.post("/post-comments", addComments)

module.exports = router;