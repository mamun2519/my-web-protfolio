import React from 'react';
import AboutMe from './AboutMe';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import Navber from './Navber';
import Protfolio from './Protfolio';
import SatisfiedClient from './SatisfiedClient';
import Service from './Service';
import Skill from './Skill';
import Testimonial from './Testimonial';

const Homes = () => {
      return (
            <div className=''>
                  
                  <Navber/>
                  <Banner/>
                  <AboutMe/>
                  <Skill/>
                  <Service/>
                  <Protfolio/>
                  <Testimonial/>
                  <SatisfiedClient/>
                  <Contact/>
                  <Footer/>
                  
            </div>
      );
};

export default Homes;