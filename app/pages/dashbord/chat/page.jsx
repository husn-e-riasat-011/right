import Sidebar from "@/app/components/sidebar";
import React from "react";

const Page = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <h1 className="text-center text-3xl mt-5 tracking-wider w-full">
          This a chat & message page
        </h1>
      </div>
    </div>
  );
};

export default Page;
