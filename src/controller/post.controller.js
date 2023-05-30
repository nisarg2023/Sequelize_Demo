const db = require('../../models/index');

const getAllPosts = async(req,res)=>{
    const results = await db.post.findAll();
    res.send(results)
}

const addPosts = async(req, res) => {

    const results = await db.post.create(req.body);
    res.send(results)
}

module.exports = { getAllPosts, addPosts }