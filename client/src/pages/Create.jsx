import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import getRandomPrompt from "../utils/index.js";
import FormField from "../components/FormField";
import Loader from "../components/Loader";
import { useSnackbar } from "notistack";
import axios from "axios";
import * as blobUtil from "blob-util";

const Create = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photoUrl: "",
    photo: "",
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!form.prompt || !form.photo || !form.name) {
      setLoading(false);
      return enqueueSnackbar("All Fields Are Compulsory!", {
        variant: "warning",
      });
    }
    try {
      const response = await axios.post(
        "https://imagica-api.vercel.app/api/v1/images/create/",
        { name: form.name, prompt: form.prompt, photo: form.photo }
      );
      if (!response) {
        setLoading(false);
        return enqueueSnackbar("Image Upload Failed!", { variant: "error" });
      }
      enqueueSnackbar("Image Successfully Created!", { variant: "success" });
      setLoading(false);
      setForm({
        name: "",
        prompt: "",
        photoUrl: "",
        photo: "",
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      enqueueSnackbar("Internal Server Error!", { variant: "error" });
      console.error(error);
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({
      ...form,
      prompt: randomPrompt,
    });
  };

  const generateImage = async () => {
    if (!form.prompt) {
      return enqueueSnackbar("Please Enter The Prompt!", { variant: "info" });
    }
    try {
      setGeneratingImg(true);
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-3.5-large",
        {
          inputs: form.prompt,
        },
        {
          headers: {
            Authorization: `Bearer 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`,
          },
          responseType: "blob",
        }
      );
      // Convert The Blob Response To base-64 URL
      const imageString = await blobUtil.blobToBase64String(response.data);
      const mimeType = "image/jpeg";
      const image = `data:${mimeType};base64,${imageString}`;
      const imageUrl = URL.createObjectURL(response.data);
      setForm({
        ...form,
        photo: image,
        photoUrl: imageUrl,
      });
      enqueueSnackbar("Image Generated Successfully!", { variant: "success" });
    } catch (error) {
      enqueueSnackbar("Image Generation Failed!", { variant: "error" });
      console.error(error);
    } finally {
      setGeneratingImg(false);
    }
  };

  return (
    <div className="w-full flex flex-col justify-evenly items-center overflow-x-hidden">
      <Navbar />
      <div className="w-full flex flex-col justify-evenly items-start text-justify p-[1.25rem] pl-[1.75rem] lg:pl-[2.5rem]">
        <h1 className="text-[1.25rem] font-bold font-sans mb-2">
          Sculpting the Boundaries of Creativity
        </h1>
        <p className="text-[0.95rem] text-gray-500 text-justify">
          Create imaginative and visually stunning images through Hugging Face
          AI and share them with the community.
        </p>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[97%] lg:w-[98%] flex flex-col justify-start items-start lg:h-[180vh] h-[168vh] rounded-md mb-[2rem]">
          <form onSubmit={handleSubmit}>
            <div className="w-full lg:m-[2rem] m-[1rem]">
              <FormField
                labelName="Your Name"
                type="text"
                name="name"
                placeholder="John Doe"
                value={form.name}
                handleChange={handleChange}
              />
            </div>
            <div className="w-full lg:m-[2rem] m-[1rem]">
              <FormField
                labelName="Prompt"
                type="text"
                name="prompt"
                placeholder="a steampunk elephant with gears and goggles walking through a park"
                value={form.prompt}
                handleChange={handleChange}
                isSurpriseMe
                handleSurpriseMe={handleSurpriseMe}
              />
            </div>
            <div className="w-full p-[1.25rem] flex flex-col justify-evenly items-start">
              <div
                className="border-2 border-gray-300 lg:w-[40vw] w-[98%] h-[65vh] lg:h-[80vh] lg:ml-[1rem] flex justify-center items-center"
                style={
                  !generatingImg
                    ? {
                        backgroundImage: `url(${
                          form.photoUrl ? form.photoUrl : "/Images/default.webp"
                        })`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }
                    : {}
                }
              >
                {generatingImg && <Loader />}
              </div>
              <div className="w-full flex justify-start items-center m-[1rem] mt-[1.5rem]">
                <button
                  type="button"
                  className={`bg-green-700 rounded-md w-[78vw] lg:w-[40vw] h-[9vh] text-[1.25rem] shadow-md hover:bg-green-500 text-white ${
                    generatingImg ? "animate-pulse" : ""
                  }`}
                  onClick={generateImage}
                  disabled={generatingImg}
                >
                  {generatingImg ? "Generating..." : "Generate"}
                </button>
              </div>
            </div>
            <div className="w-full flex flex-col justify-evenly items-start font-sans text-[1rem] text-justify">
              <div className="text-gray-500 lg:p-[2rem] p-[1rem]">
                Once you have created the image you want, you can share it with
                others in the community
              </div>
              <button
                type="submit"
                className={`text-white bg-orange-600 rounded-md hover:bg-orange-500 ml-[2rem] lg:h-[9vh] lg:w-[40vw] h-[9.5vh] w-[80vw] text-center text-[1.15rem] flex justify-center items-center shadow-md hover:cursor-pointer font-sans ${
                  loading === true ? "animate-pulse" : ""
                }`}
              >
                Share with the community
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
