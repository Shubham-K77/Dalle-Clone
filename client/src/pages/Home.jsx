/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Navbar from "../components/Navbar";
import FormField from "../components/FormField";
import Loader from "../components/Loader";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { useSnackbar } from "notistack";
import axios from "axios";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState(null);
  const [search, setSearch] = useState("");
  const [searchPost, setSearchPost] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState();
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await axios(
          "https://imagica-api.vercel.app/api/v1/images/"
        );
        if (!response) {
          return enqueueSnackbar("Failed To Get Posts!", { variant: "error" });
        }
        const data = response.data.data;
        if (data.length === 0) {
          return enqueueSnackbar("No Posts Found!", { variant: "error" });
        }
        setPosts(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        enqueueSnackbar("Internal Server Error! Unable To Fetch!", {
          variant: "error",
        });
        console.error(error);
      }
    };
    fetchPosts();
  }, [enqueueSnackbar]);
  const RenderCards = ({ data, title }) => {
    if (data?.length > 0) {
      return data.map((post) => <Card key={post._id} {...post} />);
    }
    return (
      <h2 className="m-[2rem] flex justify-start items-center font-sans text-[1rem] text-gray-500 text-justify uppercase">
        {title}
      </h2>
    );
  };
  //Search Bar Change
  const handleSearchChange = (event) => {
    clearTimeout(searchTimeout);
    setSearch(event.target.value);
    setSearchTimeout(
      setTimeout(() => {
        const searchResults = posts.filter(
          (item) =>
            item.prompt.toLowerCase().includes(search.toLowerCase()) ||
            item.name.toLowerCase().includes(search.toLowerCase())
        );
        setSearchPost(searchResults);
      }, 500)
    );
  };

  return (
    <div className="w-full flex flex-col justify-evenly items-center overflow-x-hidden">
      <Navbar />
      <div className="w-full flex flex-col justify-evenly items-start text-justify p-[1.25rem]">
        <div className="w-[100%] h-[200vh] lg:h-[120vh] bg-slate-900 mb-[2rem] rounded-md flex flex-col justify-start lg:items-start items-center p-2 shadow-xl">
          <div className="w-full text-[1.55rem] lg:text-[2rem] flex justify-start items-center font-sans text-white m-[0.85rem] font-bold lg:text-justify text-left p-[1rem]">
            Imagica: Where Imagination Meets Reality!
          </div>
          <div className="w-[95%] lg:w-[50%] lg:h-[10vh] h-[10vh] bg-white mt-[2rem] lg:ml-[4rem] rounded-md flex lg:justify-around justify-start items-center">
            <div className="lg:w-[25%] bg-white flex justify-center items-center hover:cursor-pointer lg:p-0 p-2">
              <IoSearch className="text-[2rem] text-gray-500" />
            </div>
            <div className="lg:w-[50%] text-[1rem] lg:text-[1.25rem] text-gray-500 font-sans text-left lg:text-justify">
              Planets Colliding Together
            </div>
            <div className="h-[7.5vh] w-[21vw] lg:w-[18vw] bg-green-600 shadow-sm p-2 rounded-md ml-2 text-[1rem] lg:text-[1.05rem] font-bold font-sans flex justify-center items-center text-white hover:bg-green-500 hover:cursor-pointer lg:mr-2 mr-0">
              Generate
            </div>
          </div>
          <div className="m-[2.5rem] w-[98%] lg:w-[95%] h-[155vh] lg:h-[85vh] flex flex-col justify-evenly items-center lg:flex-row lg:justify-evenly lg:items-center rounded-md shadow-lg">
            <div
              className="w-[90%] lg:w-[35%] rounded-md lg:h-[65vh] shadow-md h-[60vh]"
              style={{
                backgroundImage: `url('Images/banner.jpg')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="w-[90%] lg:w-[55%] lg:h-[65vh] h-[60vh] flex flex-col justify-evenly items-center text-justify">
              <div className="font-dancing text-[3.5rem] font-bold text-white mb-2 hover:text-yellow-500 hover:cursor-pointer">
                Imagica
              </div>
              <div className="font-roboto text-[0.95rem] lg:text-[1.05rem] text-white mb-2 p-2">
                Imagica is an innovative project that brings imagination to life
                by leveraging the power of Hugging Face's AI models to convert
                text into stunning visual imagery. With a simple input of
                descriptive text, Imagica transforms words into vibrant,
                creative images, blending the magic of imagination with
                cutting-edge artificial intelligence. This fusion of technology
                and creativity offers users an interactive and intuitive way to
                visualize their ideas, making Imagica the perfect platform for
                artists, designers, and storytellers to bring their visions to
                reality with just a few words.
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-[1.25rem] font-bold font-sans mb-2">
          The Community Showcase
        </h1>
        <p className="text-[0.95rem] text-gray-500 text-justify">
          Browse through a collection of imaginative and visually stunning
          images generated by Stable Diffusion AI.
        </p>
      </div>
      <div className="w-[80%] mr-[4.5rem] lg:mr-0 lg:w-full flex flex-col justify-evenly items-start ml-[3.5rem] lg:ml-[6.5rem]">
        <FormField
          labelName="Search posts"
          type="text"
          name="text"
          placeholder="Search posts"
          value={search}
          handleChange={handleSearchChange}
        />
      </div>
      <div className="mb-[1rem] w-full flex flex-col justify-evenly items-start">
        {loading === true ? (
          <Loader />
        ) : (
          <>
            {search && (
              <h2 className="font-medium text-[1rem] m-[2rem] text-gray-500 font-sans text-justify">
                Showing Results For {search}
              </h2>
            )}
          </>
        )}
      </div>
      <div className="w-[95%] lg:w-[98%] m-[1rem] flex flex-col justify-evenly items-center lg:flex-row lg:flex-wrap lg:justify-evenly lg:items-center rounded-md">
        {search ? (
          <RenderCards data={searchPost} title="No Search Results Found!" />
        ) : (
          <RenderCards data={posts} title="No Posts Found!" />
        )}
      </div>
    </div>
  );
};

export default Home;
