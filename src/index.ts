import {connectMongoDb} from "./config/mongo";
import {Book} from "./models/bookModel";
import express from "express";
import  createResponseToClient  from "./utils/createResToClient";
import BookInterface from "./interfaces/Book";
process.loadEnvFile()


const app = express();
const PORT = process.env.PORT || 20000;


app.listen(PORT, () => {
    console.log("Server on port 20000");
    connectMongoDb();
});
