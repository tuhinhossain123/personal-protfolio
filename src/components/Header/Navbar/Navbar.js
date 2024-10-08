"use client";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import img from "../../../app/images/Subtract.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  // Handle menu toggle
  const handleMenu = () => {
    setMenu(!menu);
  };

  // Handle closing the menu after clicking a link
  const handleLinkClick = () => {
    setMenu(false);
  };

  return (
    <div className="left-0 w-full z-10 top-0 pt-6 lg:pt-16 px-4 md:px-6 lg:px-6 bg-transparent">
      <div className="container max-w-[1420px] mx-auto">
        <nav className="flex items-center justify-between">
          <div className="flex items-center justify-between w-full px-3 lg:px-0 lg:w-auto">
            <div className="flex items-center gap-5">
              {/* logo and name here */}
              <div>
                <Image src={img} alt="Logo" width={67} height={67} />
              </div>
              <div className="hidden md:block">
                <h2>
                  <span className="text-5xl font-bold">M</span>
                  <span className="text-5xl font-normal">umair</span>
                </h2>
              </div>
            </div>
            <div className="lg:hidden">
              <button
                onClick={handleMenu}
                className="text-white text-5xl md:text-6xl"
              >
                {menu ? "" : <IoMenuOutline />}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-[38px]">
            {/* Nav All Link Here */}
            <div>
              <ul
                className={`lg:static fixed bg-[#1E1E1E] lg:bg-transparent flex flex-col lg:flex-row items-center space-x-0 lg:space-x-10 space-y-10 lg:space-y-0 pt-6 lg:pt-0 top-0 right-0 lg:right-auto w-full md:w-full lg:w-auto h-screen lg:h-auto transition-all duration-500 ease-in-out ${
                  menu ? "right-0" : "-right-full"
                }`}
              >
                <div className="lg:hidden flex justify-end w-full pt-5 pr-14">
                  <RxCross2
                    onClick={handleMenu}
                    className="text-5xl md:text-6xl cursor-pointer"
                  />
                </div>
                <li className="mb-8 lg:mb-0">
                  <Link
                    to="/"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-xl md:text-3xl lg:text-xl font-normal  hover:text-[#FD6F00]  duration-500 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-8 lg:mb-0">
                  <Link
                    to="/"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-xl md:text-3xl lg:text-xl font-normal  hover:text-[#FD6F00]  duration-500 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    About Me
                  </Link>
                </li>
                <li className="mb-8 lg:mb-0">
                  <Link
                    to="/"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-xl md:text-3xl lg:text-xl font-normal  hover:text-[#FD6F00]  duration-500 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    Services
                  </Link>
                </li>
                <li className="mb-8 lg:mb-0">
                  <Link
                    to="/"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-xl md:text-3xl lg:text-xl font-normal  hover:text-[#FD6F00]  duration-500 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    Projects
                  </Link>
                </li>
                <li className="mb-8 lg:mb-0">
                  <Link
                    to="/"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-xl md:text-3xl lg:text-xl font-normal  hover:text-[#FD6F00]  duration-500 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    Testimonials
                  </Link>
                </li>
                <li className="mb-8 lg:mb-0">
                  <Link
                    to="/"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-xl md:text-3xl lg:text-xl font-normal  hover:text-[#FD6F00]  duration-500 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* download CV Here */}
            <div className="hidden lg:block">
              <button className="bg-primary px-[18px] py-4 rounded-md text-xl font-normal">
                Download CV
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
