import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import router from './routes/routes.js';
import MongoDBConnection from './utils/db.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router);

const PORT = process.env.PORT || 8000;

await MongoDBConnection();

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
