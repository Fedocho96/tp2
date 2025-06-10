import { Router } from "express";
import { getAllBooks, getBookById, createBook, updateBook, deleteBook } from "../controllers/bookControllers";

const gameRouter = Router();

// GET ALL BOOKS
gameRouter.get("/api/books", getAllBooks )

// GET BOOK BY ID
gameRouter.get("/api/books/:id", getBookById)

// CREATE NEW BOOK
gameRouter.post("/api/books", createBook)

// UPDATE BOOK
gameRouter.patch("/api/books/:id", updateBook)

// DELETE BOOK
gameRouter.delete("/api/books/:id", deleteBook)

export default gameRouter;
