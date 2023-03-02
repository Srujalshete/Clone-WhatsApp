import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-hatkzq4-shard-00-00.hkekjcv.mongodb.net:27017,ac-hatkzq4-shard-00-01.hkekjcv.mongodb.net:27017,ac-hatkzq4-shard-00-02.hkekjcv.mongodb.net:27017/?ssl=true&replicaSet=atlas-12u5zm-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useUnifiedTopology: true });
        console.log("Database connected sucessfully");
    }catch(error){
       console.log("error while connecting with db", error.message);
    }
}

export default Connection;