import { permissions } from '../models/sequelize.js';
import { checkUser } from '../utils/upload.js';

async function checkAndAddUser(req, res) {
    try {
        const user = checkUser(req.body.userName);
        if (user === null) {
            return res.status(401).json({message: 'user doesn\'t exist'});
        }

        const permitted = await permissions.findOne({
            where: {
                className: req.body.className,
                userId: user
            },
            attributes: ['id']
        });

        if (permitted !== null) {
            return res.status(400).json({message: 'already exists'});
        }

        const newPerm = {
            className: req.body.className,
            userId: user
        };
        await permissions.create(newPerm);

        return res.status(200).json({message: 'added'});
    } catch (err) {
        console.log(err);
        return res.status(500).json({error: err});
    }
}

export default checkAndAddUser;
