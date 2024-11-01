//Imports
import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import router from "./routes/index.js";
import { notfound, errorHandle } from "./middleware/errorMW.js";
//Constants
dotenv.config();
const port = process.env.PORT || 5555;
const url = process.env.mongoDBUrl;
const app = express();
//Middlewares
app.use(express.json({ limit: "1mb" }));
app.use(
  cors({
    origin: "https://imagica-eight.vercel.app",
  })
);
app.use("/", router);
app.use(notfound);
app.use(errorHandle);
//Main Logic
mongoose
  .connect(url)
  .then(() => {
    console.log("Connected To The Database!");
    app.listen(port, () => {
      console.log(`App Is Running On Port: ${port}`);
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
