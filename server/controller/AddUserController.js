import { permissions } from '../models/sequelize.js';
import { checkUser } from '../utils/upload.js';

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
        const ownerId = checkUser(newPerm.owner);
        const userId = checkUser(newPerm.user);

        newPerm.owner = ownerId;
        newPerm.user = userId;
        await permissions.create(newPerm);

        return res.status(200).json({message: "added"});
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: err});
    }
}

export default checkAndAddUser;
