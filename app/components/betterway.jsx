import React from "react";

const Betterway = () => {
  return (
    <div
      className=" text-white w-full m-auto rounded-xl my-20 py-20"
      style={{
        background:
          "radial-gradient(100% 100% at 52.08% 100%, #363636 0%, #141414 43.58%, #050505 100%)",
      }}
    >
      <div className="mx-auto max-w-customm py-10 lg:px-8 sm:px-0 px-6 ">
        <h2 className="sm:text-center text-left font-bold font-sans md:text-5xl text-4xl xl:w-[45%] lg:w-[56%] md:w-[67%] sm:w-[75%] m-auto leading-tight tracking-wide">
          A Better Way to Work Today, Together
        </h2>
        <p className=" sm:text-center  text-left md:text-xl text-lg tracking-wide mt-4 xl:w-[57%] lg:w-[65%] md:w-[75%] sm:w-[85%] m-auto font-normal font-sans leading-8">
          Transform your legal process with our AI-powered platform. Work
          smarter and more efficiently as you collaborate with cutting-edge
          technology. Join us today and take the next step toward a more
          connected legal experience.
        </p>
        <div className="flex sm:justify-center justify-left items-center mt-10">
          <button className="border border-[#5E5E5E] rounded-xl bg-[#FFFFFF] px-3 py-2 text-[#000000] font-sans text-lg font-medium leading-6 tracking-widest cursor-pointer ">
            Get Started
          </button>
          <button className="border border-[#5E5E5E] rounded-xl bg-[#1B1B1C] px-3 py-2 text-[#FFFFFF] font-sans text-lg font-normal leading-6 tracking-widest ml-2  ">
            How It Works
          </button>
        </div>
      </div>
    </div>
  );
};

export default Betterway;
