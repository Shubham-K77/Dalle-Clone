//Imports
import express from "express";
import imageRouter from "../modules/images/image.api.js";
//Constants
const router = express.Router();
//Routing
router.use("/api/v1/images/", imageRouter);
//Export
export default router;
