import React, { useEffect, useState } from "react";

const Service = () => {
  const [servies, setService] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div id="service" className="max-w-7xl m-auto lg:px-2 px-4 my-40">
      <div className="w-max mx-auto">
        <h1 className="text-[2rem] text-center mt-10 px-6 font-medium">My Serv<span className="text-primary">ices</span></h1>

        <div className="border-b-2 border-primary"></div>
      </div>

      <div className="mt-16">
        <p className="text-xl">Service Provide For My Clients.</p>

        <div className="grid gird-cols-1 lg:grid-cols-3 gap-10 lg:gap-20 mt-5">
          {/* service start  */}
          {servies.map((service, i) => ( 
            <div key={i} className={`card ${service.color ?  "bg-[#CCF2F4]": "bg-base-100"}     border`}>
              <figure className="px-10 pt-10">
                <img
                  src={service.img}
                 
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{service.name}</h2>
                <p className=" font-normal">{service.service}</p>
                {/* <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
