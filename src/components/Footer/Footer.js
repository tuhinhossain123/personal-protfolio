"use client";
import Image from "next/image";
import img from "../../app/images/Subtract.png";
import Link from "next/link";
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-20 lg:mt-64 w-full">
      <div className="">
        <div className="container mx-auto px-4">
          {/* logo or name here */}
          <div className="cursor-pointer flex items-center justify-center gap-5 pt-10 lg:pt-20">
            <div>
              <Image src={img} alt="Logo" width={67} height={67} />
            </div>
            <div>
              <h2 className="font-montsrrat">
                <span className="text-5xl font-bold">M</span>
                <span className="text-5xl font-normal">umair</span>
              </h2>
            </div>
          </div>

          {/* all links here */}
          <div className="text-center pt-10 lg:pt-20">
            <ul className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-10">
              <li className="mb-8 lg:mb-0">
                <Link
                  href="/"
                  className="text-xl md:text-3xl lg:text-xl font-poppins font-normal hover:text-[#FD6F00] duration-500 cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li className="mb-8 lg:mb-0">
                <Link
                  href="/"
                  className="text-xl md:text-3xl lg:text-xl font-poppins font-normal hover:text-[#FD6F00] duration-500 cursor-pointer"
                >
                  About Me
                </Link>
              </li>
              <li className="mb-8 lg:mb-0">
                <Link
                  href="/"
                  className="text-xl md:text-3xl lg:text-xl font-poppins font-normal hover:text-[#FD6F00] duration-500 cursor-pointer"
                >
                  Services
                </Link>
              </li>
              <li className="mb-8 lg:mb-0">
                <Link
                  href="/"
                  className="text-xl md:text-3xl lg:text-xl font-poppins font-normal hover:text-[#FD6F00] duration-500 cursor-pointer"
                >
                  Projects
                </Link>
              </li>
              <li className="mb-8 lg:mb-0">
                <Link
                  href="/"
                  className="text-xl md:text-3xl lg:text-xl font-poppins font-normal hover:text-[#FD6F00] duration-500 cursor-pointer"
                >
                  Testimonials
                </Link>
              </li>
              <li className="mb-8 lg:mb-0">
                <Link
                  href="/"
                  className="text-xl md:text-3xl lg:text-xl font-poppins font-normal hover:text-[#FD6F00] duration-500 cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* all icons here */}
          <div className="flex justify-center items-center gap-6 md:gap-16 lg:gap-6 pt-10 lg:pt-20">
            <Link href="">
              <MdOutlineFacebook className="text-[32px] md:text-5xl lg:text-[32px]" />
            </Link>
            <Link href="">
              <FaTwitter className="text-[32px] md:text-5xl lg:text-[32px]" />
            </Link>
            <Link href="">
              <RxInstagramLogo className="text-[32px] md:text-5xl lg:text-[32px]" />
            </Link>
            <Link href="">
              <FaLinkedin className="text-[32px] md:text-5xl lg:text-[32px]" />
            </Link>
          </div>
        </div>

        {/* footer bottom */}
        <div className="mt-16 bg-[#121212]">
          <h2 className="text-center py-7 font-poppins text-lg lg:text-xl text-white">
            © 2023 <span className="text-primary font-bold">Mumair</span> All
            Rights Reserved, Inc.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
