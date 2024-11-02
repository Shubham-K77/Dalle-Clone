import { FaDownload } from "react-icons/fa6";
import { download_Image } from "../utils";
// eslint-disable-next-line react/prop-types
const Card = ({ _id, name, prompt, image }) => {
  // eslint-disable-next-line react/prop-types
  let letter = name.charAt(0);
  return (
    <div
      className="w-[90%] lg:w-[28%] h-[70vh] lg:h-[70vh] shadow-lg bg-slate-500 m-[2rem] rounded-lg flex justify-start items-end group"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="group-hover:flex flex-col justify-evenly items-start h-[16vh] bg-slate-900 w-full rounded-bl-md rounded-br-md shadow-md opacity-70 hidden">
        <div className="w-full flex justify-around items-center">
          <div className="w-full flex justify-start items-center">
            <div
              className="flex justify-center items-center w-[8.75vw] lg:w-[12.25%] h-[5.75vh] lg:h-[6.05vh] bg-green-500 rounded-[50%] font-sans text-[1.75rem] lg:text-[2rem] text-white mt-[0.5rem] mb-[0.15rem] ml-[0.75rem] mr-[0.5rem] hover:bg-green-800 hover:cursor-pointer"
              title={name}
            >
              {letter}
            </div>
            <div className="text-[0.85rem] font-sans font-bold text-white mt-[0.5rem]">
              {name}
            </div>
          </div>
          <div
            className="flex justify-center items-center text-white text-[1.5rem] mt-2 mr-4"
            onClick={() => {
              download_Image(_id, image);
            }}
          >
            <FaDownload className="hover:text-gray-400 hover:cursor-pointer" />
          </div>
        </div>
        <div className="w-full flex justify-evenly items-center text-[0.75rem] font-sans text-white p-2 h-[10vh] font-bold mr-2 text-center">
          <div>{prompt}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
