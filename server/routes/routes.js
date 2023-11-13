import express from 'express';
import { upload } from '../utils/upload.js';
import { uploadImage, getImage } from '../controller/UploadController.js';
import downloadRouter from '../routes/Download.js';
import adduserRouter from '../routes/Adduser.js'

const router = express.Router();

router.post('/upload', upload.single('file'), uploadImage);
router.get('/file/:fileId', getImage);
router.use('/download', downloadRouter);
router.use('/manage', adduserRouter);

export default router;
