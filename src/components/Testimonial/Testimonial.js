"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const slidesData = [
  {
    id: 1,
    title: "CEO",
    name: "Name",
    img: "https://i.ibb.co/2y74SMy/Ellipse-10.png",
    img2: "https://i.ibb.co/y85dXCL/image.png",
    des: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
  },
  {
    id: 2,
    title: "CEO",
    name: "Name",
    img: "https://i.ibb.co/M5fnRSn/Ellipse-11.png",
    img2: "https://i.ibb.co/y85dXCL/image.png",
    des: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
  },
  {
    id: 3,
    title: "CEO",
    name: "Name",
    img: "https://i.ibb.co/2y74SMy/Ellipse-10.png",
    img2: "https://i.ibb.co/y85dXCL/image.png",
    des: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
  },
  {
    id: 4,
    title: "CEO",
    name: "Name",
    img: "https://i.ibb.co/M5fnRSn/Ellipse-11.png",
    img2: "https://i.ibb.co/y85dXCL/image.png",
    des: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
  },
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(1); 
  const [isTransitioning, setIsTransitioning] = useState(true);

  const slidesWithClones = [
    slidesData[slidesData.length - 1], 
    ...slidesData,
    slidesData[0], 
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index + 1); 
  };

  
  useEffect(() => {
    if (currentSlide === 0) {
      setTimeout(() => {
        setIsTransitioning(false); 
        setCurrentSlide(slidesData.length); 
      }, 50000); 
    } else if (currentSlide === slidesData.length + 1) {
      setTimeout(() => {
        setIsTransitioning(false); 
        setCurrentSlide(1); 
      }, 500);
    } else {
      setIsTransitioning(true); 
    }
  }, [currentSlide]);

  return (
    <div className="mt-16 lg:mt-[139px] px-4 md:px-6 lg:px-6 overflow-hidden rounded-xl">
      <div className="pb-[72px]">
        <h2 className="text-5xl md:text-[66px] font-poppins font-semibold lg:text-center pb-4">
          Testimonials
        </h2>
        <p className="text-xl fot-nt-normal lg:text-center">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus <br /> netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>

      <div
        className="flex gap-10"
        style={{
          width: `${slidesWithClones.length * 50}%`, 
          transform: `translateX(-${(currentSlide * 90) / slidesWithClones.length}%)`,
          transition: isTransitioning ? "transform 0.4s ease-in-out" : "none",
        }}
      >
        {slidesWithClones.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex justify-center items-center gap-10"
            style={{ width: `${100 / slidesWithClones.length}%` }} 
          >
            <div className="bg-[#F8F8F8] pl-[59px] pt-[68px] pr-[77px] pb-10 flex flex-col lg:flex-row items-center gap-7 lg:gap-5 rounded-xl">
              <div>
                <Image src={slide?.img} alt="Logo" width={235} height={235} />
              </div>
              <div className="relative w-3/4">
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
                  <Image
                    src={slide?.img2}
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                </div>
                <div className="absolute right-[28%] bottom-14 md:bottom-10 lg:bottom-[30%]">
                  <Image
                    src={slide?.img2}
                    alt="Logo"
                    width={25}
                    height={25}
                  />
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
              index === currentSlide - 1 ? "bg-primary" : "bg-white"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
