const db = require("../../models/index")

const getAllUsers = async (req,res)=>{
    const result = await db.User.findAll();
    res.json(result)
}

const addUsers = async (req, res) => {
   

    try {
        const result = await db.User.create(req.body);
        res.json(result)
    }
    catch (err) {
        console.log(err.message);
        res.send({ "error": err.message })

    }

}

const getUser = async (req, res) => {
    console.log(req.params.id)
    const result = await db.User.findByPk(req.params.id);
}
const deleteUser = async (req, res) => {
    
    const result = await db.User.destroy({ where: {id:req.params.id} });
    res.json(result)
}


module.exports = { getAllUsers, addUsers, getUser, deleteUser }