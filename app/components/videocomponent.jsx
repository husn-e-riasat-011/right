import React from "react";
import Image from "next/image";
import video from "../images/video.png";
const Videocomponent = () => {
  return (
    <section class="text-gray-600 max-w-custom m-auto body-font ">
      <div class="container mx-auto flex px-5 py-24 max-w-customm items-center justify-center flex-col">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className=" flex items-center justify-center">
            <div className="w-24 mb-2 flex items-center justify-center border border-gray-300 rounded-xl py-1 space-x-2">
              {/* <!-- Icon --> */}
              <svg
                width="18"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.2857 1H3.14286M21 16.5833V5.25C21 4.87428 20.8495 4.51394 20.5816 4.24827C20.3137 3.98259 19.9503 3.83333 19.5714 3.83333H2.42857C2.04969 3.83333 1.68633 3.98259 1.41842 4.24827C1.15051 4.51394 1 4.87428 1 5.25V16.5833C1 16.9591 1.15051 17.3194 1.41842 17.5851C1.68633 17.8507 2.04969 18 2.42857 18H19.5714C19.9503 18 20.3137 17.8507 20.5816 17.5851C20.8495 17.3194 21 16.9591 21 16.5833ZM13.8571 13.75C13.0994 13.75 12.3727 13.4515 11.8368 12.9201C11.301 12.3888 11 11.6681 11 10.9167C11 10.1652 11.301 9.44455 11.8368 8.9132C12.3727 8.38184 13.0994 8.08333 13.8571 8.08333C14.6149 8.08333 15.3416 8.38184 15.8774 8.9132C16.4133 9.44455 16.7143 10.1652 16.7143 10.9167C16.7143 11.6681 16.4133 12.3888 15.8774 12.9201C15.3416 13.4515 14.6149 13.75 13.8571 13.75Z"
                  stroke="#535353"
                />
              </svg>

              {/* <!-- Text --> */}
              <span class="text-gray-600 leading-6 tracking-widest">Video</span>
            </div>
          </div>
          <h2 className="text-center font-bold mt-3 text-gray-900 font-sans text-5xl w-[90%] m-auto leading-tight tracking-wide">
            Discover How We Simplify Legal Processes
          </h2>
          <p className="text-center font-sans text-2xl tracking-wide text-[#535353] w-[94%] m-auto font-normal leading-8 mt-6">
            Watch this quick overview to learn how our AI-powered tools
            transform the way you handle legal tasks. From instant legal advice
            to automated document drafting, see how we make complex legal work
            effortless and accessible for everyone.
          </p>
        </div>
        <a
          href="https://infoportfolio.netlify.app/"
          className=" mb-10 object-cover object-center rounded mt-8 cursor-pointer"
        >
          <Image alt="video" src={video} width={900} height={900} />
        </a>
      </div>
    </section>
  );
};

export default Videocomponent;
