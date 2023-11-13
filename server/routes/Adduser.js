import express from 'express';

import checkAndAddUser from '../controller/AddUserController.js';

const adduserRouter = express.Router();

adduserRouter.post('/', checkAndAddUser);

export default adduserRouter;
