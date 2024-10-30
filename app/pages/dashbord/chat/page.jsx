import Sidebar from "@/app/pages/dashbord/component/sidebar";
import React from "react";
import DashboardLayout from "../Layout";

const Page = () => {
  return (
    <div className="flex">
      <DashboardLayout />
      <div className="w-[400px] bg-[#F9F9F9] border-transparent border border-r-[#B8B8B8] h-screen  ">
        <div className="p-8 mt-6">
          <h1 className=" text-3xl mt-5 tracking-wider w-full font-bold">
            Chats
          </h1>
          <button className="w-full bg-[#1E53AC] rounded-2xl flex justify-center items-center text-white h-14 my-4">
            New Chat
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1"
            >
              <path
                d="M7 12.6C3.913 12.6 1.4 10.087 1.4 7C1.4 3.913 3.913 1.4 7 1.4C10.087 1.4 12.6 3.913 12.6 7C12.6 10.087 10.087 12.6 7 12.6ZM7 0C6.08075 0 5.17049 0.18106 4.32122 0.532843C3.47194 0.884626 2.70026 1.40024 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 8.85651 0.737498 10.637 2.05025 11.9497C2.70026 12.5998 3.47194 13.1154 4.32122 13.4672C5.17049 13.8189 6.08075 14 7 14C8.85651 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85651 14 7C14 6.08075 13.8189 5.17049 13.4672 4.32122C13.1154 3.47194 12.5998 2.70026 11.9497 2.05025C11.2997 1.40024 10.5281 0.884626 9.67878 0.532843C8.8295 0.18106 7.91925 0 7 0ZM7.7 3.5H6.3V6.3H3.5V7.7H6.3V10.5H7.7V7.7H10.5V6.3H7.7V3.5Z"
                fill="white"
              />
            </svg>
          </button>
          <div
            className="w-[340px] h-14 flex items-center rounded-2xl justify-between  bg-white mt-14"
            style={{ boxShadow: "0px 0px 5px 0px #00000040" }}
          >
            <div className="flex items-center gap-x-4 ml-2 p-4">
              <svg
                width="21"
                height="19"
                viewBox="0 0 21 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.1 1.4H1.6V1.9V14.4115V15.5382L2.43546 14.7823L3.52112 13.8H18.9H19.4V13.3V1.9V1.4H18.9H2.1ZM0.5105 1.90031V1.9C0.5105 1.17396 1.17628 0.5 2.1 0.5H18.9C19.8271 0.5 20.5 1.17705 20.5 1.9V13.3C20.5 14.023 19.8271 14.7 18.9 14.7H4.2H4.00738L3.86454 14.8292L0.500692 17.8727L0.5105 1.90031ZM4.7 10H12.1V10.9H4.7V10ZM4.7 7.15H16.3V8.05H4.7V7.15ZM4.7 4.3H16.3V5.2H4.7V4.3Z"
                  fill="black"
                  stroke="black"
                />
              </svg>
              <p className="tracking-wide">Lorem Ipsum is simp....</p>
            </div>

            <div className="h-full bg-[#BCBBBB] w-12 rounded-r-2xl flex justify-center items-center cursor-pointer ">
              <svg
                width="19"
                height="22"
                viewBox="0 0 19 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.3 7.66667L15.348 16.9978C15.2041 18.4122 15.1327 19.1189 14.804 19.6533C14.5157 20.1238 14.0918 20.5 13.5857 20.7344C13.0111 21 12.288 21 10.8373 21H8.16267C6.71313 21 5.98893 21 5.41433 20.7333C4.90779 20.4991 4.48343 20.1228 4.19487 19.6522C3.86847 19.1189 3.79593 18.4122 3.65087 16.9978L2.7 7.66667M11.2 14.8889V9.33333M7.8 14.8889V9.33333M1 4.88889H6.23033M6.23033 4.88889L6.6678 1.92C6.79473 1.38 7.2526 1 7.77847 1H11.2215C11.7474 1 12.2041 1.38 12.3322 1.92L12.7697 4.88889M6.23033 4.88889H12.7697M12.7697 4.88889H18"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div
            className="w-[340px] h-14 flex items-center rounded-2xl justify-between  bg-[#F6F6F6] mt-6"
            style={{ boxShadow: "0px 0px 5px 0px #00000040" }}
          >
            <div className="flex items-center gap-x-4 ml-2 p-4">
              <svg
                width="21"
                height="19"
                viewBox="0 0 21 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.1 1.4H1.6V1.9V14.4115V15.5382L2.43546 14.7823L3.52112 13.8H18.9H19.4V13.3V1.9V1.4H18.9H2.1ZM0.5105 1.90031V1.9C0.5105 1.17396 1.17628 0.5 2.1 0.5H18.9C19.8271 0.5 20.5 1.17705 20.5 1.9V13.3C20.5 14.023 19.8271 14.7 18.9 14.7H4.2H4.00738L3.86454 14.8292L0.500692 17.8727L0.5105 1.90031ZM4.7 10H12.1V10.9H4.7V10ZM4.7 7.15H16.3V8.05H4.7V7.15ZM4.7 4.3H16.3V5.2H4.7V4.3Z"
                  fill="black"
                  stroke="black"
                />
              </svg>
              <p className="tracking-wide">Lorem Ipsum is simp....</p>
            </div>

            <div className="h-full bg-[#BCBBBB] w-12 rounded-r-2xl flex justify-center items-center cursor-pointer ">
              <svg
                width="19"
                height="22"
                viewBox="0 0 19 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.3 7.66667L15.348 16.9978C15.2041 18.4122 15.1327 19.1189 14.804 19.6533C14.5157 20.1238 14.0918 20.5 13.5857 20.7344C13.0111 21 12.288 21 10.8373 21H8.16267C6.71313 21 5.98893 21 5.41433 20.7333C4.90779 20.4991 4.48343 20.1228 4.19487 19.6522C3.86847 19.1189 3.79593 18.4122 3.65087 16.9978L2.7 7.66667M11.2 14.8889V9.33333M7.8 14.8889V9.33333M1 4.88889H6.23033M6.23033 4.88889L6.6678 1.92C6.79473 1.38 7.2526 1 7.77847 1H11.2215C11.7474 1 12.2041 1.38 12.3322 1.92L12.7697 4.88889M6.23033 4.88889H12.7697M12.7697 4.88889H18"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div
            className="w-[340px] h-14 flex items-center rounded-2xl justify-between  bg-[#F6F6F6] mt-6"
            style={{ boxShadow: "0px 0px 5px 0px #00000040" }}
          >
            <div className="flex items-center gap-x-4 ml-2 p-4">
              <svg
                width="21"
                height="19"
                viewBox="0 0 21 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.1 1.4H1.6V1.9V14.4115V15.5382L2.43546 14.7823L3.52112 13.8H18.9H19.4V13.3V1.9V1.4H18.9H2.1ZM0.5105 1.90031V1.9C0.5105 1.17396 1.17628 0.5 2.1 0.5H18.9C19.8271 0.5 20.5 1.17705 20.5 1.9V13.3C20.5 14.023 19.8271 14.7 18.9 14.7H4.2H4.00738L3.86454 14.8292L0.500692 17.8727L0.5105 1.90031ZM4.7 10H12.1V10.9H4.7V10ZM4.7 7.15H16.3V8.05H4.7V7.15ZM4.7 4.3H16.3V5.2H4.7V4.3Z"
                  fill="black"
                  stroke="black"
                />
              </svg>
              <p className="tracking-wide">Lorem Ipsum is simp....</p>
            </div>

            <div className="h-full bg-[#BCBBBB] w-12 rounded-r-2xl flex justify-center items-center cursor-pointer ">
              <svg
                width="19"
                height="22"
                viewBox="0 0 19 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.3 7.66667L15.348 16.9978C15.2041 18.4122 15.1327 19.1189 14.804 19.6533C14.5157 20.1238 14.0918 20.5 13.5857 20.7344C13.0111 21 12.288 21 10.8373 21H8.16267C6.71313 21 5.98893 21 5.41433 20.7333C4.90779 20.4991 4.48343 20.1228 4.19487 19.6522C3.86847 19.1189 3.79593 18.4122 3.65087 16.9978L2.7 7.66667M11.2 14.8889V9.33333M7.8 14.8889V9.33333M1 4.88889H6.23033M6.23033 4.88889L6.6678 1.92C6.79473 1.38 7.2526 1 7.77847 1H11.2215C11.7474 1 12.2041 1.38 12.3322 1.92L12.7697 4.88889M6.23033 4.88889H12.7697M12.7697 4.88889H18"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div
            className="w-[340px] h-14 flex items-center rounded-2xl justify-between  bg-[#F6F6F6] mt-6"
            style={{ boxShadow: "0px 0px 5px 0px #00000040" }}
          >
            <div className="flex items-center gap-x-4 ml-2 p-4">
              <svg
                width="21"
                height="19"
                viewBox="0 0 21 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.1 1.4H1.6V1.9V14.4115V15.5382L2.43546 14.7823L3.52112 13.8H18.9H19.4V13.3V1.9V1.4H18.9H2.1ZM0.5105 1.90031V1.9C0.5105 1.17396 1.17628 0.5 2.1 0.5H18.9C19.8271 0.5 20.5 1.17705 20.5 1.9V13.3C20.5 14.023 19.8271 14.7 18.9 14.7H4.2H4.00738L3.86454 14.8292L0.500692 17.8727L0.5105 1.90031ZM4.7 10H12.1V10.9H4.7V10ZM4.7 7.15H16.3V8.05H4.7V7.15ZM4.7 4.3H16.3V5.2H4.7V4.3Z"
                  fill="black"
                  stroke="black"
                />
              </svg>
              <p className="tracking-wide">Lorem Ipsum is simp....</p>
            </div>

            <div className="h-full bg-[#BCBBBB] w-12 rounded-r-2xl flex justify-center items-center cursor-pointer ">
              <svg
                width="19"
                height="22"
                viewBox="0 0 19 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.3 7.66667L15.348 16.9978C15.2041 18.4122 15.1327 19.1189 14.804 19.6533C14.5157 20.1238 14.0918 20.5 13.5857 20.7344C13.0111 21 12.288 21 10.8373 21H8.16267C6.71313 21 5.98893 21 5.41433 20.7333C4.90779 20.4991 4.48343 20.1228 4.19487 19.6522C3.86847 19.1189 3.79593 18.4122 3.65087 16.9978L2.7 7.66667M11.2 14.8889V9.33333M7.8 14.8889V9.33333M1 4.88889H6.23033M6.23033 4.88889L6.6678 1.92C6.79473 1.38 7.2526 1 7.77847 1H11.2215C11.7474 1 12.2041 1.38 12.3322 1.92L12.7697 4.88889M6.23033 4.88889H12.7697M12.7697 4.88889H18"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div
            className="w-[340px] h-14 flex items-center rounded-2xl justify-between  bg-[#F6F6F6] mt-6"
            style={{ boxShadow: "0px 0px 5px 0px #00000040" }}
          >
            <div className="flex items-center gap-x-4 ml-2 p-4">
              <svg
                width="21"
                height="19"
                viewBox="0 0 21 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.1 1.4H1.6V1.9V14.4115V15.5382L2.43546 14.7823L3.52112 13.8H18.9H19.4V13.3V1.9V1.4H18.9H2.1ZM0.5105 1.90031V1.9C0.5105 1.17396 1.17628 0.5 2.1 0.5H18.9C19.8271 0.5 20.5 1.17705 20.5 1.9V13.3C20.5 14.023 19.8271 14.7 18.9 14.7H4.2H4.00738L3.86454 14.8292L0.500692 17.8727L0.5105 1.90031ZM4.7 10H12.1V10.9H4.7V10ZM4.7 7.15H16.3V8.05H4.7V7.15ZM4.7 4.3H16.3V5.2H4.7V4.3Z"
                  fill="black"
                  stroke="black"
                />
              </svg>
              <p className="tracking-wide">Lorem Ipsum is simp....</p>
            </div>

            <div className="h-full bg-[#BCBBBB] w-12 rounded-r-2xl flex justify-center items-center cursor-pointer ">
              <svg
                width="19"
                height="22"
                viewBox="0 0 19 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.3 7.66667L15.348 16.9978C15.2041 18.4122 15.1327 19.1189 14.804 19.6533C14.5157 20.1238 14.0918 20.5 13.5857 20.7344C13.0111 21 12.288 21 10.8373 21H8.16267C6.71313 21 5.98893 21 5.41433 20.7333C4.90779 20.4991 4.48343 20.1228 4.19487 19.6522C3.86847 19.1189 3.79593 18.4122 3.65087 16.9978L2.7 7.66667M11.2 14.8889V9.33333M7.8 14.8889V9.33333M1 4.88889H6.23033M6.23033 4.88889L6.6678 1.92C6.79473 1.38 7.2526 1 7.77847 1H11.2215C11.7474 1 12.2041 1.38 12.3322 1.92L12.7697 4.88889M6.23033 4.88889H12.7697M12.7697 4.88889H18"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div
            className="w-[340px] h-14 flex items-center rounded-2xl justify-between  bg-[#F6F6F6] mt-6"
            style={{ boxShadow: "0px 0px 5px 0px #00000040" }}
          >
            <div className="flex items-center gap-x-4 ml-2 p-4">
              <svg
                width="21"
                height="19"
                viewBox="0 0 21 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.1 1.4H1.6V1.9V14.4115V15.5382L2.43546 14.7823L3.52112 13.8H18.9H19.4V13.3V1.9V1.4H18.9H2.1ZM0.5105 1.90031V1.9C0.5105 1.17396 1.17628 0.5 2.1 0.5H18.9C19.8271 0.5 20.5 1.17705 20.5 1.9V13.3C20.5 14.023 19.8271 14.7 18.9 14.7H4.2H4.00738L3.86454 14.8292L0.500692 17.8727L0.5105 1.90031ZM4.7 10H12.1V10.9H4.7V10ZM4.7 7.15H16.3V8.05H4.7V7.15ZM4.7 4.3H16.3V5.2H4.7V4.3Z"
                  fill="black"
                  stroke="black"
                />
              </svg>
              <p className="tracking-wide">Lorem Ipsum is simp....</p>
            </div>

            <div className="h-full bg-[#BCBBBB] w-12 rounded-r-2xl flex justify-center items-center cursor-pointer ">
              <svg
                width="19"
                height="22"
                viewBox="0 0 19 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.3 7.66667L15.348 16.9978C15.2041 18.4122 15.1327 19.1189 14.804 19.6533C14.5157 20.1238 14.0918 20.5 13.5857 20.7344C13.0111 21 12.288 21 10.8373 21H8.16267C6.71313 21 5.98893 21 5.41433 20.7333C4.90779 20.4991 4.48343 20.1228 4.19487 19.6522C3.86847 19.1189 3.79593 18.4122 3.65087 16.9978L2.7 7.66667M11.2 14.8889V9.33333M7.8 14.8889V9.33333M1 4.88889H6.23033M6.23033 4.88889L6.6678 1.92C6.79473 1.38 7.2526 1 7.77847 1H11.2215C11.7474 1 12.2041 1.38 12.3322 1.92L12.7697 4.88889M6.23033 4.88889H12.7697M12.7697 4.88889H18"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1200px] mx-auto p-10 h-screen overflow-y-scroll">
        <h1 className="font-semibold my-7 tracking-wider text-[#0B0C0D] text-2xl">
          Hi, I need help
        </h1>
        <div className="w-full mb-3 ">
          <div className="bg-[#F1F1F1] rounded-tl-2xl rounded-tr-2xl rounded-br-2xl max-w-[430px] p-3">
            <h1 className="text-[#2D63C4] font-semibold">Alan</h1>
            <p className="text-[#4F4F4F]">
              Hi, I need help understanding a non-compete agreement I signed
              with my previous employer. Can you explain what it means?
            </p>
          </div>
        </div>
        <div className="w-full mb-3 flex justify-end ">
          <div className="bg-[#F1F1F1] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl max-w-[500px] p-3">
            <h1 className="text-[#2D63C4] font-semibold">UndrRight</h1>
            <p className="text-[#4F4F4F]">
              Sure! A non-compete agreement is a contract where you agree not to
              work for a competitor or start a competing business for a certain
              period after leaving your current job. It typically includes
              specific restrictions on the type of work, geographic area, and
              time frame. Would you like to know more about your specific
              agreement?
            </p>
          </div>
        </div>
        <div className="w-full mb-3 ">
          <div className="bg-[#F1F1F1] rounded-tl-2xl rounded-tr-2xl rounded-br-2xl max-w-[430px] p-3">
            <h1 className="text-[#2D63C4] font-semibold">Alan</h1>
            <p className="text-[#4F4F4F]">
              Yes, it says I can’t work in the same industry for 2 years. Is
              that enforceable?
            </p>
          </div>
        </div>
        <div className="w-full mb-3 flex justify-end ">
          <div className="bg-[#F1F1F1] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl max-w-[500px] p-3">
            <h1 className="text-[#2D63C4] font-semibold">UndrRight</h1>
            <p className="text-[#4F4F4F]">
              The enforceability of non-compete agreements can vary depending on
              the state or country you’re in. Generally, courts consider factors
              like the duration, geographic scope, and the nature of the
              restrictions. A 2-year restriction can be enforceable
            </p>
          </div>
        </div>
        <div className="w-full mb-3 ">
          <div className="bg-[#F1F1F1] rounded-tl-2xl rounded-tr-2xl rounded-br-2xl max-w-[430px] p-3">
            <h1 className="text-[#2D63C4] font-semibold">Alan</h1>
            <p className="text-[#4F4F4F]">
              Thanks! What should I do if I want to challenge it?
            </p>
          </div>
        </div>
        <div className="w-full mb-3 flex justify-end ">
          <div className="bg-[#F1F1F1] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl max-w-[500px] p-3">
            <h1 className="text-[#2D63C4] font-semibold">UndrRight</h1>
            <p className="text-[#4F4F4F]">
              If you believe the non-compete is too restrictive, you can
              challenge it in court. This usually involves proving that the
              agreement is not reasonable or that it unfairly limits your
              ability to work. You might also be able to negotiate with your
              former employer to modify the terms.
            </p>
          </div>
        </div>
        <div className="w-full mb-3 ">
          <div className="bg-[#F1F1F1] rounded-tl-2xl rounded-tr-2xl rounded-br-2xl max-w-[430px] p-3">
            <h1 className="text-[#2D63C4] font-semibold">Alan</h1>
            <p className="text-[#4F4F4F]">Yes, that would be helpful.</p>
          </div>
        </div>
        <div className="w-full mb-3 flex justify-end ">
          <div className="bg-[#F1F1F1] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl max-w-[500px] p-3">
            <h1 className="text-[#2D63C4] font-semibold">UndrRight</h1>
            <p className="text-[#4F4F4F]">
              Great! I’ll forward your details to one of our legal experts who
              can help you with your case. You should hear from them soon. In
              the meantime, feel free to ask me any other questions you may
              have.
            </p>
          </div>
        </div>

        <div
          className="rounded-3xl h-20 flex items-center mt-28 mb-9 px-4 relative"
          style={{ boxShadow: "0px 4px 9px 5px #0000001A" }}
        >
          <svg
            width="20"
            height="24"
            viewBox="0 0 20 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-3"
          >
            <path
              d="M19.3126 11.3438C19.3935 11.4295 19.4576 11.5312 19.5014 11.6433C19.5452 11.7553 19.5677 11.8754 19.5677 11.9966C19.5677 12.1179 19.5452 12.238 19.5014 12.35C19.4576 12.462 19.3935 12.5638 19.3126 12.6495L10.3932 22.1081C9.2513 23.3196 7.70267 24.0001 6.08794 24C4.47322 23.9999 2.92467 23.3192 1.78296 22.1075C0.641248 20.8959 -0.000101904 19.2527 1.21447e-08 17.5393C0.000101928 15.8259 0.641647 14.1828 1.7835 12.9713L12.5738 1.3534C13.389 0.487482 14.495 0.000649613 15.6485 6.49643e-07C16.802 -0.000648313 17.9085 0.484939 18.7245 1.34994C19.5406 2.21494 19.9994 3.3885 20 4.61244C20.0006 5.83639 19.543 7.01046 18.7278 7.87638L7.93527 19.4943C7.44515 20.0144 6.78039 20.3066 6.08724 20.3066C5.3941 20.3066 4.72934 20.0144 4.23921 19.4943C3.74908 18.9742 3.47373 18.2689 3.47373 17.5334C3.47373 16.7979 3.74908 16.0925 4.23921 15.5725L13.2946 5.81163C13.3739 5.72184 13.4693 5.6498 13.5753 5.59974C13.6813 5.54967 13.7956 5.52261 13.9115 5.52013C14.0275 5.51765 14.1428 5.53982 14.2505 5.58531C14.3583 5.63081 14.4564 5.69872 14.5391 5.78505C14.6217 5.87138 14.6873 5.97439 14.7319 6.088C14.7765 6.20162 14.7992 6.32355 14.7987 6.44662C14.7982 6.56969 14.7745 6.69142 14.729 6.80463C14.6836 6.91784 14.6172 7.02026 14.5338 7.10585L5.47739 16.877C5.39631 16.9624 5.33186 17.0639 5.28773 17.1757C5.2436 17.2874 5.22065 17.4074 5.2202 17.5286C5.21974 17.6498 5.24179 17.7699 5.28508 17.882C5.32837 17.9942 5.39206 18.0962 5.4725 18.1822C5.55294 18.2683 5.64857 18.3366 5.75392 18.3835C5.85927 18.4303 5.97228 18.4546 6.0865 18.4551C6.20072 18.4556 6.31391 18.4322 6.41961 18.3863C6.52531 18.3403 6.62144 18.2728 6.70253 18.1874L17.4939 6.57524C17.9841 6.05624 18.2598 5.3519 18.2605 4.61717C18.2613 3.88243 17.9869 3.17749 17.4978 2.65742C17.0086 2.13735 16.3448 1.84475 15.6524 1.84399C14.96 1.84324 14.2956 2.13438 13.8055 2.65338L3.01733 14.2667C2.61319 14.6949 2.29248 15.2033 2.07351 15.763C1.85454 16.3226 1.74161 16.9226 1.74115 17.5286C1.7407 18.1345 1.85273 18.7347 2.07086 19.2947C2.28899 19.8548 2.60894 20.3637 3.01244 20.7926C3.41595 21.2214 3.8951 21.5617 4.42255 21.7941C4.95 22.0264 5.51541 22.1462 6.0865 22.1467C6.65759 22.1472 7.22319 22.0283 7.75098 21.7969C8.27878 21.5654 8.75844 21.2259 9.16258 20.7978L18.0831 11.3392C18.2468 11.1668 18.4682 11.0705 18.6988 11.0714C18.9293 11.0723 19.1501 11.1702 19.3126 11.3438Z"
              fill="black"
            />
          </svg>
          <input
            type="text"
            placeholder="Type your message here"
            className="border-none w-full h-full pl-6 pr-10 text-[#4F4F4F] rounded-3xl focus:outline-none"
          />
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-6 cursor-pointer"
          >
            <path
              d="M25.9418 1.11442C26.0009 0.966769 26.0154 0.805018 25.9834 0.649221C25.9515 0.493424 25.8745 0.350432 25.762 0.237973C25.6496 0.125514 25.5066 0.048533 25.3508 0.0165737C25.195 -0.0153855 25.0333 -0.000917453 24.8856 0.0581841L1.24755 9.51394H1.24593L0.511451 9.80644C0.37234 9.86193 0.251274 9.95479 0.161626 10.0748C0.0719778 10.1947 0.017237 10.3372 0.00345011 10.4863C-0.0103368 10.6354 0.0173668 10.7855 0.0835006 10.9199C0.149634 11.0543 0.251625 11.1677 0.378205 11.2478L1.04443 11.6703L1.04606 11.6735L9.16265 16.8377L14.3267 24.9545L14.33 24.9577L14.7525 25.624C14.8328 25.7501 14.9463 25.8516 15.0806 25.9173C15.2149 25.983 15.3647 26.0104 15.5135 25.9965C15.6624 25.9825 15.8045 25.9278 15.9242 25.8383C16.0439 25.7487 16.1367 25.6279 16.1922 25.4891L25.9418 1.11442ZM22.9633 4.18563L10.786 16.3632L10.4366 15.814C10.3726 15.7132 10.2872 15.6278 10.1864 15.5637L9.63713 15.2144L21.8145 3.03677L23.7286 2.27141L22.9633 4.18563Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Page;
