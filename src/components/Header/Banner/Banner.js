import Image from "next/image";
import img from "../../../app/images/Group 2.png";
import img2 from "../../../app/images/Rectangle 4.png";
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="pt-16 lg:pt-[120px] px-4 md:px-6 lg:px-6">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-[148px]">
        <div className="px-4 md:px-8 lg:px-0">
          <h4 className=" text-xl md:text-2xl lg:text-2xl font-semibold pb-1">
            Hi I am{" "}
          </h4>
          <h3 className="text-[#FD6F00] text-2xl md:text-3xl lg:text-[32px] font-semibold line-clamp-3 mb-0">
            Muhammad Umair{" "}
          </h3>
          <h1 className="text-5xl md:text-7xl lg:text-[100px] font-bold pt-3 lg:pt-0 lg:leading-[1]">
            UI & UX <br />
            <span className="pl-[8rem] md:pl-[12rem] lg:pl-[15rem]">
              Designer
            </span>{" "}
          </h1>

          <p className="text-[21px]  font-normal text-justify  lg:text-justify pt-[28px]">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh <br className="block md:hidden lg:block" /> lectus netus in.
            Aliquet donec morbi convallis Aliquet donec Aliquet do{" "}
            <br className="block md:hidden lg:block" /> pretium. Turpis tempus
            pharetra
          </p>

          <div className="mt-[22px]">
            <button className="bg-primary px-[52px] py-4 rounded-md text-xl font-normal">
              Hire Me
            </button>
          </div>
        </div>
        {/* images here */}
        <div>
          <div>
            <div className="relative">
              <Image src={img} alt="Logo" width={538} height={617} />
              <div className="absolute top-[7%] md:top-[12%] lg:top-[12%] left-1 md:left-[13%] lg:left-[14%]">
                <Image src={img2} alt="Logo" width={374} height={83} />
              </div>
            </div>
            <div className="flex justify-center items-center gap-6 md:gap-16 lg:gap-6 pt-9">
              <Link href="">
                <MdOutlineFacebook className="text-[32px] md:text-5xl lg:text-[32px]"></MdOutlineFacebook>
              </Link>
              <Link href="">
                <FaTwitter className="text-[32px] md:text-5xl lg:text-[32px]"></FaTwitter>
              </Link>
              <Link href="">
                <RxInstagramLogo className="text-[32px] md:text-5xl lg:text-[32px]"></RxInstagramLogo>
              </Link>
              <Link href="">
                <FaLinkedin className="text-[32px] md:text-5xl lg:text-[32px]"></FaLinkedin>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
