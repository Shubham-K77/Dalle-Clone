//Imports
import express from "express";
import cloudinary from "../../config/cloudinaryConfig.js";
import imageModel from "./image.model.js";
//Constants
const imageRouter = express.Router();
//API ROUTING
//1. GET THE POST FROM DATABASE
imageRouter.get("/", async (req, res, next) => {
  try {
    const data = await imageModel.find().sort({ createdAt: -1 }).limit(6);
    if (data.length === 0 || data === "" || data === null) {
      return res.status(200).send({ message: "No Data In The DataBase!" });
    }
    if (!data) {
      res.status(500); //Internal Error
      const error = new Error("Internal Error!");
      next(error);
    }
    res.status(200).send({ data });
  } catch (error) {
    res.status(500);
    error.message = "Internal Server Error!";
    next(error);
  }
});

//2. CREATE THE POST IN THE DATABASE
imageRouter.post("/create", async (req, res, next) => {
  try {
    const { name, prompt, photo } = req.body;
    if (!name || !prompt || !photo) {
      res.status(400); //Bad Request
      const error = new Error("The Fields Are Compulsory!");
      return next(error);
    }
    const imageUrl = await cloudinary.uploader.upload(photo);
    const data = await imageModel.create({ name, prompt, image: imageUrl.url });
    if (!data) {
      res.status(500);
      const error = new Error("Internal Server Error! Failed To Create!");
      return next(error);
    }
    res.status(200).send({
      message: "Successfully Created!",
      data,
    });
  } catch (error) {
    res.status(500); //Internal Error
    error.message = "Internal Server Error!";
    next(error);
  }
});
//Export
export default imageRouter;
