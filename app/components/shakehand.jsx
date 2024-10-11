import React from "react";
import Image from "next/image";
import handshake from "../images/handshaking.png";
const Shakehand = () => {
  return (
    <section class="text-gray-600 body-font w-full mx-auto my-48">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 py-0 sm:py-12 sm:gap-6 max-w-customm m-auto ">
        {/* Text Section */}
        <div className="lg:w-[60%] md:w-[50%] sm:[80%]">
          <div className="w-32 mb-4 flex items-center justify-center border border-gray-300 rounded-xl py-1 space-x-2">
            {/* Icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1 7.7H9.9V5.5H12.1M12.1 16.5H9.9V9.9H12.1M11 0C9.55546 0 8.12506 0.284523 6.79048 0.837325C5.4559 1.39013 4.24327 2.20038 3.22183 3.22183C1.15893 5.28473 0 8.08262 0 11C0 13.9174 1.15893 16.7153 3.22183 18.7782C4.24327 19.7996 5.4559 20.6099 6.79048 21.1627C8.12506 21.7155 9.55546 22 11 22C13.9174 22 16.7153 20.8411 18.7782 18.7782C20.8411 16.7153 22 13.9174 22 11C22 9.55546 21.7155 8.12506 21.1627 6.79048C20.6099 5.4559 19.7996 4.24327 18.7782 3.22183C17.7567 2.20038 16.5441 1.39013 15.2095 0.837325C13.8749 0.284523 12.4445 0 11 0Z"
                fill="#535353"
              />
            </svg>

            {/* Text */}
            <span className="text-gray-600 leading-6 tracking-widest">
              About Us
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight tracking-wide my-4 lg:my-6">
            At UndrRight, we are revolutionizing the legal industry
          </h1>

          <p className="mb-6 text-lg sm:text-xl lg:text-2xl font-normal leading-7 sm:leading-8 lg:leading-9 tracking-wide">
            Merging cutting-edge AI technology with expert legal knowledge. Our
            mission is to make high-quality legal services accessible to
            everyone, regardless of their location, financial situation, or
            complexity of their legal needs.
          </p>
          <button className="bg-[#FAF8F8] text-[#535353] border border-[#C7C7C8] px-5 py-3 rounded-2xl hover:bg-[#2f2f31] transition duration-300 text-xl font-medium leading-6 tracking-wide hover:text-[#FAF8F8] font-sans ">
            Learn More
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-[40%] md:w-[50%] sm:[80%] mt-20 md:mt-0">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src={handshake}
            width={700}
            height={700}
          />
        </div>
      </div>
    </section>
  );
};

export default Shakehand;
