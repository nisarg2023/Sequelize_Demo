const { Op } = require('sequelize');
const db = require('../../models/index');

const getComments = async (req, res) => {
    if (req.query.user_id && req.query.post_id) {

        const results = await db.comments.findAll(
            {
                where: {
                    [Op.and]: [
                        { user_id: req.query.user_id },
                        { post_id: req.query.post_id }
                    ]
                }
            });
        res.send(results)
        return;
    }
    if (req.query.user_id) {
        const results = await db.comments.findAll({ where: { user_id: req.query.user_id } });
        res.send(results)
        return;
    }
    if (req.query.post_id) {
        const results = await db.comments.findAll({ where: { post_id: req.query.post_id } });
        res.send(results)
        return;
    }
   

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

const deleteComments = async (req, res) => {
    const result = await db.comments.destroy({ where: { id: req.params.id } });
    res.json(result)
}

module.exports = { getComments, addComments, deleteComments }