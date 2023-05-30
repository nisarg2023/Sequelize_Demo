const db = require('../../models/index');

const getAllComments = async (req, res) => {
    const results = await db.comments.findAll();
    res.send(results)
}

const addComments = async (req, res) => {

    try {

        const results = await db.comments.create(req.body);
        res.send(results)
    }
    catch (err) { 
        console.log(err);
        res.send({ "error": results })

     }
}

module.exports = { getAllComments, addComments }