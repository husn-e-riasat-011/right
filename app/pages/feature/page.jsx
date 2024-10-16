import ArticalCards from "@/app/components/articalCards";
import Navbar from "@/app/components/navbar";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import imageone from "../../images/icon1.png";

import Videocomponent from "@/app/components/videocomponent";
import Footer from "@/app/components/footer";
import Betterway from "@/app/components/betterway";

const Page = () => {
  return (
    <div className="sm:px-5 px-2">
      <Navbar />
      <nav className="bg-[#F9F9F9] text-black py-6 px-6 mt-32 max-w-customm m-auto rounded-sm">
        <div className="flex items-center space-x-4">
          <Link href={"/"} className="font-bold">
            Home
          </Link>
          <span className="border-l border-black h-6"></span>{" "}
          {/* Line between links */}
          <span className="text-gray-400">Feature</span>
        </div>
      </nav>
      <ArticalCards />
      <section
        className="w-full rounded-b-2xl "
        style={{
          background:
            "radial-gradient(100% 100% at 52.08% 100%, #363636 0%, #141414 43.58%, #050505 100%)",
        }}
      >
        <div className=" font-sans max-w-customm m-auto flex flex-col items-center justify-center text-white relative py-32 rounded-b-2xl mb-3">
          <div class="flex wrp justify-center items-center">
            <div class="p-4  ">
              <h1 class="font-medium mt-2 md:text-5xl text-3xl tracking-wider text-white">
                Revolutionize Your Legal Experience
              </h1>
              <p class="w-full mt-4 md:text-2xl text-xl tracking-wideer">
                Our platform transforms the way you approach legal tasks,
                offering instant advice, automated document creation, and
                comprehensive legal research—all at your fingertips. Say goodbye
                to lengthy processes and high costs, and embrace a smarter, more
                efficient way to manage your legal matters. Whether you&aposre a
                business owner, freelancer, or individual, our AI-powered tools
                are designed to simplify your legal journey and provide the
                support you need, whenever you need it.
              </p>
            </div>
            <div class="flex gap-10 justify-center w-full md:w-2/3  md:mt-4 px-6 ">
              <div>
                <div class="w-60 p-5 mb-10 flex flex-col shadow-custom rounded-md bg-[#2F2F31]">
                  <Image
                    src={imageone}
                    width={70}
                    height={70}
                    alt="Picture of the author"
                  />
                  <h1 class="font-bold my-2 tracking-wide">
                    AI Legal Consultation
                  </h1>
                  <p className="text-[#CECECE]">
                    Receive expert legal advice instantly. Our AI-powered
                    consultation service analyzes your query.
                  </p>
                </div>
                <div class="w-60 p-5 mb-2 flex flex-col  shadow-custom rounded-md bg-[#2F2F31]">
                  <Image
                    src={imageone}
                    width={70}
                    height={70}
                    alt="Picture of the author"
                  />
                  <h1 class="font-bold my-2 tracking-wide">Legal Research</h1>
                  <p className="text-[#CECECE]">
                    Empower your decisions with thorough legal research. Our AI
                    scours a vast database of legal precedents,
                  </p>
                </div>
              </div>
              <div>
                <div class="w-60 p-5 my-10 flex flex-col shadow-custom rounded-md bg-[#2F2F31] mt-4 md:mt-8">
                  <Image
                    src={imageone}
                    width={70}
                    height={70}
                    alt="Picture of the author"
                  />
                  <h1 class="font-bold my-2 tracking-wide">
                    Automated Drafting
                  </h1>
                  <p className="text-[#CECECE]">
                    Draft legal documents with ease. Our AI generates accurate
                    contracts, agreements, and more,
                  </p>
                </div>
                <div class="w-60 p-5 mb-2 flex flex-col  shadow-custom rounded-md bg-[#2F2F31] ">
                  <Image
                    src={imageone}
                    width={70}
                    height={70}
                    alt="Picture of the author"
                  />
                  <h1 class="font-bold my-2 tracking-wide">
                    Contract Management
                  </h1>
                  <p className="text-[#CECECE]">
                    Streamline your contract lifecycle. Our platform allows you
                    to store, track, and manage all your contracts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits */}
      <div className="bg-white py-20">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="   w-[100%]  text-[#000000]  m-auto md:text-5xl text-4xl font-bold leading-10 tracking-wide text-center my-6">
              Benefits of Using Our AI-Powered Legal Platform
            </h2>
            <p className="  text-[#535353] mt-4 md:w-[80%] lg:w-[84%] w-[95%]  m-auto text-xl sm:text-2xl font-normal leading-8 tracking-wide text-center">
              Experience the future of legal services with our AI-powered
              platform. Designed to save you time, reduce costs, and improve
              accuracy, our solutions empower you to handle legal tasks with
              greater efficiency and confidence
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 max-w-customm m-auto">
          {/* first card */}
          <div class="max-w-md bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
            <a href="#" className="mt-10">
              <Image src={imageone} alt="pic" />
            </a>
            <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                Save Time & Resources
              </h5>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
                Our automated tools streamline complex legal processes, reducing
                the time and effort required to manage legal tasks. Focus on
                what matters most while our platform handles the details
              </p>
            </div>
          </div>
          {/* second one */}
          <div class="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
            <a href="#" className="mt-10">
              <Image src={imageone} alt="nothing" />
            </a>
            <div class="p-5 text-center">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Increase Accuracy & Compliance
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Work seamlessly with your team or clients. Our platform’s
                collaboration tools allow for easy sharing of documents,
                real-time updates, and efficient communication, ensuring
                everyone stays on same.
              </p>
            </div>
          </div>
          {/* third one */}
          <div class="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
            <a href="#" className="mt-10">
              <Image src={imageone} alt="" />
            </a>
            <div class="p-5 text-center">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                24/7 Accessibility
              </h5>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Access legal support whenever you need it. Whether you&aposre
                working late or on the go, our platform is available around the
                clock, providing you with reliable legal assistance at any time.
              </p>
            </div>
          </div>
          {/* forth */}
          <div class="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
            <a href="#" className="mt-10">
              <Image src={imageone} alt="" />
            </a>
            <div class="p-5 text-center">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Cost-Effective Solutions
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Enjoy high-quality legal services without the hefty price tag.
                Our platform offers affordable solutions that give you access to
                expert legal tools and advice, making professional legal support
                accessible to everyone.
              </p>
            </div>
          </div>
          {/* fiveth */}
          <div class="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
            <a href="#" className="mt-10">
              <Image src={imageone} alt="" />
            </a>
            <div class="p-5 text-center">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Enhance Collaboration
              </h5>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Work seamlessly with your team or clients. Our platform’s
                collaboration tools allow for easy sharing of documents,
                real-time updates, and efficient communication, ensuring
                everyone stays on same.
              </p>
            </div>
          </div>
          {/* 6th */}
          <div class="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
            <a href="#" className="mt-10">
              <Image src={imageone} alt="" />
            </a>
            <div class="p-5 text-center">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Secure and Confidential
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Your data is protected with state-of-the-art security measures,
                ensuring that all your legal information and documents remain
                confidential and safe from unauthorized access.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* a better way to work */}
      <Betterway />
      {/* video section */}
      <Videocomponent />
      {/* footer section */}
      <Footer />
    </div>
  );
};

export default Page;
