import img1 from "../../app/images/Group 40.png";
import img2 from "../../app/images/Layer_1.png";
import img3 from "../../app/images/Group 18.png";
import img4 from "../../app/images/Group 42.png";
import Image from "next/image";
const Services = () => {
  return (
    <div className="mt-16 lg:mt-36  px-4 md:px-6 lg:px-6">
      <h2 className="text-5xl lg:text-[66px] font-semibold text-center pb-5">Services</h2>
      <p className="text-justify md:text-center text-xl">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus <br /> netus in. Aliquet donec morbi convallis pretium
      </p>
      <div className="pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
        <div className="bg-[#F8F8F8] pl-5 pt-14 pr-5 pb-3 rounded-lg">
          <div className="h-[75px] w-[75px]">
            <Image
              src={img1}
              alt="Logo"
              width=""
              height=""
              className="w-full h-full"
            />
          </div>
          <h2 className="text-3xl font-semibold pt-6 text-black">UI/UX</h2>
          <p className="text-xl font-normal pt-4 text-black">
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
            interdum
          </p>
        </div>
        <div className="bg-[#F8F8F8] pl-5 pt-14 pr-5 pb-3 rounded-lg">
          <div className="h-[75px] w-[75px]">
            <Image
              src={img2}
              alt="Logo"
              width=""
              height=""
              className="w-full h-full"
            />
          </div>
          <h2 className="text-3xl font-semibold pt-6 text-black">Web Design </h2>
          <p className="text-xl font-normal pt-4 text-black">
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
            interdum
          </p>
        </div>
        <div className="bg-[#F8F8F8] pl-5 pt-14 pr-5 pb-3 rounded-lg">
          <div className="h-[75px] w-[75px]">
            <Image
              src={img3}
              alt="Logo"
              width=""
              height=""
              className="w-full h-full"
            />
          </div>
          <h2 className="text-3xl font-semibold pt-6 text-black">App Design</h2>
          <p className="text-xl font-normal pt-4 text-black">
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
            interdum
          </p>
        </div>
        <div className="bg-[#F8F8F8] pl-5 pt-14 pr-5 pb-3 rounded-lg">
          <div className="h-[75px] w-[75px]">
            <Image
              src={img4}
              alt="Logo"
              width=""
              height=""
              className="w-full h-full"
            />
          </div>
          <h2 className="text-3xl font-semibold pt-6 text-black">Graphic Design </h2>
          <p className="text-xl font-normal pt-4 text-black">
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
            interdum
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
