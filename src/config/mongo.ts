import {connect} from "mongoose";
process.loadEnvFile()

const URI_DB = process.env.URI_DB || ""

const connectMongoDb = async () => {
    try {
        await connect(URI_DB);    
        console.log("MongoDB connected");
    } catch (error) {
        console.log("error al conectar a la base de datos");
    }
};

export  {connectMongoDb};