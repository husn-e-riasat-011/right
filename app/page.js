import Navbar from "./components/navbar";
import Image from "next/image";
import logo from "./images/logo.png";
import Link from "next/link";
import Footer from "./components/footer";
import Sideherosection from "./components/sideherosection";

export default function Home() {
  return (
    <>
      <Navbar />
      <section class="text-gray-600 body-font overflow-hidden  w-full m-auto">
        <div class="flex flex-wrap-reverse justify-center items-center  py-24 my-24 mx-auto max-w-customm">
          <Sideherosection />
          <div class="p-12 lg:w-1/2 flex flex-col items-center w-full justify-center">
            <div class="w-full bg-black text-white rounded-lg shadow dark:border md:mt-0 md:max-w-lg m-auto py-10">
              <a
                href="/"
                class="flex items-center space-x-3 rtl:space-x-reverse justify-center"
              >
                <Image
                  src={logo}
                  width={150}
                  height={130}
                  alt="Picture of the author"
                />
              </a>
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <p className="text-center tracking-wider">Login here</p>
                <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white text-center text-white">
                  Welcome to <span className="text-[#55F4EA]">UndrRight</span>
                </h1>
                <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium  dark:text-white text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      class="block mb-2 text-sm font-medium  dark:text-white text-white"
                    >
                      Password
                    </label>
                    <input
                      type="text"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <div class="ml-3 text-sm">
                        <label
                          for="remember"
                          class="dark:text-gray-300 text-white"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="/pages/forgotpassword"
                      class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      class="w-28 text-black bg-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 tracking-wider"
                    >
                      Log in
                    </button>
                  </div>

                  <p class="text-center font-light  dark:text-gray-400 text-white">
                    Don’t have an account yet?{" "}
                    <Link
                      href={"/pages/signup"}
                      class="font-medium text-primary-600 hover:underline dark:text-primary-500 text-[#55F4EA]"
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
