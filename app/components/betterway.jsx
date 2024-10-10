import React from "react";

const Betterway = () => {
  return (
    <div
      className=" text-white max-w-custom m-auto rounded-xl my-20 py-20"
      style={{
        background:
          "radial-gradient(100% 100% at 52.08% 100%, #363636 0%, #141414 43.58%, #050505 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl py-10 lg:px-8">
        <h2 className="text-center font-bold font-sans text-5xl w-[50%] m-auto leading-tight tracking-wide">
          A Better Way to Work Today, Together
        </h2>
        <p className=" text-center text-xl tracking-wide mt-4 w-[65%] m-auto font-normal font-sans leading-8">
          Transform your legal process with our AI-powered platform. Work
          smarter and more efficiently as you collaborate with cutting-edge
          technology. Join us today and take the next step toward a more
          connected legal experience.
        </p>
        <div className="flex justify-center items-center mt-10">
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
