import express, { Application } from "express";
import { Request, Response } from "express";
import bookRouter from "./routes/book-routes";

// creates the express application

const app: Application = express();

const PORT: number | undefined = Number(process.env.PORT) || 3000;

app.use("/books", bookRouter);

// Creating a book
// Read all books from datastore
// Read a book
// Update a book
// Delete a book

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});
