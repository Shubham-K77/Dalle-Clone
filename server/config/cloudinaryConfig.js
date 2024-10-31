//Imports
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
//Constants
dotenv.config();
//Configuration
cloudinary.config({
  cloud_name: process.env.cloudinaryCloudName,
  api_key: process.env.cloudinaryApiKey,
  api_secret: process.env.cloudinaryApiSecret,
});
//Export
export default cloudinary;
