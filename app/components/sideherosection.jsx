import React from "react";
import Image from "next/image";
import logo from "../images/logo.png";
import Image11 from "../images/image11.png";

const Sideherosection = () => {
  return (
    <div className="p-12 lg:w-1/2 flex flex-col items-start ">
      {" "}
      {/* Use className */}
      <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse ">
        {" "}
        {/* Use className */}
        <Image
          src={logo}
          width={180}
          height={150}
          alt="Picture of the author"
        />
      </a>
      <p className="leading-relaxed my-5 text-[#535353] tracking-wider text-xl font-normal">
        {" "}
        {/* Use className */}
        We offer AI-powered legal services that are efficient, accessible, and
        reliable. Simplify your legal processes with our innovative solutions
        and expert support.
      </p>
      <h2 className="sm:text-3xl text-3xl  font-semibold text-gray-900 mt-4 mb-4">
        If you don&#39;t have an account <br /> you can{" "}
        {/* Escaped the single quote */}
        <span className="text-blue-600">Register here!</span>
      </h2>
      <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        {" "}
        {/* Use className */}
        <Image
          src={Image11}
          width={600}
          height={500}
          alt="Picture of the author"
        />
      </a>
    </div>
  );
};

export default Sideherosection;
