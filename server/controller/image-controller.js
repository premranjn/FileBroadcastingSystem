import File from '../models/file.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import axios from 'axios'
dotenv.config();

export const uploadImage = async (request, response) => {
    const fileObj = {
        path: request.file.path,
        name: request.file.originalname,
    }
    
    try {
        const file = await File.create(fileObj); //saves to db
        console.log(request.body.password[0]);
        const postData = {
            owner: request.body.number, // replace with the actual owner number
            link: `http://192.168.177.23:${process.env.PORT}/file/${file._id}`, // replace with the correct file link
            pin: request.body.password, // replace with the actual pin number
            country: request.body.country
        };
    
        // Make a POST request to the "/download/update" route
        const updateResponse = await axios.post('http://192.168.177.125:5600/download/update', postData);
    
        response.status(200).json({ path: `http://localhost:${process.env.PORT}/file/${file._id}`});
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: error.message });
    }
}

export const getImage = async (request, response) => {
    try {   
        const file = await File.findById(request.params.fileId);
        
        file.downloadCount++;

        await file.save();

        response.download(file.path, "abc.mp4");
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ msg: error.message });
    }
}