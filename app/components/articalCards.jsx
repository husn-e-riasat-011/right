import React from "react";
import Image from "next/image";
import eleven from "../images/111.png";
import Twelve from "../images/222.png";
import Thirteen from "../images/333.png";
import Sixteen from "../images/Sixteen.png";
import featureicon from "../images/ii.png";
// import { FaPersonBiking, FaPersonBurst } from "react-icons/fa6";
const ArticalCards = () => {
  return (
    <div className="bg-white max-w-custom m-auto py-48">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="flex items-center justify-center my-4">
            <div className="w-36 flex items-center justify-center border border-gray-300 rounded-xl py-2 px-2 space-x-2">
              {/* <!-- Icon --> */}
              <Image src={featureicon} alt="icon" />
              {/* <!-- Text --> */}
              <span class="text-[#535353]  text-lg font-normal leading-6 tracking-widest">
                Features
              </span>
            </div>
          </div>

          <h2 className=" text-[#000000]  m-auto text-5xl font-bold leading-9 tracking-wide text-center my-6">
            Everything You Are Looking For
          </h2>
          <p className=" text-[#535353] mt-4 w-[70%] m-auto text-2xl font-normal leading-8 tracking-wide text-center">
            Explore features that boost your productivity. From document
            automation to advanced research, we have got the hard work covered.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10">
        {/* first card */}
        <div class="w-[470px] bg-white">
          <div className="border border-[#ACACAC] rounded-2xl">
            <Image src={eleven} alt="pic" className="p-1 " />
          </div>
          <div class="p-5">
            <div className="flex gap-2 items-center">
              <svg
                width="23"
                height="20"
                viewBox="0 0 23 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-mt-2"
              >
                <rect
                  x="0.75"
                  y="0.75"
                  width="21.5"
                  height="18.5"
                  rx="1.25"
                  stroke="black"
                  stroke-width="1.5"
                />
                <mask id="path-2-inside-1_736_14" fill="white">
                  <rect x="3" y="3" width="6" height="12" rx="1" />
                </mask>
                <rect
                  x="3"
                  y="3"
                  width="6"
                  height="12"
                  rx="1"
                  stroke="black"
                  stroke-width="3"
                  mask="url(#path-2-inside-1_736_14)"
                />
                <mask id="path-3-inside-2_736_14" fill="white">
                  <rect x="10" y="3" width="6" height="7" rx="1" />
                </mask>
                <rect
                  x="10"
                  y="3"
                  width="6"
                  height="7"
                  rx="1"
                  stroke="black"
                  stroke-width="3"
                  mask="url(#path-3-inside-2_736_14)"
                />
              </svg>

              <h5 class="font-sans mb-2 text-[#000000] dark:text-white text-2xl font-bold leading-6 tracking-wide text-left">
                Instant Legal Consultation
              </h5>
            </div>
            <p class="font-sans mb-3 font-normal text-[#535353] dark:text-gray-400 text-base leading-7 tracking-wider text-left">
              Get real-time legal advice from our AI lawyer 24/7. No need to
              wait for appointments—just ask your question and receive instant
              guidance tailored to your specific situation.
            </p>
          </div>
        </div>
        {/* second one */}
        <div class="w-[470px] bg-white">
          <div className="border border-[#ACACAC] rounded-2xl">
            <Image src={Twelve} alt="" className="p-1" />
          </div>
          <div class="p-5">
            <div className="flex gap-2 items-center">
              <svg
                width="23"
                height="20"
                viewBox="0 0 23 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-mt-2"
              >
                <rect
                  x="0.75"
                  y="0.75"
                  width="21.5"
                  height="18.5"
                  rx="1.25"
                  stroke="black"
                  stroke-width="1.5"
                />
                <rect
                  x="3"
                  y="3"
                  width="6"
                  height="12"
                  rx="1"
                  fill="lightgray"
                />
                <rect
                  x="10"
                  y="3"
                  width="6"
                  height="12"
                  rx="1"
                  fill="lightgray"
                />
                <line
                  x1="5"
                  y1="10"
                  x2="8"
                  y2="10"
                  stroke="black"
                  stroke-width="2"
                />
                <line
                  x1="5"
                  y1="6"
                  x2="8"
                  y2="6"
                  stroke="black"
                  stroke-width="2"
                />
                <path
                  d="M17 9L19 11L17 13"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 11L19 11"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h5 class="font-sans mb-2 text-[#000000] dark:text-white text-2xl font-bold leading-6 tracking-wide text-left">
                Document Review & Drafting
              </h5>
            </div>
            <p class="font-sans mb-3 font-normal text-[#535353] dark:text-gray-400 text-base leading-7 tracking-wider text-left">
              Upload your contracts, agreements, or any legal documents, and our
              AI will analyze and draft them to perfection, ensuring all legal
              loopholes are covered successfully.
            </p>
          </div>
        </div>
        {/* third one */}
        <div class="w-[470px] bg-white">
          <div className="border border-[#ACACAC] rounded-2xl">
            <Image src={Thirteen} alt="" className="p-1 rounded-3xl" />
          </div>
          <div class="p-5">
            <div className="flex gap-2 items-center">
              <svg
                width="18"
                height="21"
                viewBox="0 0 18 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-mt-2"
              >
                <path
                  d="M13.2126 4.52752C13.2126 4.42156 13.1265 4.33486 13.0211 4.33486H3.82975C3.72443 4.33486 3.63826 4.42156 3.63826 4.52752V5.68349C3.63826 5.78945 3.72443 5.87615 3.82975 5.87615H13.0211C13.1265 5.87615 13.2126 5.78945 13.2126 5.68349V4.52752ZM13.0211 7.80275H3.82975C3.72443 7.80275 3.63826 7.88945 3.63826 7.99541V9.15138C3.63826 9.25734 3.72443 9.34404 3.82975 9.34404H13.0211C13.1265 9.34404 13.2126 9.25734 13.2126 9.15138V7.99541C13.2126 7.88945 13.1265 7.80275 13.0211 7.80275ZM8.23396 11.2706H3.82975C3.72443 11.2706 3.63826 11.3573 3.63826 11.4633V12.6193C3.63826 12.7252 3.72443 12.8119 3.82975 12.8119H8.23396C8.33927 12.8119 8.42544 12.7252 8.42544 12.6193V11.4633C8.42544 11.3573 8.33927 11.2706 8.23396 11.2706ZM7.08503 18.6881H1.72339V1.73395H15.1275V10.0183C15.1275 10.1243 15.2137 10.211 15.319 10.211H16.6594C16.7647 10.211 16.8509 10.1243 16.8509 10.0183V0.770642C16.8509 0.344381 16.5086 0 16.0849 0H0.765949C0.342284 0 0 0.344381 0 0.770642V19.6514C0 20.0776 0.342284 20.422 0.765949 20.422H7.08503C7.19035 20.422 7.27652 20.3353 7.27652 20.2294V18.8807C7.27652 18.7748 7.19035 18.6881 7.08503 18.6881ZM15.6254 16.8963C16.3195 16.263 16.7551 15.3478 16.7551 14.3291C16.7551 12.4146 15.2113 10.8612 13.3084 10.8612C11.4055 10.8612 9.8616 12.4146 9.8616 14.3291C9.8616 15.3478 10.2972 16.263 10.9914 16.8963C9.62703 17.679 8.68874 19.1288 8.61693 20.8001C8.61214 20.9085 8.70071 21 8.80842 21H9.95973C10.0603 21 10.144 20.9205 10.1512 20.817C10.2446 19.1505 11.6257 17.8211 13.3084 17.8211C14.9911 17.8211 16.3722 19.1505 16.4655 20.817C16.4703 20.9181 16.5541 21 16.657 21H17.8083C17.9184 21 18.0046 20.9085 17.9998 20.8001C17.9304 19.1264 16.9897 17.679 15.6254 16.8963ZM13.3084 12.4025C14.3663 12.4025 15.2232 13.2647 15.2232 14.3291C15.2232 15.3936 14.3663 16.2557 13.3084 16.2557C12.2504 16.2557 11.3935 15.3936 11.3935 14.3291C11.3935 13.2647 12.2504 12.4025 13.3084 12.4025Z"
                  fill="black"
                />
              </svg>

              <h5 class="font-sans mb-2 text-[#000000] dark:text-white text-2xl font-bold leading-6 tracking-wide text-left">
                Personalized Legal Solutions
              </h5>
            </div>
            <p class="font-sans mb-3 font-normal text-[#535353] dark:text-gray-400 text-base leading-7 tracking-wider text-left">
              Receive tailored legal solutions based on your unique
              circumstances. Our AI assesses your case and provides step-by-step
              guidance to resolve your legal matters efficiently.
            </p>
          </div>
        </div>
        {/* forth */}
        <div class="w-[470px] bg-white">
          <div className="border border-[#ACACAC] rounded-2xl">
            <Image src={Twelve} alt="" className="p-1" />
          </div>
          <div class="p-5">
            <div className="flex gap-2 items-center">
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-mt-2"
              >
                <path
                  d="M2 11.5C2 15.4595 2 19.5398 3.318 20.7694C4.636 22 6.758 22 11 22C15.242 22 17.364 22 18.682 20.7694C20 19.5388 20 15.4595 20 11.5"
                  stroke="black"
                  stroke-width="1.5"
                />
                <path
                  d="M13.66 13.8121L19.668 11.92C20.263 11.732 20.561 11.6386 20.75 11.4139C20.787 11.37 20.8205 11.3229 20.85 11.2732C21 11.018 21 10.6925 21 10.0394C21 7.46695 21 6.1807 20.327 5.31235C20.1976 5.14527 20.0521 4.99257 19.893 4.85665C19.066 4.15 17.841 4.15 15.391 4.15H6.61C4.16 4.15 2.935 4.15 2.108 4.85665C1.948 4.99315 1.80333 5.14505 1.674 5.31235C1 6.1807 1 7.46695 1 10.0394C1 10.6925 1 11.018 1.15 11.2732C1.18 11.3222 1.21333 11.3691 1.25 11.4139C1.44 11.6386 1.737 11.732 2.332 11.92L8.34 13.8121M5.5 4.15C6.323 4.129 7.16 3.57775 7.44 2.764L7.475 2.65585L7.5 2.575C7.542 2.44165 7.564 2.3755 7.586 2.3167C7.72726 1.94795 7.96529 1.62887 8.27241 1.39653C8.57954 1.1642 8.94315 1.02815 9.321 1.0042C9.38 1 9.448 1 9.58 1H12.418C12.551 1 12.618 1 12.678 1.0042C13.0558 1.02815 13.4195 1.1642 13.7266 1.39653C14.0337 1.62887 14.2717 1.94795 14.413 2.3167C14.436 2.3755 14.457 2.4427 14.499 2.575L14.525 2.65585C14.543 2.7115 14.551 2.73985 14.56 2.764C14.84 3.57775 15.676 4.129 16.499 4.15"
                  stroke="black"
                  stroke-width="1.5"
                />
                <path
                  d="M13 12.0249H9C8.86739 12.0249 8.74021 12.0802 8.64645 12.1787C8.55268 12.2771 8.5 12.4107 8.5 12.5499V14.82C8.50002 14.9248 8.52994 15.0273 8.58591 15.1141C8.64187 15.201 8.72131 15.2682 8.814 15.3072L9.514 15.6012C10.4679 16.002 11.5321 16.002 12.486 15.6012L13.186 15.3072C13.2787 15.2682 13.3581 15.201 13.4141 15.1141C13.4701 15.0273 13.5 14.9248 13.5 14.82V12.5499C13.5 12.4107 13.4473 12.2771 13.3536 12.1787C13.2598 12.0802 13.1326 12.0249 13 12.0249Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>

              <h5 class="font-sans mb-2 text-[#000000] dark:text-white text-2xl font-bold leading-6 tracking-wide text-left">
                Case Preparation Assistance
              </h5>
            </div>
            <p class="font-sans mb-3 font-normal text-[#535353] dark:text-gray-400 text-base leading-7 tracking-wider text-left">
              Prepare your case with confidence. Our AI helps you organize
              evidence, draft legal arguments, and understand the strengths and
              weaknesses of your case.
            </p>
          </div>
        </div>
        {/* fiveth */}
        <div class="w-[470px] bg-white">
          <div className="border border-[#ACACAC] rounded-2xl">
            <Image src={Thirteen} alt="" className="p-1 rounded-3xl" />
          </div>
          <div class="p-5">
            <div className="flex gap-2 items-center">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-mt-2"
              >
                <path
                  d="M3.26489 14.6046C2.66645 14.3165 2.14918 13.8839 1.75974 13.3459C1.37031 12.8078 1.12098 12.1813 1.03425 11.5228C0.947522 10.8643 1.02613 10.1946 1.26298 9.5741C1.49982 8.95359 1.88746 8.40182 2.39089 7.96859M2.42089 7.88759C2.09293 7.39684 1.94919 6.80588 2.01511 6.21932C2.08103 5.63277 2.35236 5.08845 2.78107 4.68274C3.20977 4.27702 3.7682 4.03608 4.3575 4.00256C4.94679 3.96904 5.52894 4.14511 6.00089 4.49959M6.23889 4.56459C6.07936 4.22564 5.99805 3.85516 6.00097 3.48056C6.00388 3.10595 6.09094 2.73678 6.25572 2.40035C6.4205 2.06392 6.65879 1.76882 6.95296 1.53686C7.24713 1.30491 7.58967 1.14203 7.95526 1.06027C8.32084 0.978508 8.70013 0.979952 9.06509 1.0645C9.43004 1.14904 9.77133 1.31452 10.0637 1.54871C10.3561 1.7829 10.5922 2.0798 10.7544 2.41748C10.9166 2.75516 11.0008 3.12497 11.0009 3.49959M11.0009 3.49959V18.9996M11.0009 3.49959C11.001 3.12497 11.0852 2.75516 11.2474 2.41748C11.4096 2.0798 11.6457 1.7829 11.9381 1.54871C12.2304 1.31452 12.5717 1.14904 12.9367 1.0645C13.3016 0.979952 13.6809 0.978508 14.0465 1.06027C14.4121 1.14203 14.7547 1.30491 15.0488 1.53686C15.343 1.76882 15.5813 2.06392 15.7461 2.40035C15.9108 2.73678 15.9979 3.10595 16.0008 3.48056C16.0037 3.85516 15.9224 4.22564 15.7629 4.56459M11.0009 18.9996C11.0009 19.53 10.7902 20.0387 10.4151 20.4138C10.04 20.7889 9.53132 20.9996 9.00089 20.9996C8.47046 20.9996 7.96175 20.7889 7.58668 20.4138C7.2116 20.0387 7.00089 19.53 7.00089 18.9996M11.0009 18.9996C11.0009 19.53 11.2116 20.0387 11.5867 20.4138C11.9617 20.7889 12.4705 20.9996 13.0009 20.9996M11.0009 5.99959C11.0009 6.79524 11.317 7.5583 11.8796 8.12091C12.4422 8.68352 13.2052 8.99959 14.0009 8.99959M19.6109 7.96859C20.0475 8.34365 20.3978 8.80874 20.6377 9.33192C20.8776 9.85511 21.0015 10.424 21.0009 10.9996C21.0009 11.7026 20.8199 12.3636 20.5009 12.9376M19.5809 7.88759C19.9088 7.39684 20.0526 6.80588 19.9867 6.21932C19.9207 5.63277 19.6494 5.08845 19.2207 4.68274C18.792 4.27702 18.2336 4.03608 17.6443 4.00256C17.055 3.96904 16.4728 4.14511 16.0009 4.49959M19.5009 19.4996L21.0009 20.9996M15.0009 17.4996C15.0009 18.1626 15.2643 18.7985 15.7331 19.2674C16.202 19.7362 16.8378 19.9996 17.5009 19.9996C18.1639 19.9996 18.7998 19.7362 19.2687 19.2674C19.7375 18.7985 20.0009 18.1626 20.0009 17.4996C20.0009 16.8366 19.7375 16.2007 19.2687 15.7318C18.7998 15.263 18.1639 14.9996 17.5009 14.9996C16.8378 14.9996 16.202 15.263 15.7331 15.7318C15.2643 16.2007 15.0009 16.8366 15.0009 17.4996Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h5 class="font-sans mb-2 text-[#000000] dark:text-white text-2xl font-bold leading-6 tracking-wide text-left">
                Legal Research on Demand
              </h5>
            </div>
            <p class="font-sans mb-3 font-normal text-[#535353] dark:text-gray-400 text-base leading-7 tracking-wider text-left">
              Access comprehensive legal research in minutes. Our AI scours
              legal databases and precedents to find relevant case law,
              statutes, and legal arguments for your situation.
            </p>
          </div>
        </div>
        {/* 6th */}
        <div class="w-[470px] bg-white">
          <div className="border border-[#ACACAC] rounded-2xl">
            <Image src={Sixteen} alt="" className="p-1" />
          </div>
          <div class="p-5">
            <div className="flex gap-2 items-center">
              <svg
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-mt-2"
              >
                <path
                  d="M5.5 20H9.5C9.5 21.1 8.6 22 7.5 22C6.4 22 5.5 21.1 5.5 20ZM3.5 19H11.5V17H3.5V19ZM15 9.5C15 13.32 12.34 15.36 11.23 16H3.77C2.66 15.36 0 13.32 0 9.5C0 5.36 3.36 2 7.5 2C11.64 2 15 5.36 15 9.5ZM13 9.5C13 6.47 10.53 4 7.5 4C4.47 4 2 6.47 2 9.5C2 11.97 3.49 13.39 4.35 14H10.65C11.51 13.39 13 11.97 13 9.5ZM19.87 7.37L18.5 8L19.87 8.63L20.5 10L21.13 8.63L22.5 8L21.13 7.37L20.5 6L19.87 7.37ZM17.5 6L18.44 3.94L20.5 3L18.44 2.06L17.5 0L16.56 2.06L14.5 3L16.56 3.94L17.5 6Z"
                  fill="black"
                />
              </svg>

              <h5 class="font-sans mb-2 text-[#000000] dark:text-white text-2xl font-bold leading-6 tracking-wide text-left">
                Legal Alerts & Updates
              </h5>
            </div>
            <p class="font-sans mb-3 font-normal text-[#535353] dark:text-gray-400 text-base leading-7 tracking-wider text-left">
              Stay informed with real-time legal alerts and updates relevant to
              your field or personal interests. Our AI monitors changes in laws
              and regulations that could impact you.
            </p>
          </div>
        </div>
      </div>

      {/* Learn more buttoon */}

      <div className="flex justify-center items-center m-10 py-10">
        <button className="bg-[#FAF8F8] text-[#535353] border border-[#C7C7C8] px-5 py-3 rounded-2xl hover:bg-[#2f2f31] transition duration-300 text-xl font-medium leading-6 tracking-wide hover:text-[#FAF8F8] font-sans ">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ArticalCards;
