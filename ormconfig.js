require("dotenv").config();

module.exports = {
  type: "postgres",
  host: "localhost",
  port: +process.env.BD_PORT || 5432,
  username: process.env.BD_USERNAME,
  password: process.env.BD_PASSWORD,
  database: process.env.BD_DATABASE,
  synchronize: false,
  migrations: ["src/database/migrations/*.ts"],
  entities: ["src/entities/*.ts"],
  cli: {
    migrationsDir: "./src/database/migrations",
  },
};