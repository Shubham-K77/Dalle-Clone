import { FaSpinner } from "react-icons/fa";
const Loader = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <FaSpinner className="text-[5rem] animate-spin" />
    </div>
  );
};

export default Loader;
