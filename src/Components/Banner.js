
import React from "react";
import TypeAnimation from "react-type-animation";


const Banner = () => {
  return (
    <div className="max-w-7xl m-auto px-2">
      <section className="text-gray-600 body-font ">
        <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
         
              className="object-cover object-center rounded"
              alt="hero"
              src="/Asstes/Icon/banner2.gif"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <p className=" text-xl font-medium text-red-500
            ">
              Hi, Iam Mamun
            </p>

            <h1 className="lg:text-[48px] text-[25px] mb-3 font-medium text-gray-900">
              
              <TypeAnimation
        cursor={true}
        sequence={[
          'I am Web Developer',
          2000,
          'I am React Developer',
          2000,
          'I am MERN Stack Developer',
          2000,
        ]}
        wrapper="a"
        repeat={3}
       />
            </h1>
            <p className="mb-6 leading-relaxed">
            I have mid-level experience in developing full-stack dynamic websites. I gather knowledge in various parts of frontend and backend development by myself and with the help of web development online courses. I did some full-stack projects with React JS, Node JS, Express JS, and Mongo DB. My goal is to become an awesome full-stack developer.
            </p>
            <div className="flex justify-center">
              <a href="https://drive.google.com/file/d/1ZFglk-thBweTPFrr7rATPL9_7YWemlVR/view?usp=sharing" target="_blank "className="inline-flex text-white bg-primary border-0 py-2 px-8 focus:outline-none rounded text-lg font-medium">
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
