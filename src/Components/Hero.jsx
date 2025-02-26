import React from "react";
import HeroPic from "../assets/Hero.png";


const Hero = () => {
  return (
    <>
    <section
      id="hero"
      className="relative w-full h-[85vh] flex items-end justify-center bg-cover bg-center bg-no-repeat mt-[15vh] "
      style={{ backgroundImage: `url(${HeroPic})` }}
    >
      <div className="w-full flex justify-start gap-4 px-6 md:px-14 mb-12">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg">
          Talk An Expert
        </button>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg">
          ▶ See how it works
        </button>
      </div>
    </section>
    </>
  );
};

export default Hero;
