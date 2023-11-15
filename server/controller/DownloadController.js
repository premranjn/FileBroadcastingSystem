import request from 'superagent';
import { files, permissions } from '../models/sequelize.js';
import { checkUser } from '../utils/upload.js';

async function verifyAndFetchFile(req, res) {
    try {
        // permission - class, username
        //  if(permission)
                // use files to find link using className, pin
                // download link
        console.log(req.body);
        const userId = await checkUser(req.body.studentId);
        const className = req.body.className;
        const passKey = req.body.passkey;
        console.log(userId,className);

        const permitted = await permissions.findOne({
            where: {
                userId: userId,
                className: className 
            },
            attributes: ['id']
        });

        if (permitted === null) {
            return res.status(401).json({message: 'user doesn\'t have permission'});
        }

        const data = await files.findOne({
            where: {
                className: className,
                pin: passKey
            },
            attributes: ['link']
        });
        
        if (data === null) {
            return res.status(401).json({message: 'invalid pin or class'});
        }

        res.set('Content-Type', 'application/octet-stream');
        res.set('Content-Disposition', `attachment; filename=file`);
        request.get(data.link).pipe(res);

        

    } catch (err) {
        console.log(err);
        return res.status(500).json({message: 'something went wrong'});
    }
}

export default verifyAndFetchFile;
