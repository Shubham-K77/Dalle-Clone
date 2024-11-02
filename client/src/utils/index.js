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

const download_Image = (_id, image) => {
  fileSaver.saveAs(image, `download-${_id}.jpeg`);
};

//Exports
export default getRandomPrompt;
export { download_Image };
