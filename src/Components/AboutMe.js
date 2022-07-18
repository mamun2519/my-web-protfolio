import React from "react";
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import { GrLinkedinOption } from 'react-icons/gr';
const AboutMe = () => {
  return (
    <div className="max-w-7xl m-auto lg:px-2 px-4 my-20">
      <div className="w-max mx-auto">
      <h1 className="text-[2rem] text-center mt-10 px-6 font-medium"><span className="text-primary">About</span> Me</h1>
      <div className="border-b-2 border-primary"></div>

      </div>
     

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-0 lg:my-20 my-5">
        <div className="">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded h-[321px] w-full"
              alt="hero"
              src="/Asstes/Icon/aboutme2.gif"
            />
          </div>
        </div>
        <div>
          <h1 className="lg:text-[2rem] text-[1.5rem] font-medium">My Name Is Juboraj Islam Mamun</h1>
          <h3 className="text-[1.17rem] font-sans">From Chittagong, Bangladesh</h3>
          <p className="mt-5 font-sans">
          I am Junior Web developer able to build a Web presence from the ground up - from concept, navigation, layout and programming to UX and SEO. Skilled at writing well-designed, testable and efficient code using current best practices in Web development.
          </p>

          <p className="mt-5 font-sans"> Fast learner, hard worker and team player who is proficient in an array of scripting languages and multimedia Web tools.</p>

         

          <div className="flex gap-5 mt-5">
            <a href="https://www.facebook.com/MERNwebDeveloper.Mamun" target='_blank' className="text-2xl border text-blue-700 border-primary p-3 rounded-full"><BsFacebook/></a>
            <span className="text-2xl border text-blue-300 border-primary p-3 rounded-full"><AiFillTwitterCircle/></span>
            <a href="https://www.instagram.com/" target='_blank' className="text-2xl border text-red-600 p-3 border-primary  rounded-full"><FiInstagram/></a>
            <a href="https://www.linkedin.com/in/mamun-islam-316461241/" target='_blank' className="text-2xl border border-primary text-blue-900 p-3 rounded-full"><GrLinkedinOption/></a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
