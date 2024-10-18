"use client";
import Navbar from "./components/navbar";
import Image from "next/image";
import logo from "./images/logo.png";
import Link from "next/link";
import Footer from "./components/footer";
import Sideherosection from "./components/sideherosection";
import { useRouter } from "next/navigation"; // Import useRouter
import Sidebar from "./pages/dashbord/page";

export default function Home() {
  const router = useRouter(); // Use useRouter hook

  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font overflow-hidden w-full m-auto">
        <div className="flex flex-wrap-reverse justify-center items-center py-24 my-24 mx-auto max-w-customm">
          <Sideherosection />
          <div className="sm:p-12 p-6 lg:w-1/2 flex flex-col items-center w-full justify-center">
            <div
              className="w-full text-white rounded-lg shadow dark:border md:mt-0 md:max-w-lg m-auto py-10"
              style={{
                background:
                  "radial-gradient(100% 100% at 52.08% 100%, #363636 0%, #141414 43.58%, #050505 100%)",
              }}
            >
              <a
                href="/"
                className="flex items-center space-x-3 rtl:space-x-reverse justify-center"
              >
                <Image src={logo} width={150} height={130} alt="Logo" />
              </a>
              <div className="p-4 space-y-4 md:space-y-6 sm:p-8">
                <p className="text-center tracking-wider">Login here</p>
                <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white text-center text-white">
                  Welcome to <span className="text-[#55F4EA]">UndrRight</span>
                </h1>
                <form className="space-y-4 md:space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium dark:text-white text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium dark:text-white text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        />
                      </div>
                      <div className="ml-2 text-sm">
                        <label
                          htmlFor="remember"
                          className="dark:text-gray-300 text-white tracking-tight sm:tracking-wide"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <Link
                      href="/pages/forgotpassword"
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 tracking-tight sm:tracking-wide"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      onClick={Sidebar}
                      className="w-28 text-black bg-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 tracking-wider"
                    >
                      Log in
                    </button>
                  </div>

                  <p className="text-center font-light text-white">
                    Don’t have an account yet?{" "}
                    <Link
                      href="/pages/signup"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-[#55F4EA]"
                    >
                      Sign up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
