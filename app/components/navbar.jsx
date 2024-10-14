"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../images/logo.png";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu

  return (
    <nav className=" fixed w-full top-0 start-0 z-40">
      <div className="flex flex-wrap items-center justify-between xl:p-5 p-3 rounded-md max-w-customm bg-black text-white m-auto">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse xl:w-48 w-40 "
        >
          <Image
            src={logo}
            width={200}
            height={150}
            alt="Picture of the author"
          />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-black bg-white hover:bg-[#2f2f31] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-4 py-2 text-center  transition duration-300 font-sans xl:text-lg  leading-6 tracking-wide mr-2 text-base"
            onClick={() => {
              router.push("/");
            }}
          >
            Log In
          </button>
          <button
            type="button"
            className="text-white bg-[#2f2f31] hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg  px-4 py-2 text-center transition duration-300 font-sans xl:text-lg text-base font-medium leading-6 tracking-wide ml-2 "
            onClick={() => {
              router.push("/pages/signup");
            }}
          >
            Sign Up
          </button>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen} // Link state to aria-expanded
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu visibility
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block mt-6" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1 bg-black text-white`} // Added "mt-6" to give margin-top when the menu is open
          id="navbar-sticky"
        >
          <nav className="md:ml-auto flex flex-wrap items-center justify-center ml-5 font-sans text-base xl:font-bold font-medium leading-6 tracking-wide ">
            <a
              className="mx-6 hover:text-[#55F4EA] cursor-pointer"
              href="/pages/Home"
            >
              Home
            </a>
            <a
              className="mx-6 hover:text-[#55F4EA] cursor-pointer"
              href="/pages/about"
            >
              About Us
            </a>
            <a
              className="mx-6 hover:text-[#55F4EA] cursor-pointer"
              href="/pages/feature"
            >
              Features
            </a>
            <a
              className="mx-6 hover:text-[#55F4EA] focus-within:text-[#55F4EA] cursor-pointer"
              href="/pages/pricing"
            >
              Pricing
            </a>
            <a
              className="mx-6 hover:text-[#55F4EA] focus:text-[#55F4EA] cursor-pointer"
              href="/pages/faqs"
            >
              FAQs
            </a>
            <a
              className="mx-6 hover:text-[#55F4EA] focus:text-[#55F4EA] cursor-pointer"
              href="/pages/contact"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
