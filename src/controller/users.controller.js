const db = require("../../models/index")

const getAllUsers = async (req,res)=>{
    const result = await db.User.findAll();
    res.json(result)
}

const addUsers = async (req, res) => {
    const result = await db.User.create(req.body);
    res.json(result)

}



module.exports = {getAllUsers,addUsers}