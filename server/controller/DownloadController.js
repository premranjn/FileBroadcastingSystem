import request from 'superagent';
import { files, permissions } from '../models/sequelize.js';
import { checkUser } from '../utils/upload.js';

async function verifyAndFetchFile(req, res) {
    try {
        const ownerId = checkUser(req.body.owner);
        const userId = checkUser(req.body.user);

        const permitted = await permissions.findOne({
            where: {
                owner: ownerId,
                user: userId
            },
            attributes: ['id']
        });

        if (permitted === null) {
            return res.status(401).json({message: 'user doesn\'t have permission'});
        }

        const data = await files.findOne({
            where: {
                owner: ownerId,
                pin: req.body.pin
            },
            attributes: ['link']
        });
        
        if (data === null) {
            return res.status(401).json({message: 'invalid pin or link'});
        }

        res.set('attachment; filename=file');

        return request(data.link).pipe(res);

    } catch (err) {
        console.log(err);
        return res.status(500).json({message: 'something went wrong'});
    }
}

async function addFileRecord(req, res) {
    try {
        const ownerId = await checkUser(req.body.owner);
        const newFile = {
            owner: ownerId,
            link: req.body.link,
            pin: req.body.pin
        };
        await files.create(newFile);

        return res.status(200).json({message: "file recorded"});
    } catch(err) {
        console.log(err);
        return res.status(500).json({message: 'something went wrong'});
    }
}

export {verifyAndFetchFile, addFileRecord};
