import cors from "cors";
import "dotenv/config";
import "reflect-metadata";
import express from "express";
import "./database";
import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(process.env.PORT || 4000, () =>
  console.log(`Server is running ${process.env.PORT || 4000}`)
);