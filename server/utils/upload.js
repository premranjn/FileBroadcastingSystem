import multer from 'multer';

import { userDetails, files } from '../models/sequelize.js';

const upload = multer({ dest: 'uploads' })

async function checkUser(username) {
    try {
        const userInfo = await userDetails.findOne({
            where: {
                username: username
            },
            attributes: ['id']
        });
        if (userInfo === null) {
            return response.status(400).json({message: 'user doesn\'t exist'});
        }

        return userInfo.id;

    } catch (error) {
        console.error(error.message);
        response.status(500).json({error: error.message});
    }
}

export {upload, checkUser};