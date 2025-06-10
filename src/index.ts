import {connectMongoDb} from "./config/mongo";
import {Book} from "./models/bookModel";
import express from "express";
import  createResponseToClient  from "./utils/createResToClient";
import BookInterface from "./interfaces/Book";
process.loadEnvFile()


const app = express();
const PORT = process.env.PORT || 20000;



app.get("/api/books", async (req, res) => {
    try {
        const books = await Book.find({});
        const resToClient = createResponseToClient(true, 200,"get all books", books);
        res.json(resToClient);
    } catch (error: any) {
        const resToClient = createResponseToClient(false, 500, error.message);
        console.log(resToClient);
    }
})

app.post("/api/books", async (req, res) => {
    try {
        const body = req.body;
        const {title, author, publishedYear, genre} = body;
        if (!title || !author ) {
            const resToClient = createResponseToClient(false, 400,"title and author are required");
             res.json(resToClient);
        }
        const newBook = new Book({title, author, publishedYear, genre}) ;
        await newBook.save();
        const resToClient = createResponseToClient(true, 201,"book created", newBook);
        res.json(resToClient);
        
    } catch (error: any) {
        const resToClient = createResponseToClient(false, 500, error.message);
        res.json(resToClient);
    }
})

app.listen(PORT, () => {
    console.log("Server on port 20000");
    connectMongoDb();
});
