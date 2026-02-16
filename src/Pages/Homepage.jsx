import React from "react";
import Navbar from "../Components/Navbar";
import rightball from "../../public/Ellipse 3.png";
import leftball from "../../public/Ellipse 14.png";
import centerball from "../../public/Ellipse 5.png";
import centerTopball from "../../public/Ellipse 13.png";

function Homepage() {
  return (
    <div className="bg-black border-1 h-screen">
      <Navbar />
      {/* HeroPage */}
      <div className="relative  h-180 flex justify-center mt-20">
        <img className="absolute right-25 top-30" src={rightball} alt="" />
        <img className="absolute left-25 top-60" src={leftball} alt="" />
        <img className="absolute  top-[-80px]" src={centerball} alt="" />
        <img className="absolute  top-[-90px]" src={centerTopball} alt="" />
        <div className="w-1/2 h-90 flex flex-col gap-y-4 z-1">
          <h1 className="text-white text-[4rem] text-center leading-19">
            Beautiful Landing Page <br />
            Design for You
          </h1>
          <p className="text-gray-400 text-lg text-center">
            A good design is not only aesthetically pleasing, but also <br />
            functional. It should be able to solve the problem{" "}
          </p>
          <button
            className="py-3 m-auto px-10 text-white rounded-md bg-gradient-to-r from-[#FF7AC6] to-[#7A5CFF]
"
          >
            Download Template
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
