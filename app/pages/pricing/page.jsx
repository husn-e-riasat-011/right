import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import PricingCards from "@/app/components/pricingCards";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="sm:px-5 px-2">
      <Navbar />
      <nav className="bg-[#F9F9F9] text-black py-6 px-6 mt-32 max-w-customm m-auto rounded-sm mb-48">
        <div className="flex items-center space-x-4">
          <Link href={"/"} className="font-bold">
            Home
          </Link>
          <span className="border-l border-black h-6"></span>{" "}
          {/* Line between links */}
          <span className="text-gray-400">Pricing</span>
        </div>
      </nav>
      {/* pricing cards */}
      <PricingCards />
      <div className="mt-72">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
