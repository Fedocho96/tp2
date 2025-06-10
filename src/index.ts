import {connectMongoDb} from "./config/mongo";
import express from "express";

process.loadEnvFile()


const app = express();
const PORT = process.env.PORT || 20000;


app.listen(PORT, () => {
    console.log("Server on port 20000");
    connectMongoDb();
});
