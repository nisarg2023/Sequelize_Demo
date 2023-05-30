const express = require('express');
const { getComments, addComments, deleteComments } = require('../controller/comments.controller');

const router = express.Router();

router.get("/get-comments", getComments)
router.post("/post-comments", addComments)
router.delete("/delete-comments/:id", deleteComments)

module.exports = router;