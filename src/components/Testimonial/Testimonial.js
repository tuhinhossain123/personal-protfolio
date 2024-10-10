"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const slidesData = [
  {
    id: 1,
    title: "CEO",
    name: "Name",
    img: "https://i.ibb.co.com/2y74SMy/Ellipse-10.png",
    img2: "https://i.ibb.co.com/y85dXCL/image.png",
    des: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
  },
  {
    id: 2,
    title: "CEO",
    name: "Name",
    img: "https://i.ibb.co.com/M5fnRSn/Ellipse-11.png",
    img2: "https://i.ibb.co.com/y85dXCL/image.png",
    des: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
  },
  {
    id: 3,
    title: "CEO",
    name: "Name",
    img: "https://i.ibb.co.com/2y74SMy/Ellipse-10.png",
    img2: "https://i.ibb.co.com/y85dXCL/image.png",
    des: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
  },
  {
    id: 4,
    title: "CEO",
    name: "Name",
    img: "https://i.ibb.co.com/M5fnRSn/Ellipse-11.png",
    img2: "https://i.ibb.co.com/y85dXCL/image.png",
    des: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
  },
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="lg:mt-[139px] px-4 md:px-6 lg:px-6  overflow-hidden rounded-xl">
      <div className="pb-[72px]">
        <h2 className="text-[64px] font-semibold text-center pb-4">
          Testimonials
        </h2>
        <p className="text-xl fot-nt-normal md:text-center">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus <br /> netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>

      <div
        className="flex space-x-10 transition-transform duration-500"
        style={{
          transform: `translateX(-${((currentSlide - 1) * 100) / 1}%)`,
        }}
      >
        {slidesData.map((slide, index) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 flex justify-center items-center space-x-10"
            style={{ width: "50%" }}
          >
            <div className="bg-[#F8F8F8]  pl-[59px] pt-[68px] pr-[77px] pb-10 flex flex-col lg:flex-row gap-7 lg:gap-5 rounded-xl">
              <div>
                <Image src={slide?.img} alt="Logo" width={235} height={235} />
              </div>
              <div className="relative">
                <div className="pl-4 pt-5">
                  <p className="text-[#424242] text-xl font-normal">
                    {slide?.des}
                  </p>
                  <h3 className="text-2xl font-medium pt-2 text-black">
                    {slide.name}
                  </h3>
                  <h4 className="text-xl font-normal p text-black">
                    {slide?.title}
                  </h4>
                </div>
                <div className="absolute top-0 ">
                  <Image src={slide?.img2} alt="Logo" width={25} height={25} />
                </div>
                <div className="absolute right-[15%] bottom-[38%]">
                  <Image src={slide?.img2} alt="Logo" width={25} height={25} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="transform flex justify-center items-center gap-5 mt-8 lg:mt-[87px]">
        {slidesData.map((_, index) => (
          <div
            key={index}
            className={`w-[100px] h-[10px] rounded-xl cursor-pointer transition-all duration-300 ${
              index === currentSlide ? "bg-primary" : "bg-white"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
