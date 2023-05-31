const express = require('express');
const { addGroup, joinGroup } = require('../controller/group.controller');
const router = express.Router();


router.post('/post-group',addGroup);
router.post('/post-join-group', joinGroup);

module.exports = router