// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import logo from "../../assests/fav.png"

const Navbar = () => {
  const[open,setOpen]=useState(false)

  const menubar=()=>{
          setOpen(!open)
  }
  return (
    <div className="max-w-[1920px] mx-auto 3xl:px-[275px] px-3 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-40">
      <nav className="bg-white  relative">
        <div className="flex gap-20 items-center justify-between  mx-auto p-4">
          <a href="#" className="flex items-center">
            <img
              src={logo}
              className="h-8 mr-3"
              alt="Logo"
            />
            <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white text-[#00A7E5]">
              Brain-Designer
            </span>
          </a>
          
          <div className="flex items-center md:hidden order-2">
            <button
               onClick={()=>menubar()}
              data-collapse-toggle="mega-menu"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white bg-[#00A7E5]  rounded-lg md:hidden focus:outline-none"
              aria-controls="mega-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              {
                open?<span className="text-4xl"><i class='bx bx-x'></i></span>:<svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
              }
          
            </button>
          </div>
          
          <div
           
            className="items-center justify-between hidden w-full md:flex md:w-auto "
          >
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:flex-wrap items-center md:gap-8 md:mt-0 text-[#00A7E5]">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 md:p-0  "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="group relative">
                <button
                  id="mega-menu-dropdown-button"
                  
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium md:w-auto h  md:px-0  md:p-0"
                >
                  Services{" "}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="mega-menu-dropdown"
                  className="absolute z-10 left-[-80px]   hidden group-hover:grid min-w-[400px] grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md  md:grid-cols-3 "
                >
                  <div className="p-4 pb-0 text-[#00A7E5]  md:pb-4">
                    <ul
                      className="space-y-4 text-[#00A7E5]"
                      aria-labelledby="mega-menu-dropdown-button"
                    >
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=" "
                        >
                          Library
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Resources
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Pro Version
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 pb-0 md:pb-4 ">
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="#"
                          className=" "
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Newsletter
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Playground
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          License
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Support Center
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Terms
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="group relative">
                <button
                  id="mega-menu-dropdown-button"
                  
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium md:w-auto h  md:px-0  md:p-0"
                >
                  Industries{" "}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="mega-menu-dropdown"
                  className="absolute z-10 left-[-80px]   hidden group-hover:grid min-w-[400px] grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md  md:grid-cols-3 "
                >
                  <div className="p-4 pb-0 text-[#00A7E5]  md:pb-4">
                    <ul
                      className="space-y-4 text-[#00A7E5]"
                      aria-labelledby="mega-menu-dropdown-button"
                    >
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=" "
                        >
                          Library
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Resources
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Pro Version
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 pb-0 md:pb-4 ">
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="#"
                          className=" "
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Newsletter
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Playground
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          License
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Support Center
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Terms
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 md:p-0"
                >
                  Case Study
                </a>
              </li>
              <li className="group relative">
                <button
                  id="mega-menu-dropdown-button"
                  
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium md:w-auto h  md:px-0  md:p-0"
                >
                  About{" "}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="mega-menu-dropdown"
                  className="absolute z-10 left-[-280px]   hidden group-hover:grid min-w-[400px] grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md  md:grid-cols-3 "
                >
                  <div className="p-4 pb-0 text-[#00A7E5]  md:pb-4">
                    <ul
                      className="space-y-4 text-[#00A7E5]"
                      aria-labelledby="mega-menu-dropdown-button"
                    >
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=" "
                        >
                          Library
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Resources
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Pro Version
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 pb-0 md:pb-4 ">
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="#"
                          className=" "
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Newsletter
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Playground
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          License
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Support Center
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Terms
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 md:p-0 "
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 md:p-0"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>


        </div>
      </nav>


      <div
            id="mega-menu"
            className="items-center justify-between hidden w-full bg-slate-100 absolute left-0 z-50"
          >
            <ul className="flex flex-col mt-4 font-medium divide-y-2  text-[#00A7E5] md:hidden">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 md:p-0  "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="group relative">
                <button
                  id="mega-menu-dropdown-button"
                  
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium md:w-auto h  md:px-0  md:p-0"
                >
                  Services{" "}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="mega-menu-dropdown"
                  className=" z-10  hidden group-hover:grid w-full grid-cols-2 text-sm bg-black/50 border border-gray-100  shadow-md  md:grid-cols-3 pb-3"
                >
                  <div className="p-4 pb-0  md:pb-4">
                    <ul
                      className="space-y-4 text-white"
                      aria-labelledby="mega-menu-dropdown-button"
                    >
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=" "
                        >
                          Library
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Resources
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Pro Version
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 pb-0 md:pb-4 text-white">
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="#"
                          className=" "
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Newsletter
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Playground
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          License
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                </div>
              </li>
              <li className="group relative">
                <button
                  id="mega-menu-dropdown-button"
                  
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium md:w-auto h  md:px-0  md:p-0"
                >
                  Industries{" "}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="mega-menu-dropdown"
                  className=" z-10  hidden group-hover:grid w-full grid-cols-2 text-sm bg-black/50 border border-gray-100  shadow-md  md:grid-cols-3 pb-3"
                >
                  <div className="p-4 pb-0  md:pb-4">
                    <ul
                      className="space-y-4 text-white"
                      aria-labelledby="mega-menu-dropdown-button"
                    >
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=" "
                        >
                          Library
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Resources
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Pro Version
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 pb-0 md:pb-4 text-white">
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="#"
                          className=" "
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Newsletter
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Playground
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          License
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 md:p-0"
                >
                  Case Study
                </a>
              </li>
              <li className="group relative">
                <button
                  id="mega-menu-dropdown-button"
                  
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium md:w-auto h  md:px-0  md:p-0"
                >
                  About{" "}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="mega-menu-dropdown"
                  className=" z-10  hidden group-hover:grid w-full grid-cols-2 text-sm bg-black/50 border border-gray-100  shadow-md  md:grid-cols-3 pb-3"
                >
                  <div className="p-4 pb-0  md:pb-4">
                    <ul
                      className="space-y-4 text-white"
                      aria-labelledby="mega-menu-dropdown-button"
                    >
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=" "
                        >
                          Library
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Resources
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Pro Version
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 pb-0 md:pb-4 text-white">
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="#"
                          className=" "
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Newsletter
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          Playground
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=""
                        >
                          License
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 md:p-0 "
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 md:p-0"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
    </div>
  );
};

export default Navbar;
