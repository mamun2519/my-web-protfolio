
import React from "react";


const Banner = () => {
  return (
    <div className="max-w-7xl m-auto px-2">
      <section className="text-gray-600 body-font ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
         
              className="object-cover object-center rounded"
              alt="hero"
              src="/Asstes/Icon/banner2.gif"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-[2rem]  font-medium text-gray-900">
              Hello,
            </h1>

            <h1 className="lg:text-[48px] text-[25px] mb-3 font-medium text-gray-900">
              I am Web Developer
            </h1>
            <p className="mb-6 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-primary border-0 py-2 px-8 focus:outline-none rounded text-lg font-medium">
                Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
