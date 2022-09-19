import express, { Router, Request, Response } from "express";
import BookController from "../controller/book-controller";

const bookRouter: Router = express.Router();

bookRouter.get("/", async (request: Request, response: Response) => {
  const bookList = await BookController.getAllBooksFromServices();
  console.log(bookList);
  response.send(bookList);
});

export default bookRouter;
