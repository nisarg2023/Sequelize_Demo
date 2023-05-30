const express = require('express');
const { getAllUsers, addUsers } = require('../controller/users.controller');
const router = express.Router();

router.get('/get-users',getAllUsers);
router.post('/post-user', addUsers);


module.exports = router;