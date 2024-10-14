import Navbar from "@/app/components/navbar";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import person from "../../images/person-using-artechnology.png";
import happygirl from "../../images/happyfemale.png";
import Shakehand from "@/app/components/shakehand";
import icon from "../../images/icon3.png";
import righticon from "../../images/right.png";
import Footer from "@/app/components/footer";
const Page = () => {
  return (
    <div>
      <Navbar />
      <nav className="bg-[#F9F9F9] text-black py-6 px-6 mt-32 max-w-customm m-auto rounded-sm">
        <div className="flex items-center space-x-4">
          <Link href={"/"} className="font-bold">
            Home
          </Link>
          <span className="border-l border-black h-6"></span>{" "}
          {/* Line between links */}
          <span className="text-gray-400">About</span>
        </div>
      </nav>
      <Shakehand />
      {/* person-using-artechnology */}
      <section class="text-gray-600 body-font w-full m-auto">
        <div class="max-w-customm  py-24 mx-auto ">
          <div class="flex lg:flex-nowrap flex-wrap w-full justify-center items-center">
            <div class="lg:w-[600px] mb-10 md:mb-0">
              <Image
                class="object-cover object-center rounded"
                alt="hero"
                src={person}
              />
            </div>
            <div class="lg:w-[800px]  mb-10 md:mb-0 flex flex-col justify-center items-center">
              <div class="flex  mb-12">
                <div class="flex-grow pl-4 pr-3">
                  <h1 class="font-bold leading-10 xl:text-4xl text-3xl tracking-wider text-[#000000] mb-1">
                    Legal services more accessible
                  </h1>
                  <p class="leading-relaxed text-[#535353] tracking-wider xl-text-lg text-lg border-4 border-white border-l-blue-300 rounded-lg pl-3">
                    We are committed to making legal services more accessible,
                    transparent, and efficient. By leveraging AI, we provide
                    users with quick and accurate legal solutions tailored to
                    their unique needs. We believe that everyone deserves access
                    to high-quality legal support, and we are here to make that
                    a reality.
                  </p>
                </div>
              </div>
              <div class="flex  mb-12 ">
                <div class="flex-grow pl-4 pr-3">
                  <h2 class="font-bold leading-10 xl:text-4xl lg:text-3xl text-3xl tracking-wider text-[#000000] mb-1">
                    Transformation of legal industry
                  </h2>
                  <p class="leading-relaxed text-[#535353] tracking-wider xl-text-lg text-lg border-4 border-white border-l-blue-300 rounded-lg pl-3 ">
                    Our vision is to lead the transformation of the legal
                    industry through technology. We aspire to be the go-to
                    platform for legal services, empowering individuals and
                    businesses to make informed decisions with ease. We aim to
                    continuously innovate and expand our services, ensuring that
                    our users always have the best tools at their fingertips.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*how to work */}
      <div
        className="w-full"
        style={{
          background:
            "radial-gradient(100% 100% at 52.08% 100%, #363636 0%, #141414 43.58%, #050505 100%)",
        }}
      >
        <div className=" max-w-custom m-auto mt-10 pb-20 relative ">
          <svg
            width="981"
            height="407"
            viewBox="0 0 981 407"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 right-0 lg:block hidden"
          >
            <path
              d="M979 282.33C959.315 269.696 908.45 249.651 862.467 270.539C816.483 291.426 771.392 320.231 754.594 332.023C706.6 361.774 590.66 441.178 407.356 385.927C224.052 330.675 29.8744 92.4014 1.99998 2"
              stroke="url(#paint0_linear_192_9530)"
              stroke-opacity="0.3"
              stroke-width="3"
              stroke-linecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_192_9530"
                x1="979"
                y1="280.817"
                x2="23.9393"
                y2="89.7743"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#55F4EA" />
                <stop offset="0.18" stop-color="#00E3F6" />
                <stop offset="0.33" stop-color="#00D0FF" />
                <stop offset="0.5" stop-color="#2C83E9" />
                <stop offset="0.655" stop-color="#336BD0" />
                <stop offset="0.84" stop-color="#2D63C4" />
                <stop offset="1" stop-color="#265BB8" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            width="1119"
            height="558"
            viewBox="0 0 1119 558"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-0 bottom-0 xl:block hidden"
          >
            <path
              d="M1117 556C1086.23 509.714 993.585 423.601 869.222 449.435C731.662 480.765 429.535 594.428 239.519 286.358C183.223 195.086 79.6475 -4.91994 1.99997 2.1844"
              stroke="url(#paint0_linear_192_9544)"
              stroke-opacity="0.3"
              stroke-width="3"
              stroke-linecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_192_9544"
                x1="1117"
                y1="359.005"
                x2="-24.2749"
                y2="190.025"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#265BB8" />
                <stop offset="0.166667" stop-color="#2D63C4" />
                <stop offset="0.333333" stop-color="#336BD0" />
                <stop offset="0.5" stop-color="#2C83E9" />
                <stop offset="0.666667" stop-color="#00D0FF" />
                <stop offset="0.833333" stop-color="#00E3F6" />
                <stop offset="1" stop-color="#55F4EA" />
              </linearGradient>
            </defs>
          </svg>

          <div className=" py-10 sm:py-32 max-w-customm m-auto">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div class="flex items-center justify-center my-4 relative z-10">
                <div class="w-44 border border-[#5E5E5E] flex items-center justify-center bg-[#2F2F31] rounded-xl py-2 space-x-2">
                  {/* <!-- Icon --> */}
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.1787 3.68164C22.2972 3.74935 22.3945 3.84668 22.4707 3.97363C22.5469 4.10059 22.585 4.236 22.585 4.37988C22.585 4.44759 22.5765 4.51107 22.5596 4.57031C22.5426 4.62956 22.5215 4.6888 22.4961 4.74805L13.5205 22.7119C13.4443 22.8727 13.3258 22.9912 13.165 23.0674L10.9688 24.1719C10.6979 24.3073 10.4059 24.375 10.0928 24.375H9.97852C9.94466 24.375 9.90234 24.3708 9.85156 24.3623L9.25488 25.5557C9.18717 25.6911 9.08984 25.7969 8.96289 25.873C8.83594 25.9492 8.69206 25.9915 8.53125 26C8.3112 26 8.12077 25.9196 7.95996 25.7588C7.79915 25.598 7.71875 25.4076 7.71875 25.1875C7.71875 25.0859 7.74837 24.959 7.80762 24.8066C7.86686 24.6543 7.93457 24.4977 8.01074 24.3369C8.08691 24.1761 8.17155 24.0195 8.26465 23.8672C8.35775 23.7148 8.42122 23.5964 8.45508 23.5117C8.23503 23.1732 8.125 22.805 8.125 22.4072V20.3125C8.125 20.1771 8.15462 20.0544 8.21387 19.9443L15.5264 5.31934L14.7012 4.91309L11.6924 10.9307C11.6247 11.0661 11.5273 11.1719 11.4004 11.248C11.2734 11.3242 11.1296 11.3665 10.9688 11.375C10.7487 11.375 10.5583 11.2946 10.3975 11.1338C10.2367 10.973 10.1562 10.7826 10.1562 10.5625C10.1562 10.4525 10.1859 10.3298 10.2451 10.1943L13.2793 4.12598C13.4147 3.85514 13.5967 3.64355 13.8252 3.49121C14.0537 3.33887 14.3203 3.25846 14.625 3.25C14.9212 3.25 15.2005 3.32194 15.4629 3.46582C15.7253 3.6097 15.9876 3.74512 16.25 3.87207L17.1514 2.06934C17.2191 1.92546 17.3164 1.81543 17.4434 1.73926C17.5703 1.66309 17.7142 1.625 17.875 1.625C17.985 1.625 18.0781 1.64193 18.1543 1.67578C18.2559 1.47266 18.3532 1.27376 18.4463 1.0791C18.5394 0.88444 18.6494 0.702474 18.7764 0.533203C18.9033 0.363932 19.0557 0.236979 19.2334 0.152344C19.4111 0.0677083 19.6354 0.0169271 19.9062 0C20.1771 0 20.4352 0.0634766 20.6807 0.19043L21.874 0.787109C22.1449 0.922526 22.3564 1.10026 22.5088 1.32031C22.6611 1.54036 22.7415 1.8112 22.75 2.13281C22.75 2.42057 22.6865 2.68717 22.5596 2.93262C22.4326 3.17806 22.3057 3.42773 22.1787 3.68164ZM19.6143 2.39941L20.7188 2.94531L21.0869 2.20898L19.9824 1.66309L19.6143 2.39941ZM20.6807 4.74805L18.2432 3.5293L9.75 20.5029V22.4072C9.75 22.5003 9.78385 22.5807 9.85156 22.6484C9.91927 22.7161 9.99967 22.75 10.0928 22.75C10.1266 22.75 10.1943 22.7288 10.2959 22.6865C10.3975 22.6442 10.5202 22.5892 10.6641 22.5215C10.8079 22.4538 10.9561 22.3818 11.1084 22.3057C11.2607 22.2295 11.4131 22.1491 11.5654 22.0645C11.7178 21.9798 11.8447 21.9121 11.9463 21.8613C12.0479 21.8105 12.1283 21.7682 12.1875 21.7344L20.6807 4.74805ZM22.75 9.75C23.1986 9.75 23.6175 9.83464 24.0068 10.0039C24.3962 10.1732 24.7432 10.4059 25.0479 10.7021C25.3525 10.9984 25.5853 11.3411 25.7461 11.7305C25.9069 12.1198 25.9915 12.543 26 13C26 13.4486 25.9154 13.8675 25.7461 14.2568C25.5768 14.6462 25.3441 14.9932 25.0479 15.2979C24.7516 15.6025 24.4089 15.8353 24.0195 15.9961C23.6302 16.1569 23.207 16.2415 22.75 16.25H19.0938L19.9062 14.625H22.75C22.9785 14.625 23.1901 14.5827 23.3848 14.498C23.5794 14.4134 23.7487 14.2992 23.8926 14.1553C24.0365 14.0114 24.1549 13.8379 24.248 13.6348C24.3411 13.4316 24.3835 13.2201 24.375 13C24.375 12.7715 24.3327 12.5599 24.248 12.3652C24.1634 12.1706 24.0492 12.0013 23.9053 11.8574C23.7614 11.7135 23.5879 11.5951 23.3848 11.502C23.1816 11.4089 22.9701 11.3665 22.75 11.375C22.5299 11.375 22.3395 11.2946 22.1787 11.1338C22.0179 10.973 21.9375 10.7826 21.9375 10.5625C21.9375 10.3424 22.0179 10.152 22.1787 9.99121C22.3395 9.8304 22.5299 9.75 22.75 9.75ZM1.625 20.3125C1.625 20.8711 1.73079 21.3958 1.94238 21.8867C2.15397 22.3776 2.44173 22.8092 2.80566 23.1816C3.1696 23.554 3.60124 23.846 4.10059 24.0576C4.59994 24.2692 5.12891 24.375 5.6875 24.375H6.24609C6.20378 24.502 6.16992 24.6331 6.14453 24.7686C6.11914 24.904 6.10221 25.0436 6.09375 25.1875C6.09375 25.3314 6.10645 25.471 6.13184 25.6064C6.15723 25.7419 6.19531 25.873 6.24609 26H5.6875C4.90039 26 4.16406 25.8519 3.47852 25.5557C2.79297 25.2594 2.19206 24.8532 1.67578 24.3369C1.15951 23.8206 0.753255 23.2197 0.457031 22.5342C0.160807 21.8486 0.00846354 21.1081 0 20.3125C0 19.5254 0.148112 18.7891 0.444336 18.1035C0.74056 17.418 1.14681 16.8171 1.66309 16.3008C2.17936 15.7845 2.78027 15.3783 3.46582 15.082C4.15137 14.7858 4.89193 14.6335 5.6875 14.625H8.53125L7.71875 16.25H5.6875C5.12891 16.25 4.60417 16.3558 4.11328 16.5674C3.6224 16.779 3.19076 17.071 2.81836 17.4434C2.44596 17.8158 2.15397 18.2474 1.94238 18.7383C1.73079 19.2292 1.625 19.7539 1.625 20.3125Z"
                      fill="white"
                    />
                  </svg>

                  {/* <!-- Text --> */}
                  <span class="text-[#FFFFFF] text-lg font-normal leading-6 tracking-widest">
                    How it works
                  </span>
                </div>
              </div>
              <h2 className=" text-white w-[90%] md:w-[80%] text-3xl md:text-5xl font-semibold leading-tight tracking-wide text-center my-6 mx-auto">
                Navigating the legal landscape is simple with our AI-powered
                platform
              </h2>
              <p className=" text-white mt-4 w-[90%] md:w-[84%] m-auto text-xl md:text-2xl font-normal leading-8 tracking-wide text-center">
                Our intuitive system guides you through each step, providing
                clear, actionable insights and solutions, so you can handle your
                legal needs with ease and confidence.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 pb-10">
            {/* first card */}
            <div class="max-w-md bg-[#2F3131] border-1 border-[#B8B8B8] rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center relative">
              <a href="#" className="mt-10">
                <Image src={icon} width={100} height={100} alt="icon" />
              </a>

              <p class="mb-3 font-normal text-[#CECECE] sm:text-center text-left tracking-wider p-5">
                Begin by entering your legal question or issue into our
                user-friendly platform. Whether you need advice on a contract,
                guidance on a legal matter, or help with compliance, simply type
                in your request and let our AI take it from there.
              </p>
              <Image
                src={righticon}
                width={40}
                height={40}
                alt="icon"
                className="absolute top-32 -right-5 hide"
              />
            </div>
            {/* second one */}
            <div class="max-w-md bg-[#2F3131] border-1 border-[#B8B8B8] rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center relative">
              <a href="#" className="mt-10">
                <Image src={icon} width={100} height={100} alt="icon" />
              </a>

              <p class="mb-3 font-normal text-[#CECECE] sm:text-center text-left tracking-wider p-5">
                Our advanced AI quickly processes your input, leveraging a vast
                database of legal knowledge and precedents. Within moments,
                you’ll receive a personalized response or document tailored to
                your needs, complete with actionable advice.
              </p>
              <Image
                src={righticon}
                width={40}
                height={40}
                alt="icon"
                className="absolute top-32 -right-5 hide"
              />
            </div>
            {/* third one */}
            <div class="max-w-md bg-[#2F3131] border-1 border-[#B8B8B8] rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center relative">
              <a href="#" className="mt-10">
                <Image src={icon} width={100} height={100} alt="icon" />
              </a>

              <p class="mb-3 font-normal text-[#CECECE] sm:text-center text-left tracking-wider p-5">
                Make any necessary adjustments and apply the advice or document
                to your legal situation. If you have any additional questions or
                need further assistance, our AI remains available and for on
                going supported.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* four card section */}
      <div class="flex flex-wrap justify-center gap-6 px-10 py-48 max-w-customm m-auto">
        {/* <!-- Card 1 --> */}
        <div class="bg-white py-6 px-1  flex flex-col w-full sm:w-80">
          {/* <!-- Button with Man Icon and Click Text --> */}
          <button class="flex items-center py-2 rounded border border-[#535353] hover:bg-[#535353] hover:text-white transition duration-300 w-28 px-4 text-[#535353] mb-2">
            {/* <!-- Man Icon (Using Heroicons SVG) --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 12c2.28 0 4.12-1.84 4.12-4.12S14.28 3.76 12 3.76s-4.12 1.84-4.12 4.12S9.72 12 12 12zM18.39 19.9a2.5 2.5 0 00-2.5-2.5h-1.78a5 5 0 00-9.22 0H4.1a2.5 2.5 0 00-2.5 2.5v.36h17.22v-.36z"
              />
            </svg>
            {/* <!-- Button Text --> */}
            Clients
          </button>

          <h1 className="text-2xl font-bold">
            See What are Clients are Saying
          </h1>

          <p class="text-gray-600 mt-2  text-left w-full">
            what some of our clients say about our platform.
          </p>
          <div className="flex justify-start items-center mt-3 space-x-4">
            {/* Backward Button */}
            <button className=" bg-blue-500 text-white rounded-full hover:bg-gray-300 transition duration-300 flex items-center justify-center w-12 h-12">
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Forward Button */}
            <button className=" bg-blue-500 text-white rounded-full hover:bg-gray-300 transition duration-300 flex items-center justify-center w-12 h-12">
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* <!-- Card 2 --> */}
        <div class="bg-gradient-to-b from-[#F6F6F6] to-[#487CD9] rounded-lg py-6 px-2 text-center flex flex-col w-full sm:w-80">
          {/* <!-- Image --> */}
          <div class="mb-4 flex justify-center items-center">
            <Image
              class=" rounded-full object-cover"
              src={happygirl}
              width={60}
              height={60}
              alt="User Image"
            />
            <div className="flex justify-center flex-col">
              <h1 className="font-medium leading-3 text-[#313131]  mb-1 ml-2 text-left">
                Sarah M
              </h1>
              <p className="text-[#000000] leading-3 font-normal ml-2 text-left mt-1 ">
                Small Business Owner
              </p>
            </div>
          </div>

          <p class="text-[#313131] mt-2  text-left w-full">
            “The AI lawyer helped me draft a contract in minutes, saving me
            hours of work. I can not believe how easy it was to use. Highly
            recommend it to any small business owner!”
          </p>
          {/* <!-- Rating Stars --> */}
          <div class="flex justify-left mt-4 items-start">
            <span class="text-yellow-500">&#9733;</span>
            <span class="text-yellow-500">&#9733;</span>
            <span class="text-yellow-500">&#9733;</span>
            <span class="text-yellow-500">&#9733;</span>
            <span class="text-yellow-500">&#9733;</span>
            <span class="ml-2 mt-1 text-gray-600 text-sm">4.8</span>
          </div>
        </div>
        {/* <!-- Card 3 --> */}
        <div class="bg-gradient-to-b from-[#F6F6F6] to-[#487CD9] rounded-lg py-6 px-2 text-center flex flex-col w-full sm:w-80">
          {/* <!-- Image --> */}
          <div class="mb-4 flex justify-center items-center">
            <Image
              class=" rounded-full object-cover"
              src={happygirl}
              width={60}
              height={60}
              alt="User Image"
            />
            <div className="flex justify-center flex-col">
              <h1 className="font-medium leading-3 text-[#313131]  mb-1 ml-2 text-left">
                John
              </h1>
              <p className="text-[#000000] leading-3 font-normal ml-2 text-left mt-1 ">
                Freelancer
              </p>
            </div>
          </div>

          <p class="text-[#313131] mt-2  text-left w-full">
            “I was skeptical at first, but the AI provided spot-on legal advice
            for my case. It was like having a lawyer on call 24/7. The best
            part? It is way more affordable than traditional.”
          </p>
          {/* <!-- Rating Stars --> */}
          <div class="flex justify-left mt-4 items-start">
            <span class="text-yellow-500">&#9733;</span>
            <span class="text-yellow-500">&#9733;</span>
            <span class="text-yellow-500">&#9733;</span>
            <span class="text-yellow-500">&#9733;</span>
            <span class="text-yellow-500">&#9733;</span>
            <span class="ml-2 mt-1 text-gray-600 text-sm">4.8</span>
          </div>
        </div>

        {/* <!-- Card 4 --> */}
        <div class="bg-gradient-to-b from-[#F6F6F6] to-[#487CD9] rounded-lg py-6 px-2 text-center flex flex-col w-full sm:w-80">
          {/* <!-- Image --> */}
          <div class="mb-4 flex justify-center items-center">
            <Image
              class=" rounded-full object-cover"
              src={happygirl}
              width={60}
              height={60}
              alt="User Image"
            />
            <div className="flex justify-center flex-col">
              <h1 className="font-medium leading-3 text-[#313131]  mb-1 ml-2 text-left">
                Emily
              </h1>
              <p className="text-[#000000] leading-3 font-normal ml-2 text-left mt-1 ">
                Small Business Owner
              </p>
            </div>
          </div>

          <p class="text-[#313131] mt-2  text-left w-full">
            “The AI lawyer helped me draft a contract in minutes, saving me
            hours of work. I can not believe how easy it was to use. Highly
            recommend it to any small business owner!”
          </p>
          {/* <!-- Rating Stars --> */}
          <div class="flex justify-left mt-4 items-start">
            <span class="text-yellow-500">&#9733;</span>
            <span class="text-yellow-500">&#9733;</span>
            <span class="text-yellow-500">&#9733;</span>
            <span class="text-yellow-500">&#9733;</span>
            <span class="text-yellow-500">&#9733;</span>
            <span class="ml-2 mt-1 text-gray-600 text-sm">4.8</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
