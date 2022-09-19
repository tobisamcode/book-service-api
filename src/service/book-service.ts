import { Sequelize } from "sequelize";

import Database from "../database/database";

export default class BookService {
  private static sequelizeConnection: Sequelize =
    new Database().getSequelizeConnection();

  constructor() {}
  static async getAllBooks() {
    const [bookList, metadata] = await this.sequelizeConnection.query(
      "SELECT * FROM book"
    );
    return bookList;
  }
}
