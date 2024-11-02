import fileSaver from "file-saver";
import surpriseMe from "../constants";

const getRandomPrompt = (prompt) => {
  const randomIndex = Math.floor(Math.random() * surpriseMe.length);
  const randomPrompt = surpriseMe[randomIndex];
  if (randomPrompt === prompt) {
    return getRandomPrompt(prompt);
  }
  return randomPrompt;
};

const download_Image = async (_id, image) => {
  try {
    const response = await fetch(image, { mode: "cors" });
    if (!response.ok) throw new Error("Failed to fetch image");
    const blob = await response.blob();
    fileSaver.saveAs(blob, `download-${_id}.jpeg`);
  } catch (error) {
    console.error("Error downloading the image:", error);
  }
};

// Exports
export default getRandomPrompt;
export { download_Image };
