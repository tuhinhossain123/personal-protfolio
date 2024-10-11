"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import img from "../../../app/images/Subtract.png";
import Link from "next/link";



const Navbar = () => {
  let [open, setOpen] = useState(false);

  return (
    <div className="max-w-[1420px] mx-auto top-0 z-10 bg-[#1E1E1E] left-0">
      <div className="md:flex items-center justify-between py-4  lg:py-[61px] px-7 md:px-10 lg:px-4">
        <Link href="#1" className="cursor-pointer flex items-center gap-5">
          <div>
            <Image src={img} alt="Logo" width={67} height={67} />
          </div>
          <div className="hidden md:block font-poppins">
            <h2>
              <span className="text-5xl font-bold">M</span>
              <span className="text-5xl font-normal">umair</span>
            </h2>
          </div>
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="text-5xl absolute right-8 top-6 cursor-pointer lg:hidden text-white"
        >
          {open ? <RxCross2 /> : <IoMenuOutline />}
        </div>

        <div>
          <ul
            className={`lg:flex lg:items-center gap-10 text-center py-10 lg:py-0 absolute lg:static bg-[#1E1E1E] text-white z-50 left-0 w-full lg:w-auto  transition-all duration-500 ease-in ${
              open ? "top-[6rem] " : "top-[-590px]"
            }`}
          >
            <li className="mb-8 lg:mb-0">
              <Link
                href="#1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-xl md:text-3xl lg:text-xl font-poppins font-normal  hover:text-[#FD6F00]  duration-500 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-xl md:text-3xl lg:text-xl font-poppins font-normal  hover:text-[#FD6F00]  duration-500 cursor-pointer"
              >
                About
              </Link>
            </li>
            <li className="mb-8 lg:mb-0">
              <Link
                href="#3"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="text-xl md:text-3xl lg:text-xl font-poppins font-normal  hover:text-[#FD6F00]  duration-500 cursor-pointer"
              >
                Services
              </Link>
            </li>
            <li className="mb-8 lg:mb-0">
              <Link
                href="#4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-xl md:text-3xl lg:text-xl font-poppins font-normal  hover:text-[#FD6F00]  duration-500 cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li className="mb-8 lg:mb-0">
              <Link
                href="#5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={300}
                className="text-xl md:text-3xl lg:text-xl font-poppins font-normal  hover:text-[#FD6F00]  duration-500 cursor-pointer"
              >
                Testimonials
              </Link>
            </li>
            <li className="mb-8 lg:mb-0">
              <Link
                href="#6"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-xl md:text-3xl lg:text-xl font-poppins font-normal  hover:text-[#FD6F00]  duration-500 cursor-pointer"
              >
                Contact
              </Link>
            </li>
            <button className="bg-primary px-[18px] py-4 rounded-md text-xl font-poppins font-normal">
              Download CV
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
