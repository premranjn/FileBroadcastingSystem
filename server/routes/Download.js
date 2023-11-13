import express from 'express';

import verifyAndFetchFile from '../controller/DownloadController.js';

const downloadRouter = express.Router();

downloadRouter.post('/', verifyAndFetchFile);

export default downloadRouter;
