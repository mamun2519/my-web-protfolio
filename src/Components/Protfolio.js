import React, { useEffect, useState } from "react";

import { SiNetlify } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
const Protfolio = () => {
  const [project, setProject] = useState([]);
  const [showAllService, setShowAllService] = useState(false);
  useEffect(() => {
    fetch("project.json")
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);
  return (
    <div id="protfolio" className="max-w-7xl m-auto lg:px-2 px-4 my-20">
      <div className="w-max mx-auto">
        <h1 className="text-[2rem] text-center mt-10 px-6 font-medium">
          Awe<span className="text-primary">so</span>me Port
          <span className="text-primary">folio</span>
        </h1>
        <div className="border-b-2 border-primary"></div>
      </div>
      <div className="mt-16">
        <h1 className="text-xl">Some of my recent work,s project</h1>
        <div className="grid gird-cols-1 lg:grid-cols-3 gap-10 lg:gap-10 mt-5">
          {project.slice(showAllService ? 0 : -3).map((pro, i) => (
            <div
              key={i}
              className={`card ${
                pro.color
                  ? "bg-[#19282F] text-[#EEEEEE]"
                  : " bg-base-100 shadow  border border-l-[5px] border-b-[5px] border-l-[#DA1E37] border-b-[#DA1E37] w-full hover:border-l-[#19282F] hover:border-b-[#19282F]"
              }   border`}
            >
              <figure>
                <img src={pro.img} alt="img" />
              </figure>
              <div className="card-body py-4 ">
               <div>
               <h2 className="card-title py-0 my-0">{pro.name}</h2>
                <p className="mt-1   font-mono">{pro.description}</p>
                <div className="card-actions  py-3">
                  
                  <a
                    href={pro.live}
                    target="_blank"
                    className=" "
                  >
                    <div className=" flex justify-center  items-center gap-1 border rounded-full px-4  bg-gray-600 text-base-100  hover:bg-white hover:text-primary">
                    <span className="pr-1">
                      <SiNetlify />
                    </span>{" "}
                    Live
                    </div>
                   
                  </a>
                  <a
                    href={pro.clinet}
                    target="_blank"
                    className=""
                  >
                    <div className=" flex justify-center  items-center gap-1 border rounded-full px-4 bg-gray-600 text-base-100 hover:bg-white hover:text-primary">
                    <span className="pr-1">
                      <AiFillGithub />
                    </span>
                    Client

                    </div>
                    
                  </a>
                  <a
                    href={pro.server}
                    target="_blank"
                    className=""
                  >
                    <div className=" flex justify-center  items-center gap-1 border rounded-full px-4  bg-gray-600 text-base-100 hover:bg-white hover:text-primary ">

                    <span className="pr-1">
                      <AiFillGithub />
                    </span>
                    Server
                    </div>
                   
                  </a>
                </div>
               </div>

               <div>
                <button className="bg-white text-primary w-full h-10 flex font-medium  justify-center items-center rounded-lg border hover:bg-gray-700 hover:text-white" >Details</button>
               </div>
               
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-end">
          <button onClick={() => setShowAllService(!showAllService)} className="bg-primary px-6 py-3 rounded-xl text-white  font-medium hover:bg-white hover:text-primary hover:border">
            {showAllService ? "Collapse" : " View All Project"}
           
          </button>
        </div>
      </div>
    </div>
  );
};

export default Protfolio;
