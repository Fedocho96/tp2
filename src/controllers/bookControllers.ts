import { Request, Response } from "express";
import { Book } from "../models/bookModel";
import createResponseToClient from "../utils/createResToClient";

const getAllBooks = async (req:Request, res:Response) => {
  try {
    const books = await Book.find({});
    res.json(createResponseToClient(true, 200, "All books retrieved", books));
  } catch (error: any) {
    res.status(500).json(createResponseToClient(false, 500, error.message));
  }
};

export { getAllBooks };