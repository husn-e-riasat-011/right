import React from "react";

const PricingCards = () => {
  return (
    <section
      class="text-gray-600 body-font overflow-hidden max-w-custom mx-auto rounded-2xl mb-48 "
      style={{
        background:
          "radial-gradient(100% 100% at 52.08% 100%, #363636 0%, #141414 43.58%, #050505 100%)",
      }}
    >
      <div class="py-28 mx-auto max-w-customm">
        <div class="flex justify-between items-center monthly mb-20 w-[90%] m-auto">
          <div>
            <div class="w-28 mb-2 border border-[#5E5E5E] flex items-center justify-center bg-[#2F2F31] rounded-xl py-1 space-x-2">
              {/* <!-- Icon --> */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 22 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9C1 5.229 1 3.343 2.172 2.172C3.344 1.001 5.229 1 9 1H13C16.771 1 18.657 1 19.828 2.172C20.999 3.344 21 5.229 21 9C21 12.771 21 14.657 19.828 15.828C18.656 16.999 16.771 17 13 17H9C5.229 17 3.343 17 2.172 15.828C1.001 14.656 1 12.771 1 9Z"
                  stroke="white"
                  stroke-width="1.5"
                />
                <path
                  d="M9 13H5M13 13H11.5M1 7H21"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>

              {/* <!-- Text --> */}
              <span class="text-[#FFFFFF] leading-6 tracking-widest font-normal">
                Pricing
              </span>
            </div>
            <h1
              class="sm:text-4xl text-4xl font-semibold title-font mb-2 text-opacity-80 leading-tight tracking-wide
text-[#FFFFFF] font-sans"
            >
              Simple and Flexible Pricing
            </h1>
            <p class="text-xl  w-[70%] font-normal leading-7 text-[#FFFFFF] text-opacity-80 sm:leading-8 lg:leading-9 tracking-wider">
              Choose the plan that fits your legal needs and budget. Get started
              with flexible options designed for individuals, professionals, and
              businesses.
            </p>
          </div>
          <div class="flex border-2 rounded border-[#6B6B6D] w-[420px] h-16 bg-[#2F2F31] group">
            <button class="py-1 px-4 bg-white text-gray-500 w-1/2 rounded-lg font-sans text-2xl font-medium leading-7 focus:outline-none group-focus-within:bg-[#2F2F31] group-focus-within:text-white">
              Monthly
            </button>
            <button class="py-1 px-4 bg-[#2F2F31] text-white w-1/2 font-sans text-2xl font-medium leading-7 focus:outline-none group-focus-within:bg-white group-focus-within:rounded group-focus-within:text-gray-500">
              Annually
            </button>
          </div>
        </div>

        {/* pricing Cards */}
        <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 rounded-lg xl:p-8 dark:bg-gray-800 dark:text-white">
            <div class="h-full p-6 rounded-lg border-2 border-[#5E5E5E] flex flex-col relative overflow-hidden text-[#A3A1A1] bg-[#2F2F31]">
              <h2 class=" tracking-widest title-font font-medium text-left text-xl mb-4">
                Basic Plan
              </h2>
              <h1 class="text-5xl text-gray-900 leading-none flex items-center mb-4">
                <span className="text-white">$29</span>
                <span class="text-lg ml-1 font-normal text-[#A3A1A1]">
                  per month
                </span>
              </h1>
              <p className="border-b border-dashed border-gray-200 pb-6 mb-6 text-left">
                Individuals needing occasional legal help.
              </p>
              <p class="flex items-center  text-left  mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                3 AI consultations per month
              </p>
              <p class="flex items-center text-left mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Document review (up to 5 pages)
              </p>
              <p class="flex items-center  text-left mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Basic legal research
              </p>
              <button class="flex items-center mt-20 text-center justify-center text-white bg-[#1F1F20] border-0 py-2 px-4 w-full focus:outline-none hover:bg-[#181818]  rounded-md font-sans text-xl font-normal leading-6 tracking-wide">
                Get Started
              </button>
            </div>
          </div>
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 rounded-lg border bg-[#EDEDED] border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <div class="h-full p-6 rounded-lg  flex flex-col relative overflow-hidden text-[#686767]">
              <h2 class="tracking-widest title-font mb-4 font-medium text-black text-left text-xl">
                Professional Plan
              </h2>
              <h1 class="text-5xl text-gray-900 leading-none flex items-center mb-4">
                <span className="text-Black">$49</span>
                <span class="text-lg ml-1 font-normal text-[#686767]">
                  per month
                </span>
              </h1>
              <p className="border-b border-dashed border-black pb-6 mb-6 text-left">
                Small businesses & professionals.
              </p>
              <p class="flex items-center  text-left  mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-black border border-black rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                10 AI consultations per month
              </p>
              <p class="flex items-center text-left mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-black border border-black rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Document drafting and review (up to 20 pages)
              </p>
              <p class="flex items-center  text-left mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-black border border-black rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Advanced legal research
              </p>
              <button class="flex items-center mt-20 text-center justify-center text-white bg-[#1F1F20] border-0 py-2 px-4 w-full focus:outline-none hover:bg-[#181818]  rounded-md font-sans text-xl font-normal leading-6 tracking-wide">
                Get Started
              </button>
            </div>
          </div>
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 rounded-lg xl:p-8 dark:bg-gray-800 dark:text-white">
            <div class="h-full p-6 rounded-lg border-2 border-[#5E5E5E] flex flex-col relative overflow-hidden text-[#A3A1A1] bg-[#2F2F31]">
              <h2 class="tracking-widest title-font mb-4 font-medium text-left text-xl">
                Business Paln
              </h2>
              <h1 class="text-5xl text-gray-900 leading-none flex items-center mb-4">
                <span className="text-white">$99</span>
                <span class="text-lg ml-1 font-normal text-[#A3A1A1]">
                  per month
                </span>
              </h1>
              <p className="border-b border-dashed border-gray-200 pb-6 mb-6 text-left">
                Businesses needing regular legal support.
              </p>
              <p class="flex items-center  text-left  mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Unlimited AI consultations
              </p>
              <p class="flex items-center text-left mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Document drafting and review <br /> (unlimited pages)
              </p>
              <p class="flex items-center  text-left mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Full legal research and analysis
              </p>
              <button class="flex items-center mt-20 text-center justify-center text-white bg-[#1F1F20] border-0 py-2 px-4 w-full focus:outline-none hover:bg-[#181818]  rounded-md font-sans text-xl font-normal leading-6 tracking-wide">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
