import express from 'express';

import { verifyAndFetchFile, addFileRecord } from '../controller/DownloadController.js';

const downloadRouter = express.Router();

downloadRouter.post('/verify', verifyAndFetchFile);
downloadRouter.post('/update', addFileRecord);

export default downloadRouter;
