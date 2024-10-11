import Image from "next/image";
import img from "../../app/images/Group 7.png";
import img2 from "../../app/images/Rectangle 4.png";

const AboutMe = () => {
  return (
    <div id="1" className="mt-[69px] px-4 md:px-6 lg:px-6 max-w-[1420px] mx-auto">
      <div className="flex flex-col lg:flex-row lg:gap-12">
        <div className="relative">
          <Image src={img} alt="Logo" width={681} height={407} />
          <div className="absolute top-[10%] md:top-[21%] lg:top-[15%] left-1 md:left-[21%] lg:left-[18%]">
            <Image src={img2} alt="Logo" width={374} height={83} />
          </div>
        </div>
        <div className="pt-14 w-full lg:w-1/2">
          <h2 className="text-5xl md:text-[65px] font-poppins font-semibold pb-4">About Me </h2>
          <p className="text-[22px] font-poppins font-normal">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh  lectus netus in. Aliquet donec morbi convallis pretium.
            Turpis tempus pharetra
          </p>
          <div className="pt-4">
            <div className="relative">
              <h className="text-2xl font-poppins font-normal">UX</h>
              <div className="bg-white w-[100%] flex rounded-xl mt-[18px]">
                <h2 className="bg-primary h-3 w-[90%] rounded-l-xl  relative"></h2>
              </div>
              <h2 className="h-7 w-7 border-2 border-primary bg-white rounded-full absolute -bottom-[7px]  right-[8%]"></h2>
            </div>
            <div className="relative pt-6">
              <h className="text-2xl font-poppins font-normal">Website Design</h>
              <div className="bg-white w-[100%] flex rounded-xl mt-[18px]">
                <h2 className="bg-primary h-3 w-[80%] rounded-l-xl  relative"></h2>
              </div>
              <h2 className="h-7 w-7 border-2 border-primary bg-white rounded-full absolute -bottom-[7px]  right-[16%]"></h2>
            </div>
            <div className="relative pt-6">
              <h className="text-2xl font-poppins font-normal">App Design</h>
              <div className="bg-white w-[100%] flex rounded-xl mt-[18px]">
                <h2 className="bg-primary h-3 w-[92%] rounded-l-xl  relative"></h2>
              </div>
              <h2 className="h-7 w-7 border-2 border-primary bg-white rounded-full absolute -bottom-[7px]  right-[4%]"></h2>
            </div>
            <div className="relative pt-6">
              <h className="text-2xl font-poppins font-normal">Graphic Desogn</h>
              <div className="bg-white w-[100%] flex rounded-xl mt-[18px]">
                <h2 className="bg-primary h-3 w-[90%] rounded-l-xl  relative"></h2>
              </div>
              <h2 className="h-7 w-7 border-2 border-primary bg-white rounded-full absolute -bottom-[7px]  right-[8%]"></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
