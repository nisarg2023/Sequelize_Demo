const express = require('express');
const { getAllUsers, addUsers, getUser, deleteUser, getUserGroup } = require('../controller/users.controller');
const router = express.Router();

router.get('/get-users',getAllUsers);
router.post('/post-user', addUsers);
router.get('/get-user/:id', getUser);
router.delete('/delete-user/:id', deleteUser);

router.get('/get-user-group/:id', getUserGroup);




module.exports = router;