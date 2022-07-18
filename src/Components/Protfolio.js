import React, { useEffect, useState } from "react";

import { SiNetlify } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
const Protfolio = () => {
      const [project , setProject] = useState([])
      useEffect(()=>{
            fetch('project.json')
            .then(res => res.json())
            .then(data => setProject(data))
      },[])
  return (
    <div id="protfolio" className="max-w-7xl m-auto lg:px-2 px-4 my-40">
      <div className="w-max mx-auto">
        <h1 className="text-[2rem] text-center mt-10 px-6 font-medium">
          Awe<span className="text-primary">so</span>me Port<span className="text-primary">folio</span>
        </h1>
        <div className="border-b-2 border-primary"></div>
      </div>
      <div className="mt-16">
        <h1 className="text-xl">Some of my recent work,s project</h1>

        <div className="grid gird-cols-1 lg:grid-cols-3 gap-10 lg:gap-20 mt-5">
            {
                  project.map((pro , i) => <div key={i} className="card   bg-base-100 border">
                  <figure>
                    <img  src={pro.img} alt="Shoes" />
                  </figure>
                  <div className="card-body py-4 ">
                    <h2 className="card-title">
                      {pro.name}
                    </h2>
                    <p>{pro.description}</p>
                    <div className="card-actions justify-center py-3">
                      <div className="badge badge-outline border border-primary  py-3"><span className="pr-1"><SiNetlify/></span> Live Link</div>
                      <div className="badge badge-outline border border-primary  py-3">
                        <span className="pr-1"><AiFillGithub/></span>
                        Client Repo</div>
                      <div className="badge badge-outline border border-primary  py-3">
                      <span className="pr-1"><AiFillGithub/></span>
                        Server Repo</div>
                    </div>
                  </div>
                </div>)
            }
          
        </div>

        <div className="mt-8 text-center">
            <button className="bg-primary px-6 py-3 rounded-xl text-white  font-medium">View All Project</button>
        </div>


      </div>
    </div>
  );
};

export default Protfolio;
