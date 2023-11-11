import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Sequelize from 'sequelize';

dotenv.config();

const MongoDBConnection = async () => {
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;

    const MONGO_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-0zhqxzh-shard-00-00.c2nwgfx.mongodb.net:27017,ac-0zhqxzh-shard-00-01.c2nwgfx.mongodb.net:27017,ac-0zhqxzh-shard-00-02.c2nwgfx.mongodb.net:27017/?ssl=true&replicaSet=atlas-yn099z-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('mongo Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the mongo database ', error.message);
    }
}

export default MongoDBConnection;
