import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
const AboutMe = () => {
  return (
    <div className="max-w-7xl m-auto lg:px-2 px-4 my-10">
      <div className="w-max mx-auto">
        <h1 className="text-[2rem] text-center mt-10 px-6 font-medium">
          <span className="text-primary">About</span> Me
        </h1>
        <div className="border-b-2 border-primary"></div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 lg:my-10 ">
      <div className=" w-full border py-10 shadow bg-base-100  border-l-[5px] border-b-[5px] border-l-[#DA1E37] border-b-[#DA1E37] rounded-lg">
        <div className="flex  justify-center ">
          {/* <div className="lg:max-w-lg  lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded  "
              alt="hero"
              src="/Asstes/picture/1677351797726.jpg"
            />
          </div> */}
           <div >

         
          <div className=" h-64 w-64 border-4 border-green-400  rounded-full">
            <img
              className="object-cover object-center rounded-full  "
              alt="hero"
              src="/Asstes/picture/1677351797726.jpg"
            />

           
          </div>
         
          
          </div>
        </div>
        <div className="mt-2 ">
          <h1 className="text-3xl font-medium text-center">Juboraj Islam Mamun</h1>
          <h3 className="text-[1.17rem] font-sans text-center">Chittagong, Bangladesh</h3>
          <p className="text-[1.17rem] font-sans text-center">Student At National University, Bangladesh </p>
          </div>
          <div className="flex justify-center gap-5 mt-3">
            <a
              href="https://www.facebook.com/MERNwebDeveloper.Mamun"
              target="_blank"
              className="text-2xl text-blue-700 border-green-600  border-2  p-3 rounded-full"
            >
              <BsFacebook />
            </a>
            <span className="text-2xl  text-blue-300 border-green-600  border-2 p-3 rounded-full">
              <AiFillTwitterCircle />
            </span>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="text-2xl  text-blue-600 p-3 border-green-600  border-2 rounded-full"
            >
              <FiInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/mamun-islam-316461241/"
              target="_blank"
              className="text-2xl border-green-600  border-2  text-blue-900 p-3 rounded-full"
            >
              <GrLinkedinOption />
            </a>
          </div>

        </div>
        
        <div className="">
          {/* <h1 className="lg:text-[2rem] text-[1.5rem] font-medium">My Name Is Juboraj Islam Mamun</h1>
          <h3 className="text-[1.17rem] font-sans">From Chittagong, Bangladesh</h3> */}
          <p className="mt-5 text-xl    font-serif ">
          I'm a MERN stack developer with experience building full-stack online apps with MongoDB, Express, React, and Node.js. With experience, I can create apps that are both client and server-side reliable, scalable, and responsive. I can use React to create beautiful and engaging user interfaces with the most popular state management system Redux, and Node.js and Express, Mongoose to create effective and dependable back-end APIs. Because of my skill set, I can create seamless end-to-end solutions for a variety of web development tasks. I've built cutting-edge web applications using the MERN stack, such as dynamic e-commerce platforms, Manufacture company website.
          </p>

          <p className="mt-5 text-xl font-serif ">
            {" "}
            Fast learner, hard worker and team player who is proficient in an
            array of scripting languages and multimedia Web tools.
          </p>

          {/* <div className="flex gap-5 mt-5">
            <a
              href="https://www.facebook.com/MERNwebDeveloper.Mamun"
              target="_blank"
              className="text-2xl border text-blue-700 border-primary p-3 rounded-full"
            >
              <BsFacebook />
            </a>
            <span className="text-2xl border text-blue-300 border-primary p-3 rounded-full">
              <AiFillTwitterCircle />
            </span>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="text-2xl border text-red-600 p-3 border-primary  rounded-full"
            >
              <FiInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/mamun-islam-316461241/"
              target="_blank"
              className="text-2xl border border-primary text-blue-900 p-3 rounded-full"
            >
              <GrLinkedinOption />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
