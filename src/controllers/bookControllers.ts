import { Request, Response } from "express";
import { Book } from "../models/bookModel";
import bookInterface from "../interfaces/Book";
import createResponseToClient from "../utils/createResToClient";

const getAllBooks = async (req:Request, res:Response) => {
  try {
    const books = await Book.find({});
    res.json(createResponseToClient(true, 200, "All books retrieved", books));
  } catch (error: any) {
    res.status(500).json(createResponseToClient(false, 500, error.message));
  }
};

const getBookById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (!book) {
       res.status(404).json(createResponseToClient(false, 404, "Book not found"));
    }
    res.json(createResponseToClient(true, 200, "Book retrieved", book));
  } catch (error: any) {
    res.status(500).json(createResponseToClient(false, 500, error.message));
  }
};

const createBook = async (req: Request, res: Response) => {
  const { title, author, publishedYear, genre } = req.body as bookInterface;

  if (!title || !author) {
     res
      .status(400)
      .json(createResponseToClient(false, 400, "Title and author are required"));
  }

  try {
    const newBook = new Book({ title, author, publishedYear, genre });
    await newBook.save();
    res.status(201).json(createResponseToClient(true, 201, "Book created", newBook));
  } catch (error: any) {
    res.status(500).json(createResponseToClient(false, 500, error.message));
  }
};

const updateBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updates: Partial<bookInterface> = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedBook) {
       res.status(404).json(createResponseToClient(false, 404, "Book not found"));
    }
    res.json(createResponseToClient(true, 200, "Book updated", updatedBook));
  } catch (error: any) {
    res.status(500).json(createResponseToClient(false, 500, error.message));
  }
};

const deleteBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
       res.status(404).json(createResponseToClient(false, 404, "Book not found"));
    }
    res.json(createResponseToClient(true, 200, "Book deleted", deletedBook));
  } catch (error: any) {
    res.status(500).json(createResponseToClient(false, 500, error.message));
  }
};

export { getAllBooks, getBookById, createBook, updateBook, deleteBook };