"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";


const slidesData = [
  { id: 1, title: "CEO", name:"Name", img: "https://i.ibb.co.com/2y74SMy/Ellipse-10.png", img2:"https://i.ibb.co.com/y85dXCL/image.png", des:"Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices."},
  { id: 2, title: "CEO", name:"Name", img: "https://i.ibb.co.com/M5fnRSn/Ellipse-11.png", img2:"https://i.ibb.co.com/y85dXCL/image.png", des:"Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices."},
  { id: 3, title: "CEO", name:"Name", img: "https://i.ibb.co.com/2y74SMy/Ellipse-10.png", img2:"https://i.ibb.co.com/y85dXCL/image.png", des:"Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices."},
  { id: 4, title: "CEO", name:"Name", img: "https://i.ibb.co.com/M5fnRSn/Ellipse-11.png", img2:"https://i.ibb.co.com/y85dXCL/image.png", des:"Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices."},
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
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${((currentSlide - 1) * 100) / 1}%)`,
        }}
      >
        {slidesData.map((slide, index) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 flex justify-center items-center border-2"
            style={{ width: "100%" }}
          >
            <div className="bg-[#F8F8F8] rounded-xl pl-[59px] pt-[68px] pr-[77px] pb-10 flex gap-5">
              <div>
                <Image src={slide?.img} alt="Logo" width={235} height={235} />
              </div>
              <div className="relative">
                <div className="pl-4 pt-5">
                  <p className="text-[#424242] text-xl font-normal">
                   {slide?.des}
                  </p>
                  <h3 className="text-2xl font-medium pt-2 text-black">{slide.name}</h3>
                  <h4 className="text-xl font-normal p text-black">{slide?.title}</h4>
                </div>
                <div className="absolute top-0 ">
                  <Image src={slide?.img2} alt="Logo" width={25} height={25} />
                </div>
                <div className="absolute right-[20%] bottom-[40%]">
                  <Image src={slide?.img2} alt="Logo" width={25} height={25} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex  space-x-">
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
