import BookService from "../service/book-service";

export default class BookController {
  constructor() {}

  static async getAllBooksFromServices() {
    return await BookService.getAllBooks();
  }
}
