import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
const Skill = () => {
  return (
    <div className="max-w-7xl m-auto lg:px-2 px-4 my-40">
      <div className="w-max mx-auto">
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
      </div>
    </div>
  );
};

export default Skill;
