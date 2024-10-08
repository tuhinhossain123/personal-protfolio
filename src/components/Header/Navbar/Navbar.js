"use client";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaPhone } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import img from "../../../app/images/Subtract.png";


const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => setMenu(!menu);
  const handleLinkClick = () => setMenu(false);

  return (
    <div className="w-full left-0 z-10 top-0 pt-16">
      <div className="max-w-[1420px] mx-auto px-4 md:px-8">
        <nav className="flex justify-between items-center">
          <div className="flex items-center justify-between w-full lg:w-auto">
            <div className="flex items-center gap-5">
              <div>
                <Image src={img} alt="" width={67} height={67}></Image>
              </div>
              <div className="hidden md:block">
                <h2>
                  <span className="text-5xl font-bold">M</span>
                  <span className="text-5xl font-normal ">umair</span>
                </h2>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              {menu ? (
                <RxCross2
                  onClick={handleMenu}
                  className="text-red-600 text-4xl cursor-pointer"
                />
              ) : (
                <IoMenuOutline
                  onClick={handleMenu}
                  className="text-teal-500 text-4xl cursor-pointer"
                />
              )}
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-14">
            <div>
              <ul
                className={`flex flex-col lg:flex-row items-center lg:gap-10 absolute lg:static top-0 bg-slate-950 lg:bg-transparent text-white min-h-screen lg:min-h-0 lg:w-auto w-[12rem] md:w-[20rem] duration-500 space-y-10 lg:space-y-0 px-10 lg:px-0 ${
                  menu ? "right-0" : "-right-80"
                }`}
              >
                {/* Close Button in Sidebar for Medium and Small Devices */}
                <div className="lg:hidden flex justify-end w-full pt-5 pr-5">
                  <RxCross2
                    onClick={handleMenu}
                    className="text-red-600 text-4xl cursor-pointer"
                  />
                </div>

                <li>
                  <Link
                    to="/"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-xl md:text-3xl lg:text-xl font-normal max-w-[1420px] mx-auto hover:text-[#FD6F00]  duration-500 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-xl md:text-3xl lg:text-xl font-normal max-w-[1420px] mx-auto hover:text-[#FD6F00]  duration-500 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    About Me
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-xl md:text-3xl lg:text-xl font-normal max-w-[1420px] mx-auto hover:text-[#FD6F00]  duration-500 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-xl md:text-3xl lg:text-xl font-normal max-w-[1420px] mx-auto hover:text-[#FD6F00]  duration-500 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-xl md:text-3xl lg:text-xl font-normal max-w-[1420px] mx-auto hover:text-[#FD6F00]  duration-500 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-xl md:text-3xl lg:text-xl font-normal max-w-[1420px] mx-auto hover:text-[#FD6F00]  duration-500 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hidden lg:block">
              <button className="bg-primary px-4 py-4 rounded-md text-xl font-normal">Download CV</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
