import React from "react";
import { MdCloudDone } from 'react-icons/md';
import { ImHappy } from 'react-icons/im';
import { GiCoffeeCup } from 'react-icons/gi';
import { AiFillTrophy} from 'react-icons/ai';
import CountUp from 'react-countup';
const SatisfiedClient = () => {
  return (
    <div className="max-w-7xl m-auto lg:px-2 px-4 my-20">
      <div className="w-max mx-auto">
        <h1 className="text-[2rem] text-center mt-10 px-6 font-medium">
          Satisfied <span className="text-primary">Clients</span>
        </h1>

        <div className="border-b-2 border-primary"></div>
      </div>
      <div className="mt-2">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 bg-[#19282F] border-gray-200 px-4 py-6 rounded-lg">
                <span className=" text-5xl flex justify-center text-primary mb-1">
                  <ImHappy className="text-center" />
                  </span>
                 
                  <h2 className="title-font font-medium text-3xl text-white">
                  <CountUp duration={8} end={78}></CountUp>
                  </h2>
                  <p className="leading-relaxed text-white">Happy Clients</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <span className=" text-5xl flex justify-center text-primary mb-1">
                  <MdCloudDone className="text-center" />
                  </span>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    <CountUp duration={8} end={85}></CountUp>
                   
                  </h2>
                  <p className="leading-relaxed">Project Completed</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 bg-[#19282F] border-gray-200 px-4 py-6 rounded-lg">
                <span className=" text-5xl  flex justify-center text-primary mb-1">
                  <GiCoffeeCup className="text-center" />
                  </span>
                  <h2 className="title-font text-white font-medium text-3xl ">
                  <CountUp duration={8} end={53}></CountUp>
                  </h2>
                  <p className="leading-relaxed text-white">Cup of Coffee</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2  border-gray-200 px-4 py-6 rounded-lg">
                <span className=" text-5xl flex justify-center text-primary mb-1">
                  <AiFillTrophy className="text-center" />
                  </span>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                  <CountUp duration={8} end={37}></CountUp>
                  </h2>
                  <p className="leading-relaxed">Award</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SatisfiedClient;
