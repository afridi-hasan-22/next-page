import React from "react";
import Lottie from "lottie-react";
import enjoy from "../assets/42367-joy-in-education.json";
import { Link } from "react-router-dom";
import { render } from "react-dom";

const Home = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 flex flex-col justify-between lg:flex-row items-center">
      {/* Text Items */}
      <div className="mb-10 lg:max-w-lg lg:pr-4 lg:mb-0">
        <div>
          <p className="badge">On Sale!</p>
        </div>
        <div className="mt-3">
        <p className="text-4xl font-bold">
          A reader lives a thousand lives <span className="text-blue-500"> before he dies</span>
        </p>
        </div>
        <div className="mt-3">
            <p className="text-xl text-gray-500">Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren’t very new after all. The man who does not read good books is no better than the man who can’t.</p>
        </div>
        <div className="inline-flex mx-auto items-center mt-5">
            <Link to='/books' className="px-9 py-4 rounded bg-blue-400 text-white hover:bg-blue-500 font-bold duration-200 transition-colors ">
            View Store
            </Link>
            <Link to='/about' className="ml-5 text-xl transition-colors duration-200 hover:text-blue-700">
            Learn More
            </Link>
        </div>
      </div>

      {/* Lottie Animation */}
        <div className="relative lg:max-w-1/2">
            <div>
               <Lottie animationData={enjoy} loop={true}></Lottie>
            </div>
        </div>

    </div>
  );
};

export default Home;
