import express from 'express';

import verifyAndFetchFile from '../controller/DownloadController.js';

const downloadRouter = express.Router();

downloadRouter.post('/verify', verifyAndFetchFile);

export default downloadRouter;
