import React, { useEffect, useState } from "react";
import { AiFillStar } from 'react-icons/ai';
import { FaStarHalfAlt } from 'react-icons/fa';
const Service = () => {
  const [servies, setService] = useState([]);
  const [showAllService, setShowAllService] = useState(false);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [showAllService]);
  return (
    <div id="service" className="max-w-7xl m-auto lg:px-2 px-4 my-">
      <div className="w-max mx-auto">
        <h1 className="text-[2rem] text-center mt-10 px-6 font-medium">
          My Serv<span className="text-primary">ices</span>
        </h1>

        <div className="border-b-2 border-primary"></div>
      </div>

      <div className="mt-16">
        <p className="text-xl">Service Provide For My Clients.</p>

        <div className="grid gird-cols-1 lg:grid-cols-3 gap-7 lg:gap-10 mt-5">
          {/* service start  */}
          {servies.slice(showAllService ? 0 : 4).map((service, i) => (
            <div
              key={i}
              className={`card ${
                service.color
                  ? "bg-[#CCF2F4]"
                  : "bg-base-10 bg-base-100 shadow-md border border-l-[5px] border-b-[5px] border-l-[#DA1E37] border-b-[#DA1E37]  hover:border-l-gray-700 hover:border-b-gray-700"
              }     border  h-[460px]`}
            >
              <figure className="px-6 pt-4 p-0">
                <img
                  src={service.img}
                  alt="Shoes"
                  className="rounded-xl p-0 h-56 w-full"
                />
              </figure>
              <div className="card-body   h-16 ">
                <h2 className="text-[18px] font-medium   text-gray-700">
                  {service.name}
                </h2>
                <h5 className="text-gray-900 font-medium">
                  STARTING AT ${service.price}
                </h5>
                <div className=" flex gap-1">
                  <span className="text-xl text-orange-400
                  "> <AiFillStar/> </span>
                  <span className="text-xl text-orange-400
                  "> <AiFillStar/> </span>
                  <span className="text-xl text-orange-400
                  "> <AiFillStar/> </span>
                  <span className="text-xl text-orange-400
                  "> <AiFillStar/> </span>
                  <span className="text-xl text-orange-400
                  "> <FaStarHalfAlt/> </span>
                </div>
               
                {/* <p className=" text-[14px] font-bold"><span className="pr-2 text-red-500 font-medium">*</span>{service.service}</p> */}
                {/* <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div> */}
              </div>
              <div className="px-6 py-4 mt-7">
                <a
                  href={service?.fiverLink}
                  target="_blank"
                  className="bg-white text-primary h-10 flex font-medium  justify-center items-center rounded-lg border hover:bg-gray-700 hover:text-white"
                >
                  Contact Seller with fiveer
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className={`mt-8 text-end`}>
          <button
            onClick={() => setShowAllService(!showAllService)}
            className="bg-primary px-6 py-3 rounded-xl text-white  font-medium hover:bg-white hover:text-primary hover:border"
          >
            {showAllService ? " Collapse" : "View All Sevice"}
          </button>
        </div>
      </div>
    </div>

);
};

export default Service;
