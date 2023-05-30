const db = require('../../models/index');

const getAllComments = async (req, res) => {
    const results = await db.comments.findAll();
    res.send(results)
}

const addComments = async (req, res) => {

    const results = await db.comments.create(req.body);
    res.send(results)
}

module.exports = { getAllComments, addComments }