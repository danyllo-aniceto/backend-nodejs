import "dotenv/config";
import express from "express";

const app = express();

app.listen(process.env.PORT || 4000, () =>
  console.log(`Server is running ${process.env.PORT || 4000}`)
);