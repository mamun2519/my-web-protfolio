import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { BsTools} from 'react-icons/bs';
import { MdGppGood} from 'react-icons/md';
import { GiFinishLine} from 'react-icons/gi';
const Skill = () => {
  return (
    <div className="max-w-7xl m-auto lg:px-2  my-40">
      {/* <div className="w-max mx-auto">
        <h1 className="text-[2rem] text-center mt-10 px-6 font-medium">My <span className="text-primary">Skills</span></h1>
        <div className="border-b-2 border-primary"></div>
      </div>

      <div className="flex gap-8 lg:gap-40 mt-20">
        <div className=" flex-1">
          <div className="mt-6">
            <span className=" text-sm">HTML</span>
            <ProgressBar
              className="mt-2"
              labelSize="12px"
              height="11px"
             bgColor='#DA1E37'
              borderRadius="10px"
              labelAlignment="right"
              transitionTimingFunction="ease-in, ease-out,"
              completed={90}
            />
          </div>
          <div className="mt-6">
            <span className=" text-sm">CSS</span>
            <ProgressBar
              height="11px"
              maxCompleted={100}
              labelSize="12px"
              className="mt-2"
              bgColor='#DA1E37'
              borderRadius="10px"
              labelAlignment="right"
              transitionTimingFunction="ease-in, ease-out,"
              completed={95}
            />
          </div>
          <div className="mt-6">
            <span className="text-sm">Bootstrap</span>
            <ProgressBar
              height="11px"
              className="mt-2"
              labelSize="12px"
             bgColor='#DA1E37'
              borderRadius="10px"
              labelAlignment="right"
              transitionTimingFunction="ease-in, ease-out,"
              completed={90}
            />
          </div>
          <div className="mt-6">
            <span className="text-sm">taliwind</span>
            <ProgressBar
              height="11px"
              className="mt-2"
              labelSize="12px"
             bgColor='#DA1E37'
              borderRadius="10px"
              labelAlignment="right"
              transitionTimingFunction="ease-in, ease-out,"
              completed={95}
            />
          </div>
          <div className="mt-6">
            <span className="text-sm">JavaScript</span>
            <ProgressBar
              height="11px"
              className="mt-2"
              labelSize="12px"
             bgColor='#DA1E37'
              borderRadius="10px"
              labelAlignment="right"
              transitionTimingFunction="ease-in, ease-out,"
              completed={85}
            />
          </div>
          <div className="mt-6">
            <span className="text-sm">React Js</span>
            <ProgressBar
              height="11px"
              labelSize="12px"
              className="mt-2"
             bgColor='#DA1E37'
              borderRadius="10px"
              labelAlignment="right"
              transitionTimingFunction="ease-in, ease-out,"
              completed={90}
            />
          </div>
        </div>

        <div className=" flex-1">
          <div className="mt-6">
            <span className="mb-4 text-sm">Google Firebase</span>

            <ProgressBar
              height="11px"
              labelSize="12px"
              className="mt-2"
             bgColor='#DA1E37'
              borderRadius="10px"
              labelAlignment="right"
              transitionTimingFunction="ease-in, ease-out,"
              completed={88}
            />
          </div>
          <div className="mt-6">
            <span className="text-sm">Node js</span>
            <ProgressBar
              height="11px"
              labelSize="12px"
              className="mt-2"
             bgColor='#DA1E37'
              borderRadius="10px"
              labelAlignment="right"
              transitionTimingFunction="ease-in, ease-out,"
              completed={70}
            />
          </div>
          <div className="mt-6">
            <span className="mb-4">Express js</span>
            <ProgressBar
              height="11px"
              labelSize="12px"
             bgColor='#DA1E37'
              className="mt-2"
              borderRadius="10px"
              labelAlignment="right"
              transitionTimingFunction="ease-in, ease-out,"
              completed={82}
            />
          </div>
          <div className="mt-6">
            <span className="mb-4">Mongodb</span>
            <ProgressBar
              height="11px"
              labelSize="12px"
              className="mt-2"
             bgColor='#DA1E37'
              borderRadius="10px"
              labelAlignment="right"
              transitionTimingFunction="ease-in, ease-out,"
              completed={88}
            />
          </div>
          <div className="mt-6">
            <span className="mb-4">Stripe js</span>
            <ProgressBar
              height="11px"
              labelSize="12px"
             bgColor='#DA1E37'
              className="mt-2"
              borderRadius="10px"
              labelAlignment="right"
              transitionTimingFunction="ease-in, ease-out,"
              completed={75}
            />
          </div>
          <div className="mt-6">
            <span className="mb-4">Stripe js</span>
            <ProgressBar
              height="11px"
              labelSize="12px"
              className="mt-2"
             bgColor='#DA1E37'
              borderRadius="10px"
              labelAlignment="right"
              transitionTimingFunction="ease-in, ease-out,"
              completed={80}
            />
          </div>
        </div>
      </div> */}
        <div className="w-max mx-auto">
        <h1 className="text-[2rem] text-center mt-10 px-6 font-medium">My <span className="text-primary">Skills</span></h1>
        <div className="border-b-2 border-primary"></div>
      </div>
<section class="text-gray-600 body-font">

  <div class="container px-5 py-24 mx-auto ">
    <div class="flex w-full">
      <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-primary  pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div class=" pl-4">
            <h2 class="font-medium title-font text-xl text-gray-900 mb-1  mt-1 tracking-wider">Experts</h2>
            <p class="leading-relaxed">Html5, CSS3, Bootstrap, Tailwind, Javascript, Javascript(Es6), React, API integration, Firebase(Authentication).</p>
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-primary pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex items-center justify-center text-white relative z-10">
            <MdGppGood/>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-xl text-gray-900 mb-1 tracking-wider mt-1">Comfortable</h2>
            <p class="leading-relaxed">Node.js, Express.js, React Redux , Json web Token, MongoDB, Mongoose , React query, React hook from.</p>
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-primary pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-xl text-gray-900 mb-1 tracking-wider mt-1">Familiar</h2>
            <p class="leading-relaxed">Typescript, Next js  , Axios, Socket io, React native,</p>
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-primary pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex items-center justify-center text-white relative z-10">
            <BsTools/>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-xl text-gray-900 mb-1 tracking-wider mt-1">Tools</h2>
            <p class="leading-relaxed">Github, Heroku, Netlify, Visual studio code, Chrome dev tools, Postman.</p>
          </div>
        </div>
        <div class="flex relative">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-xl text-gray-900 mb-1 tracking-wider mt-1">FINISH</h2>
            <p class="leading-relaxed">Pitchfork ugh tattooed scenester echo park gastropub whatever cold-pressed retro.</p>
          </div>
        </div>
      </div>
      <img class="lg:w-3/5 lg:block  hidden object-cover object-center rounded-lg md:mt-0 mt-12" src="/Asstes/Icon/skill2.gif" alt="step"/>
    </div>
  </div>
</section>
    </div>
  );
};

export default Skill;
