import { Sequelize } from "sequelize";

export default class Database {
  private sequelize: Sequelize;
  constructor() {
    this.sequelize = new Sequelize({
      dialect: "mysql",
      host: "localhost",
      username: "root",
      password: "Nelson2000@@@",
      database: "books"
    });
  }

  getSequelizeConnection(): Sequelize {
    return this.sequelize;
  }
}
