//Imports
import mongoose from "mongoose";
//Constants
const imageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "The Name Is Required!"],
    },
    prompt: {
      type: String,
      required: [true, "The Prompt Is Required!"],
    },
    image: {
      type: String,
      required: [true, "The Image Is Required!"],
    },
  },
  { timestamps: true }
);

const imageModel = mongoose.model("Image", imageSchema);

export default imageModel;
