/* eslint-disable react/prop-types */
const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <>
      <div className="flex flex-row items-center lg:m-[1rem] text-justify m-[1.25rem]">
        <label
          htmlFor={name}
          className="mr-[2rem] font-sans font-bold text-[1.02rem] text-black"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="w-[32vw] h-[9.75vh] lg:w-[12vw] lg:h-[9.25vh] text-center text-white bg-orange-600 rounded-md shadow-md font-bold hover:bg-orange-500"
          >
            Surprise Me
          </button>
        )}
      </div>
      <div className="w-full flex justify-start items-center m-[0.5rem]">
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          title={labelName}
          required
          className="w-[85vw] h-[9vh] lg:w-[90vw] lg:h-[8.25vh] p-[1rem] font-sans lg:text-[1rem] rounded-md text-black hover:ring-2 hover:ring-green-500 lg:m-0 mb-[1rem] outline-none border-2 border-gray-200 hover:border-0"
        />
      </div>
    </>
  );
};

export default FormField;
