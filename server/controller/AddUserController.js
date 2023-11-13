import { permissions, userDetails } from '../models/sequelize.js';

async function checkAndAddUser(req, res) {
    try {
        const newUser = {
            username: req.body.userId,
            role: 'student'
        };
        const [user, created] = await userDetails.findOrCreate({
            where: newUser,
            defaults: newUser
        });

        const newPerm = {
            className: req.body.className,
            userId: user.id
        };
        const [permission, inserted] = await permissions.findOrCreate({
            where: newPerm,
            defaults: newPerm
        });

        if (inserted === false) {
            return res.status(200).json({message: 'already exists'});
        }

        return res.status(200).json({message: 'added'});
    } catch (err) {
        console.log(err);
        return res.status(500).json({error: err});
    }
}

export default checkAndAddUser;
