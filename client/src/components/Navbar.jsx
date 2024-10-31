import { useNavigate } from "react-router-dom";
import { HiPlus } from "react-icons/hi";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[98%] lg:h-[25vh] rounded-sm h-[28vh] flex justify-around items-center mt-2 border-b-2 mb-[2rem]">
      <div
        className="font-dancing lg:text-[5rem] text-justify flex justify-center items-center font-bold text-[4rem] hover:cursor-pointer transition-transform ease-in-out hover:text-yellow-500 hover:duration-100"
        onClick={() => navigate("/")}
      >
        Imagica
      </div>
      <div className="w-[25%] h-[12vh] lg:w-[9%] lg:h-[10vh] bg-orange-600 text-white font-sans flex text-justify justify-center items-center rounded-md hover:cursor-pointer hover:bg-orange-500 shadow-md">
        <HiPlus
          className="text-[3rem] font-bold"
          onClick={() => {
            navigate("/create");
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
