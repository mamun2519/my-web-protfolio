
import React from "react";
import TypeAnimation from 'react-type-animation';
const Navber = () => {

  const menu = <>

    <li><a href='#service'>Service</a></li>
    <li><a href='#protfolio'>Protfolio</a></li>
    <li><a href='#testimonail'>Testimonial</a></li>
    <li><a href='#contact'>Contact</a></li>
  </>
  return (
    <div className="bg-[#19282F]">
      <div className="navbar  max-w-7xl m-auto px-2 lg:text-white  font-medium ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
            >
             
             {menu}
                   
             
              
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl text-white">
          <TypeAnimation
        cursor={false}
        sequence={['Juboraj Islam Mamun', 2000, '']}
        wrapper="h2"
        repeat={Infinity}
       />
            </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            
            { menu}
           
          </ul>
        </div>
        <div className="navbar-end">
          <a href='#contact' className="bg-primary px-4 py-2 rounded text-white font-medium">Hire Me</a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
