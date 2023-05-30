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



module.exports = {getAllUsers,addUsers}