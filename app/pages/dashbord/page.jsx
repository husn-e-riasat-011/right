import Sidebar from "@/app/components/sidebar";
import React from "react";
import file from "../../images/file2.png";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div class="flex flex-col  w-[100%] h-screen overflow-scroll">
        {/* first section  */}
        <div
          className="mx-28 my-20 p-12 border border-[#B8B8B8] rounded-3xl"
          style={{
            background:
              "linear-gradient(180deg, rgba(85, 244, 234, 0.1) 0%, rgba(49, 142, 136, 0.1) 100%)",
          }}
        >
          <h1 className="text-black text-center font-bold text-4xl tracking-wider my-8">
            Welcome back, Alan Sanders!
          </h1>
          <div className="flex flex-wrap justify-center gap-6">
            {/* <!-- Card 1 --> */}
            <div
              class=" rounded-3xl py-6 px-2 text-center flex flex-col w-full sm:w-[300px] h-[240px] "
              style={{
                background:
                  "linear-gradient(57.36deg, rgba(3, 217, 251, 0.5) 2.49%, rgba(45, 99, 197, 0.5) 96.35%)",
              }}
            >
              {/* <!-- Image --> */}
              <div class="mb-4 flex justify-center items-center">
                <svg
                  width="92"
                  height="92"
                  viewBox="0 0 92 92"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M83.8683 38.5754C87.9688 42.6759 87.9688 49.3241 83.8683 53.4246L53.4241 83.8688C49.3236 87.9693 42.6754 87.9693 38.5749 83.8688L8.13072 53.4246C4.03022 49.3241 4.03022 42.6759 8.13072 38.5754L38.5749 8.13122C42.6754 4.03072 49.3236 4.03072 53.4241 8.13123L83.8683 38.5754Z"
                    fill="#F5F5F5"
                    stroke="#2D63C4"
                  />
                  <path
                    d="M54.1467 61L49.6 56.1667L51.5179 54.2978L54.1467 56.8594L60.0821 51.0756L62 53.3472M47.2027 61H34.3067C32.4715 61 31 59.5661 31 57.7778V35.2222C31 33.4339 32.4715 32 34.3067 32H57.4533C59.2885 32 60.76 33.4339 60.76 35.2222V47.7889C59.7515 47.225 58.6437 46.8222 57.4533 46.6289V35.2222H34.3067V57.7778H46.0123C46.2107 58.9378 46.624 60.0172 47.2027 61ZM45.88 54.5556H37.6133V51.3333H45.88M50.3109 48.1111H37.6133V44.8889H54.1467V46.6289C52.7413 46.8544 51.4517 47.37 50.3109 48.1111ZM54.1467 41.6667H37.6133V38.4444H54.1467"
                    fill="#2D63C4"
                  />
                </svg>
              </div>
              <h2 className="font-bold tracking-wider">
                Total Documents Uploaded
              </h2>
              <p class="text-[#313131] my-1 tracking-wider font-bold w-full">
                +3.5% increase from last month
              </p>
              <h2 className="text-3xl text-center font-semibold text-[#2D63C4]">
                25
              </h2>
            </div>
            {/* <!-- Card 2 --> */}
            <div
              class=" rounded-3xl py-6 px-2 text-center flex flex-col w-full sm:w-[300px] h-[240px]"
              style={{
                background:
                  "linear-gradient(57.36deg, rgba(3, 217, 251, 0.5) 2.49%, rgba(45, 99, 197, 0.5) 96.35%)",
              }}
            >
              {/* <!-- Image --> */}
              <div class="mb-4 flex justify-center items-center">
                <svg
                  width="92"
                  height="92"
                  viewBox="0 0 92 92"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M83.8683 38.5754C87.9688 42.6759 87.9688 49.3241 83.8683 53.4246L53.4241 83.8688C49.3236 87.9693 42.6754 87.9693 38.5749 83.8688L8.13072 53.4246C4.03022 49.3241 4.03022 42.6759 8.13072 38.5754L38.5749 8.13122C42.6754 4.03072 49.3236 4.03072 53.4241 8.13123L83.8683 38.5754Z"
                    fill="#F5F5F5"
                    stroke="#2D63C4"
                  />
                  <path
                    d="M31 35.125C31 34.031 31.4491 32.9818 32.2485 32.2082C33.0478 31.4346 34.132 31 35.2625 31H54.6375C55.768 31 56.8522 31.4346 57.6515 32.2082C58.4509 32.9818 58.9 34.031 58.9 35.125V44.533C57.9477 43.9437 56.8997 43.5137 55.8 43.261V35.125C55.8 34.8266 55.6775 34.5405 55.4595 34.3295C55.2415 34.1185 54.9458 34 54.6375 34H35.2625C34.9542 34 34.6585 34.1185 34.4405 34.3295C34.2225 34.5405 34.1 34.8266 34.1 35.125V53.875C34.1 54.496 34.6208 55 35.2625 55H43.6697C43.9332 56.08 44.3827 57.0925 44.9841 58H35.2625C34.132 58 33.0478 57.5654 32.2485 56.7918C31.4491 56.0182 31 54.969 31 53.875V35.125ZM62 52.75C62 50.562 61.1018 48.4635 59.5031 46.9164C57.9043 45.3692 55.736 44.5 53.475 44.5C51.214 44.5 49.0457 45.3692 47.4469 46.9164C45.8482 48.4635 44.95 50.562 44.95 52.75C44.95 54.938 45.8482 57.0365 47.4469 58.5836C49.0457 60.1308 51.214 61 53.475 61C55.736 61 57.9043 60.1308 59.5031 58.5836C61.1018 57.0365 62 54.938 62 52.75ZM54.25 53.5L54.2515 57.2545C54.2515 57.4534 54.1699 57.6442 54.0246 57.7848C53.8792 57.9255 53.6821 58.0045 53.4765 58.0045C53.271 58.0045 53.0739 57.9255 52.9285 57.7848C52.7832 57.6442 52.7015 57.4534 52.7015 57.2545V53.5H48.8188C48.6133 53.5 48.4161 53.421 48.2708 53.2803C48.1255 53.1397 48.0438 52.9489 48.0438 52.75C48.0438 52.5511 48.1255 52.3603 48.2708 52.2197C48.4161 52.079 48.6133 52 48.8188 52H52.7V48.25C52.7 48.0511 52.7817 47.8603 52.927 47.7197C53.0723 47.579 53.2695 47.5 53.475 47.5C53.6805 47.5 53.8777 47.579 54.023 47.7197C54.1683 47.8603 54.25 48.0511 54.25 48.25V52H58.1203C58.3259 52 58.523 52.079 58.6684 52.2197C58.8137 52.3603 58.8953 52.5511 58.8953 52.75C58.8953 52.9489 58.8137 53.1397 58.6684 53.2803C58.523 53.421 58.3259 53.5 58.1203 53.5H54.25Z"
                    fill="#2D63C4"
                  />
                </svg>
              </div>
              <h2 className="font-bold tracking-wider">
                Documents Under Review
              </h2>
              <p class="text-[#313131] my-1 tracking-wider font-bold w-full">
                +2 pending since last week
              </p>
              <h2 className="text-3xl text-center font-semibold text-[#2D63C4]">
                8
              </h2>
            </div>
            {/* <!-- Card 3 --> */}
            <div
              class=" rounded-3xl py-6 px-2 text-center flex flex-col w-full sm:w-[300px] h-[240px] "
              style={{
                background:
                  "linear-gradient(57.36deg, rgba(3, 217, 251, 0.5) 2.49%, rgba(45, 99, 197, 0.5) 96.35%)",
              }}
            >
              {/* <!-- Image --> */}
              <div class="mb-4 flex justify-center items-center">
                <svg
                  width="92"
                  height="92"
                  viewBox="0 0 92 92"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M83.8683 38.5754C87.9688 42.6759 87.9688 49.3241 83.8683 53.4246L53.4241 83.8688C49.3236 87.9693 42.6754 87.9693 38.5749 83.8688L8.13072 53.4246C4.03022 49.3241 4.03022 42.6759 8.13072 38.5754L38.5749 8.13122C42.6754 4.03072 49.3236 4.03072 53.4241 8.13123L83.8683 38.5754Z"
                    fill="#F5F5F5"
                    stroke="#2D63C4"
                  />
                  <path
                    d="M31 60V35.555C31 34.8267 31.2486 34.219 31.7459 33.732C32.2432 33.2451 32.8619 33.0011 33.6019 33H57.3981C58.1392 33 58.7578 33.244 59.2541 33.732C59.7503 34.2201 59.9989 34.8277 60 35.555V52.5816C60 53.3089 59.7514 53.9166 59.2541 54.4046C58.7568 54.8926 58.1381 55.1361 57.3981 55.135H35.9574L31 60ZM41.4996 49.8748L45.5 47.4937L49.5004 49.8748L48.4371 45.4083L51.9751 42.4295L47.3254 42.0248L45.5 37.8349L43.6746 42.0248L39.0249 42.4295L42.5629 45.4083L41.4996 49.8748Z"
                    fill="#2D63C4"
                  />
                </svg>
              </div>
              <h2 className="font-bold tracking-wider">
                Documents Under Review
              </h2>
              <p class="text-[#313131] my-1 tracking-wider font-bold w-full">
                +2 pending since last week
              </p>
              <h2 className="text-3xl text-center font-semibold text-[#2D63C4]">
                15
              </h2>
            </div>
            {/* <!-- Card 4 --> */}
            <div
              class=" rounded-3xl py-6 px-2 text-center flex flex-col w-full sm:w-[300px] h-[240px] "
              style={{
                background:
                  "linear-gradient(57.36deg, rgba(3, 217, 251, 0.5) 2.49%, rgba(45, 99, 197, 0.5) 96.35%)",
              }}
            >
              {/* <!-- Image --> */}
              <div class="mb-4 flex justify-center items-center">
                <svg
                  width="92"
                  height="92"
                  viewBox="0 0 92 92"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M83.8683 38.5754C87.9688 42.6759 87.9688 49.3241 83.8683 53.4246L53.4241 83.8688C49.3236 87.9693 42.6754 87.9693 38.5749 83.8688L8.13072 53.4246C4.03022 49.3241 4.03022 42.6759 8.13072 38.5754L38.5749 8.13122C42.6754 4.03072 49.3236 4.03072 53.4241 8.13123L83.8683 38.5754Z"
                    fill="#F5F5F5"
                    stroke="#2D63C4"
                  />
                  <path
                    d="M58 49.0004C58.002 47.9991 57.7534 47.0131 57.2768 46.1325C56.8002 45.2518 56.1107 44.5045 55.2713 43.9585C54.4319 43.4126 53.4692 43.0854 52.4709 43.0068C51.4726 42.9282 50.4706 43.1007 49.5561 43.5086C48.6415 43.9165 47.8436 44.5467 47.2351 45.342C46.6266 46.1372 46.2267 47.0721 46.072 48.0614C45.9173 49.0507 46.0127 50.063 46.3495 51.0061C46.6862 51.9491 47.2536 52.7928 48 53.4604V61.0004L52 59.1064L56 61.0004V53.4604C56.6287 52.8998 57.1318 52.2127 57.4765 51.4441C57.8211 50.6755 57.9995 49.8427 58 49.0004ZM54 57.8404L52 56.8934L50 57.8404V54.6504C51.2926 55.1162 52.7073 55.1162 54 54.6504V57.8404ZM52 53.0004C51.2089 53.0004 50.4355 52.7658 49.7777 52.3263C49.1199 51.8868 48.6072 51.262 48.3045 50.5311C48.0017 49.8002 47.9225 48.996 48.0768 48.22C48.2312 47.4441 48.6122 46.7314 49.1716 46.172C49.731 45.6126 50.4437 45.2316 51.2196 45.0773C51.9956 44.9229 52.7998 45.0021 53.5307 45.3049C54.2616 45.6076 54.8863 46.1203 55.3259 46.7781C55.7654 47.4359 56 48.2093 56 49.0004C55.9987 50.0609 55.5768 51.0775 54.827 51.8274C54.0771 52.5772 53.0604 52.9991 52 53.0004Z"
                    fill="#2D63C4"
                  />
                  <path
                    d="M53 34H50V33C49.9984 32.4701 49.7872 31.9623 49.4125 31.5875C49.0377 31.2128 48.5299 31.0016 48 31H40C39.4701 31.0016 38.9623 31.2128 38.5875 31.5875C38.2128 31.9623 38.0016 32.4701 38 33V34H35C34.4701 34.0016 33.9623 34.2128 33.5875 34.5875C33.2128 34.9623 33.0016 35.4701 33 36V57C33.0016 57.5299 33.2128 58.0377 33.5875 58.4125C33.9623 58.7872 34.4701 58.9984 35 59H44V57H35V36H38V39H50V36H53V41H55V36C54.9984 35.4701 54.7872 34.9623 54.4125 34.5875C54.0377 34.2128 53.5299 34.0016 53 34ZM48 37H40V33H48V37Z"
                    fill="#2D63C4"
                  />
                </svg>
              </div>
              <h2 className="font-bold tracking-wider">
                Documents Under Review
              </h2>
              <p class="text-[#313131] my-1 tracking-wider font-bold w-full">
                +2 pending since last week
              </p>
              <h2 className="text-3xl text-center font-semibold text-[#2D63C4]">
                12
              </h2>
            </div>
          </div>
        </div>

        {/* second section  */}
        <div
          className=" mx-28  p-12  rounded-3xl bg-[#FFFFFF] flex justify-center items-center"
          style={{ boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="max-w-[1260px]">
            <h1 className=" text-left text-4xl font-bold tracking-wider mt-6 mb-10">
              Recent Uploaded Documents
            </h1>
            <div className="flex flex-wrap justify-center gap-6">
              {/* <!-- Card 1 --> */}
              <div class=" rounded-2xl py-6 px-2 text-center flex flex-col w-full sm:w-[400px] bg-[#F1F1F1] border border-[#2C83E9]">
                {/* <!-- Image --> */}
                <div class="mb-4 flex justify-center items-center">
                  <Image
                    src={file}
                    width={70}
                    height={70}
                    alt="Picture of the author"
                  />
                </div>
                <h2 className="font-bold tracking-wider text-lg">
                  Employment Contract
                </h2>
                <p class="text-[#313131] mt-2 tracking-wider  w-full">
                  Uploaded: August 12, 2024
                </p>
                <p className="text-[#313131] mt-2 tracking-wider">
                  The AI identified potential issues with the non-compete
                  clause, recommending revisions to ensure enforceability.
                </p>
              </div>
              {/* <!-- Card 2 --> */}
              <div class=" rounded-2xl py-6 px-2 text-center flex flex-col w-full sm:w-[400px] bg-[#F1F1F1] border border-[#2C83E9]">
                {/* <!-- Image --> */}
                <div class="mb-4 flex justify-center items-center">
                  <Image
                    src={file}
                    width={70}
                    height={70}
                    alt="Picture of the author"
                  />
                </div>
                <h2 className="font-bold tracking-wider text-lg">
                  Analysis of Lease Agreement
                </h2>
                <p class="text-[#313131] mt-2 tracking-wider  w-full">
                  Uploaded: August 12, 2024
                </p>
                <p className="text-[#313131] mt-2 tracking-wider">
                  The AI identified potential issues with the non-compete
                  clause, recommending revisions to ensure enforceability.
                </p>
              </div>
              {/* <!-- Card 3 --> */}
              <div class=" rounded-2xl py-6 px-2 text-center flex flex-col w-full sm:w-[400px] bg-[#F1F1F1] border border-[#2C83E9]">
                {/* <!-- Image --> */}
                <div class="mb-4 flex justify-center items-center">
                  <Image
                    src={file}
                    width={70}
                    height={70}
                    alt="Picture of the author"
                  />
                </div>
                <h2 className="font-bold tracking-wider text-lg">
                  NDA with Vendor Feedback
                </h2>
                <p class="text-[#313131] mt-2 tracking-wider  w-full">
                  Uploaded: August 12, 2024
                </p>
                <p className="text-[#313131] mt-2 tracking-wider">
                  The AI identified potential issues with the non-compete
                  clause, recommending revisions to ensure enforceability.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* third section  */}
        <div
          className=" mx-28 my-20  p-12  rounded-3xl flex justify-center items-center"
          style={{
            background:
              "radial-gradient(100% 100% at 52.08% 100%, #363636 0%, #141414 43.58%, #050505 100%)",
          }}
        >
          <div className="max-w-[1260px]">
            <h1 className=" text-white text-left text-4xl font-bold tracking-wider mt-6 mb-10">
              Recent UndrRight Responses
            </h1>
            <div className="flex flex-wrap justify-center gap-6">
              {/* <!-- Card 1 --> */}
              <div
                class=" rounded-2xl py-6 px-2 text-center flex flex-col w-full sm:w-[400px]  border "
                style={{
                  background:
                    "linear-gradient(20.85deg, #3FEDEE 1.41%, #487CD9 100%)",
                  borderImageSource:
                    "linear-gradient(35.33deg, #6B6B6D 22.36%, rgba(90, 90, 90, 0.7) 42.11%, rgba(90, 90, 90, 0.7) 65.34%, #6B6B6D 79.32%)",
                }}
              >
                {/* <!-- Image --> */}
                <div class="mb-4 flex justify-center items-center">
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 70 75"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M63 69.4813H52.5C51.5083 69.4813 50.6777 69.1478 50.008 68.4808C49.3383 67.8138 49.0023 66.9893 49 66.0073C48.9977 65.0253 49.3337 64.2007 50.008 63.5337C50.6823 62.8667 51.513 62.5332 52.5 62.5332H63V27.7925H14V38.2147C14 39.1991 13.664 40.0247 12.992 40.6917C12.32 41.3588 11.4893 41.6911 10.5 41.6888C9.51068 41.6865 8.68001 41.353 8.00801 40.6883C7.33601 40.0236 7.00001 39.1991 7.00001 38.2147V13.8963C7.00001 11.9855 7.68601 10.3504 9.05801 8.99089C10.43 7.63137 12.0773 6.95046 14 6.94814H17.5V3.47408C17.5 2.48976 17.836 1.66525 18.508 1.00054C19.18 0.335839 20.0107 0.00232802 21 1.19795e-05C21.9893 -0.00230406 22.8212 0.331207 23.4955 1.00054C24.1698 1.66988 24.5047 2.49439 24.5 3.47408V6.94814H52.5V3.47408C52.5 2.48976 52.836 1.66525 53.508 1.00054C54.18 0.335839 55.0107 0.00232802 56 1.19795e-05C56.9893 -0.00230406 57.8212 0.331207 58.4955 1.00054C59.1698 1.66988 59.5047 2.49439 59.5 3.47408V6.94814H63C64.925 6.94814 66.5735 7.62906 67.9455 8.99089C69.3175 10.3527 70.0023 11.9879 70 13.8963V62.5332C70 64.4439 69.3152 66.0802 67.9455 67.442C66.5758 68.8039 64.9273 69.4836 63 69.4813ZM28.6125 62.5332H3.50001C2.50834 62.5332 1.67768 62.1997 1.00801 61.5327C0.338345 60.8656 0.0023454 60.0411 1.2069e-05 59.0591C-0.00232126 58.0771 0.333679 57.2526 1.00801 56.5856C1.68234 55.9186 2.51301 55.5851 3.50001 55.5851H28.6125L22.05 48.9843C21.4083 48.3474 21.0735 47.5519 21.0455 46.5977C21.0175 45.6434 21.3523 44.8178 22.05 44.1206C22.6917 43.4837 23.5083 43.1653 24.5 43.1653C25.4917 43.1653 26.3083 43.4837 26.95 44.1206L39.55 56.6273C40.25 57.3221 40.6 58.1327 40.6 59.0591C40.6 59.9855 40.25 60.7962 39.55 61.491L26.95 73.9976C26.3083 74.6345 25.5068 74.968 24.5455 74.9981C23.5842 75.0282 22.7523 74.6947 22.05 73.9976C21.4083 73.3607 21.0875 72.5501 21.0875 71.5658C21.0875 70.5814 21.4083 69.7708 22.05 69.1339L28.6125 62.5332ZM14 20.8444H63V13.8963H14V20.8444Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold tracking-wider">
                  Lease Agreement
                </h1>
                <p class="text-[#313131] my-2 tracking-wider  w-full">
                  Uploaded: August 12, 2024
                </p>
                <p className="text-[#313131] my-2 tracking-wider">
                  Status: Awaiting Analysis
                </p>

                <div className="flex items-center justify-center">
                  <button className="w-[200px] bg-white text-black py-2 my-2 rounded-md  hover:bg-gray-100 flex items-center justify-center space-x-2 mt-2 border border-[#535353]">
                    <span>Downloaded</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 12l4.5 4.5m0 0l4.5-4.5m-4.5 4.5V3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* <!-- Card 2 --> */}
              <div
                class=" rounded-2xl py-6 px-2 text-center flex flex-col w-full sm:w-[400px]  border "
                style={{
                  background:
                    "linear-gradient(20.85deg, #3FEDEE 1.41%, #487CD9 100%)",
                  borderImageSource:
                    "linear-gradient(35.33deg, #6B6B6D 22.36%, rgba(90, 90, 90, 0.7) 42.11%, rgba(90, 90, 90, 0.7) 65.34%, #6B6B6D 79.32%)",
                }}
              >
                {/* <!-- Image --> */}
                <div class="mb-4 flex justify-center items-center">
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 70 75"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M63 69.4813H52.5C51.5083 69.4813 50.6777 69.1478 50.008 68.4808C49.3383 67.8138 49.0023 66.9893 49 66.0073C48.9977 65.0253 49.3337 64.2007 50.008 63.5337C50.6823 62.8667 51.513 62.5332 52.5 62.5332H63V27.7925H14V38.2147C14 39.1991 13.664 40.0247 12.992 40.6917C12.32 41.3588 11.4893 41.6911 10.5 41.6888C9.51068 41.6865 8.68001 41.353 8.00801 40.6883C7.33601 40.0236 7.00001 39.1991 7.00001 38.2147V13.8963C7.00001 11.9855 7.68601 10.3504 9.05801 8.99089C10.43 7.63137 12.0773 6.95046 14 6.94814H17.5V3.47408C17.5 2.48976 17.836 1.66525 18.508 1.00054C19.18 0.335839 20.0107 0.00232802 21 1.19795e-05C21.9893 -0.00230406 22.8212 0.331207 23.4955 1.00054C24.1698 1.66988 24.5047 2.49439 24.5 3.47408V6.94814H52.5V3.47408C52.5 2.48976 52.836 1.66525 53.508 1.00054C54.18 0.335839 55.0107 0.00232802 56 1.19795e-05C56.9893 -0.00230406 57.8212 0.331207 58.4955 1.00054C59.1698 1.66988 59.5047 2.49439 59.5 3.47408V6.94814H63C64.925 6.94814 66.5735 7.62906 67.9455 8.99089C69.3175 10.3527 70.0023 11.9879 70 13.8963V62.5332C70 64.4439 69.3152 66.0802 67.9455 67.442C66.5758 68.8039 64.9273 69.4836 63 69.4813ZM28.6125 62.5332H3.50001C2.50834 62.5332 1.67768 62.1997 1.00801 61.5327C0.338345 60.8656 0.0023454 60.0411 1.2069e-05 59.0591C-0.00232126 58.0771 0.333679 57.2526 1.00801 56.5856C1.68234 55.9186 2.51301 55.5851 3.50001 55.5851H28.6125L22.05 48.9843C21.4083 48.3474 21.0735 47.5519 21.0455 46.5977C21.0175 45.6434 21.3523 44.8178 22.05 44.1206C22.6917 43.4837 23.5083 43.1653 24.5 43.1653C25.4917 43.1653 26.3083 43.4837 26.95 44.1206L39.55 56.6273C40.25 57.3221 40.6 58.1327 40.6 59.0591C40.6 59.9855 40.25 60.7962 39.55 61.491L26.95 73.9976C26.3083 74.6345 25.5068 74.968 24.5455 74.9981C23.5842 75.0282 22.7523 74.6947 22.05 73.9976C21.4083 73.3607 21.0875 72.5501 21.0875 71.5658C21.0875 70.5814 21.4083 69.7708 22.05 69.1339L28.6125 62.5332ZM14 20.8444H63V13.8963H14V20.8444Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold tracking-wider">
                  Employment Contract
                </h1>
                <p class="text-[#313131] my-2 tracking-wider  w-full">
                  Uploaded: August 12, 2024
                </p>
                <p className="text-[#313131] my-2 tracking-wider">
                  Status: Awaiting Analysis
                </p>

                <div className="flex items-center justify-center">
                  <button className="w-[200px] bg-white text-black py-2 my-2 rounded-md  hover:bg-gray-100 flex items-center justify-center space-x-2 mt-2 border border-[#535353]">
                    <span>Downloaded</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 12l4.5 4.5m0 0l4.5-4.5m-4.5 4.5V3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* <!-- Card 3 --> */}
              <div
                class=" rounded-2xl py-6 px-2 text-center flex flex-col w-full sm:w-[400px]  border "
                style={{
                  background:
                    "linear-gradient(20.85deg, #3FEDEE 1.41%, #487CD9 100%)",
                  borderImageSource:
                    "linear-gradient(35.33deg, #6B6B6D 22.36%, rgba(90, 90, 90, 0.7) 42.11%, rgba(90, 90, 90, 0.7) 65.34%, #6B6B6D 79.32%)",
                }}
              >
                {/* <!-- Image --> */}
                <div class="mb-4 flex justify-center items-center">
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 70 75"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M63 69.4813H52.5C51.5083 69.4813 50.6777 69.1478 50.008 68.4808C49.3383 67.8138 49.0023 66.9893 49 66.0073C48.9977 65.0253 49.3337 64.2007 50.008 63.5337C50.6823 62.8667 51.513 62.5332 52.5 62.5332H63V27.7925H14V38.2147C14 39.1991 13.664 40.0247 12.992 40.6917C12.32 41.3588 11.4893 41.6911 10.5 41.6888C9.51068 41.6865 8.68001 41.353 8.00801 40.6883C7.33601 40.0236 7.00001 39.1991 7.00001 38.2147V13.8963C7.00001 11.9855 7.68601 10.3504 9.05801 8.99089C10.43 7.63137 12.0773 6.95046 14 6.94814H17.5V3.47408C17.5 2.48976 17.836 1.66525 18.508 1.00054C19.18 0.335839 20.0107 0.00232802 21 1.19795e-05C21.9893 -0.00230406 22.8212 0.331207 23.4955 1.00054C24.1698 1.66988 24.5047 2.49439 24.5 3.47408V6.94814H52.5V3.47408C52.5 2.48976 52.836 1.66525 53.508 1.00054C54.18 0.335839 55.0107 0.00232802 56 1.19795e-05C56.9893 -0.00230406 57.8212 0.331207 58.4955 1.00054C59.1698 1.66988 59.5047 2.49439 59.5 3.47408V6.94814H63C64.925 6.94814 66.5735 7.62906 67.9455 8.99089C69.3175 10.3527 70.0023 11.9879 70 13.8963V62.5332C70 64.4439 69.3152 66.0802 67.9455 67.442C66.5758 68.8039 64.9273 69.4836 63 69.4813ZM28.6125 62.5332H3.50001C2.50834 62.5332 1.67768 62.1997 1.00801 61.5327C0.338345 60.8656 0.0023454 60.0411 1.2069e-05 59.0591C-0.00232126 58.0771 0.333679 57.2526 1.00801 56.5856C1.68234 55.9186 2.51301 55.5851 3.50001 55.5851H28.6125L22.05 48.9843C21.4083 48.3474 21.0735 47.5519 21.0455 46.5977C21.0175 45.6434 21.3523 44.8178 22.05 44.1206C22.6917 43.4837 23.5083 43.1653 24.5 43.1653C25.4917 43.1653 26.3083 43.4837 26.95 44.1206L39.55 56.6273C40.25 57.3221 40.6 58.1327 40.6 59.0591C40.6 59.9855 40.25 60.7962 39.55 61.491L26.95 73.9976C26.3083 74.6345 25.5068 74.968 24.5455 74.9981C23.5842 75.0282 22.7523 74.6947 22.05 73.9976C21.4083 73.3607 21.0875 72.5501 21.0875 71.5658C21.0875 70.5814 21.4083 69.7708 22.05 69.1339L28.6125 62.5332ZM14 20.8444H63V13.8963H14V20.8444Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold tracking-wider">
                  NDA with Vendor
                </h1>
                <p class="text-[#313131] my-2 tracking-wider  w-full">
                  Uploaded: August 12, 2024
                </p>
                <p className="text-[#313131] my-2 tracking-wider">
                  Status: Awaiting Analysis
                </p>

                <div className="flex items-center justify-center">
                  <button className="w-[200px] bg-white text-black py-2 my-2 rounded-md  hover:bg-gray-100 flex items-center justify-center space-x-2 mt-2 border border-[#535353]">
                    <span>Downloaded</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 12l4.5 4.5m0 0l4.5-4.5m-4.5 4.5V3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
