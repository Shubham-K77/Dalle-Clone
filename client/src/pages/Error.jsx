const Error = () => {
  return (
    <div className="border-[1.5rem] border-green-500 w-[100%] h-[100vh] bg-[#f6f5ed] flex flex-col justify-evenly items-center">
      <div className="flex justify-center items-center w-[90%] lg:w-[50%] h-[60vh] lg:h-[50vh] mb-4">
        <div className="text-[6rem] lg:text-[8rem] font-error text-[#252524]">
          4
        </div>
        <div
          className="w-[60%] lg:w-[40%] h-[40vh] bg-white m-[1rem] rounded-md shadow-md animate-ping"
          style={{
            backgroundImage: `url('Images/chicken.webp')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="text-[6rem] lg:text-[8rem] font-error text-[#252524]">
          4
        </div>
      </div>
      <div className="text-[1.05rem] text-black font-roboto text-center flex justify-center items-center p-[1rem]">
        404 Error: Looks like you found a secret spot... or maybe just a broken
        link.
      </div>
    </div>
  );
};

export default Error;
