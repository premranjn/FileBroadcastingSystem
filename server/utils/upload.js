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
            return null;
        }
        return userInfo.id;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

export {upload, checkUser};