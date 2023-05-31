const db = require('../../models/index')

const addGroup = async(req,res)=>{
    
   const result = await db.group.create(req.body)
   

    res.json(result)
}


const joinGroup = async(req,res)=>{
    const result = await db.user_group.create({ user_id: 2, group_id: 3 })
    res.json(result)
}

module.exports = { addGroup, joinGroup }