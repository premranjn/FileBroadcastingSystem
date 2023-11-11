import { permissions } from '../models/sequelize.js';

async function checkAndAddUser(req, res) {
    try {
        const permitted = await permissions.findOne({
            where: {
                owner: req.body.owner,
                user: req.body.user
            },
            attributes: ['id']
        })

        if (permitted !== null) {
            return res.status(400).json({message: 'already exists'});
        }

        const newPerm = {
            owner: req.body.owner,
            user: req.body.user
        }
        await permissions.create(newPerm);

        return res.status(200).json({message: "added"});
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: err});
    }
}

export default checkAndAddUser;
