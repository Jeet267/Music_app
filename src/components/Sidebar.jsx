import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    alert("Home button clicked!");
  };

  const handleSearchClick = () => {
    alert("Search feature is under development!");
  };

  const handleYourLibraryClick = () => {
    alert("Your Library is under development!");
  };

  const handleCreatePlaylistClick = () => {
    alert("Create Playlist functionality is coming soon!");
  };

  const handleBrowsePodcastsClick = () => {
    alert("Browse Podcasts functionality is coming soon!");
  };

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div
          onClick={handleHomeClick}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img className="w-6" src={assets.home_icon} alt="Home Icon" />
          <p className="font-bold">Home</p>
        </div>
        <div
          onClick={handleSearchClick}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img className="w-6" src={assets.search_icon} alt="Search Icon" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded">
        <div
          onClick={handleYourLibraryClick}
          className="p-4 flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="Stack Icon" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.plus_icon} alt="Plus Icon" />
            <img className="w-5" src={assets.arrow_icon} alt="Arrow Icon" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Create Your first playlist</h1>
          <p className="font-light">It's easy, we will help you!</p>
          <button
            onClick={handleCreatePlaylistClick}
            className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4"
          >
            Create Playlist
          </button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
          <h1>Let's find some podcasts to follow</h1>
          <p className="font-light">We'll keep you updated on new episodes</p>
          <button
            onClick={handleBrowsePodcastsClick}
            className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4"
          >
            Browse Podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
