const db = require('../../models/index');

const getPosts = async(req,res)=>{
    
    if (req.query.user_id)
    {
        const results = await db.post.findAll({ where: { user_id: req.query.user_id }});
        res.send(results)
        return;
    }
    const results = await db.post.findAll();
    res.send(results)
}

const addPosts = async(req, res) => {

    const results = await db.post.create(req.body);
    res.send(results)
}

const deletePosts = async(req, res) =>{
    const result = await db.post.destroy({ where: { id: req.params.id } });
    res.json(result)
}

module.exports = { getPosts, addPosts, deletePosts }