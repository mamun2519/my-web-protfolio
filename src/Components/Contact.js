import React from "react";
import { ImLocation } from 'react-icons/im';
import { BsTelephoneInbound } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { BsCalendarDateFill } from 'react-icons/bs';
const Contact = () => {
  return (
    <div id="contact" className="max-w-7xl m-auto lg:px-2 px-6 my-20">
      <div className="w-max mx-auto">
        <h1 className="text-[2rem] text-center mt-10 px-6 font-medium">
          Cont<span className="text-primary">act</span>
        </h1>

        <div className="border-b-2 border-primary"></div>
      </div>
      <div className=" grid lg:grid-cols-2 grid-cols-1 mt-16">
           
        <div className="lg:flex block items-center">
            <div>
                  <p className="text-xl">If you have any questions, please feel free to contact me</p>
                  <div className="flex flex-wrap  gap-8 justify-between pt-7">
           
           <div className="border-2 bg-[#19282F] w-full lg:w-[290px] h-[145px] border-gray-200 px-4 py-6 rounded-lg">
                 <div className="text-center text-white">
                 <span className="flex justify-center text-4xl mb-2 text-primary"><ImLocation></ImLocation></span>
                 <p className=" font-medium text-xl">Chittagon, Bangladesh</p>
                 <p>Location</p>
                 </div>

           </div>
           <div className="border-2  w-full lg:w-[290px] h-[145px] border-gray-200 px-4 py-6 rounded-lg">
           <div className="text-center">
                 <span className="flex justify-center text-4xl mb-2 text-primary"><BsTelephoneInbound/></span>
                 <p className=" font-medium text-xl">+880 1860-700702</p>
                 <p>Number</p>
                 </div>

           </div>
         </div>


         <div className="flex flex-wrap  gap-8 justify-between pt-7">
           <div className="border-2 w-full lg:w-[290px] h-[145px] border-gray-200 px-4 py-6 rounded-lg">
                 <div className="text-center">
                 <span className="flex justify-center text-4xl mb-2 text-primary"><HiOutlineMail></HiOutlineMail></span>
                 <p className=" font-medium text-xl">juborajvai22@gmail.com</p>
                 <p>Email</p>
                 </div>

           </div>
           <div className="border-2 bg-[#19282F] w-full lg:w-[290px] h-[145px] border-gray-200 px-4 py-6 rounded-lg">
           <div className="text-center text-white">
                 <span className="flex justify-center text-4xl mb-2 text-primary"><BsCalendarDateFill/></span>
                 <p className=" font-medium text-xl">24/7</p>
                 <p>Support</p>
                 </div>

           </div>
         </div>
            </div>
         
         














        </div>
        <div className="lg:w-4/5 md:w-1/2 bg-base-100 border rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg  title-font mb-5">
            Or just write me a letter here
          </h2>
          <div className="relative mb-4">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-white rounded border border-gray-300 focus:border-primary  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border focus:border-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border focus:border-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="text-white bg-primary border-0 py-2 px-8 focus:outline-none  rounded text-lg font-medium">
            Send Message
          </button>
       
        </div>
      </div>
    </div>
  );
};

export default Contact;
