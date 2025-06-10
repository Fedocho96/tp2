import { Router } from "express";
import {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/bookControllers";

const bookRouter = Router();

// GET ALL BOOKS
bookRouter.get("/", getAllBooks);

// GET BOOK BY ID
bookRouter.get("/:id", getBookById);

// CREATE NEW BOOK
bookRouter.post("/", createBook);

// UPDATE BOOK
bookRouter.patch("/:id", updateBook);

// DELETE BOOK
bookRouter.delete("/:id", deleteBook);

export default bookRouter;
