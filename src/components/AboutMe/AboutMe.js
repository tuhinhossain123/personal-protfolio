"use client";
import Image from "next/image";
import img from "../../app/images/Group 7.png";
import img2 from "../../app/images/Rectangle 4.png";
import "./about.css";
import { useState } from "react";

const AboutMe = () => {
  const [sliderValues, setSliderValues] = useState([90, 80, 95, 90]);

  // Update the specific slider value based on index
  const handleChange = (index) => (event) => {
    const newValues = [...sliderValues];
    newValues[index] = event.target.value;
    setSliderValues(newValues);
  };

  return (
    <div
      id="2"
      className="mt-[69px] px-4 md:px-6 lg:px-6 max-w-[1420px] mx-auto"
    >
      <div className="flex flex-col lg:flex-row lg:gap-12">
        <div className="relative">
          <Image src={img} alt="Logo" width={681} height={407} />
          <div className="absolute top-[10%] md:top-[21%] lg:top-[15%] left-1 md:left-[21%] lg:left-[20%]">
            <Image src={img2} alt="Logo" width={374} height={83} />
          </div>
        </div>
        <div className="pt-14 w-full lg:w-1/2">
          <h2 className="text-5xl md:text-[65px] font-poppins font-semibold pb-4">
            About Me{" "}
          </h2>
          <p className="text-[22px] font-poppins font-normal">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>
          <div className="pt-4 space-y-6">
            {/* UX Slider */}
            <div className="slider-container">
              <label className="text-2xl font-poppins font-normal">UX</label>
              <input
                type="range"
                className="slider mt-4"
                min="0"
                max="100"
                value={sliderValues[0]}
                onChange={handleChange(0)}
                style={{
                  "--slider-value": `${sliderValues[0]}%`,
                }}
              />
            </div>
            {/* Web Design Slider */}
            <div className="slider-container">
              <label className="text-2xl font-poppins font-normal">
                Web Design
              </label>
              <input
                type="range"
                className="slider mt-4"
                min="0"
                max="100"
                value={sliderValues[1]}
                onChange={handleChange(1)}
                style={{
                  "--slider-value": `${sliderValues[1]}%`,
                }}
              />
            </div>
            {/* App Design Slider */}
            <div className="slider-container">
              <label className="text-2xl font-poppins font-normal">
                App Design
              </label>
              <input
                type="range"
                className="slider mt-4"
                min="0"
                max="100"
                value={sliderValues[2]}
                onChange={handleChange(2)}
                style={{
                  "--slider-value": `${sliderValues[2]}%`,
                }}
              />
            </div>
            {/* Graphic Design Slider */}
            <div className="slider-container">
              <label className="text-2xl font-poppins font-normal">
                Graphic Design
              </label>
              <input
                type="range"
                className="slider mt-4"
                min="0"
                max="100"
                value={sliderValues[3]}
                onChange={handleChange(3)}
                style={{
                  "--slider-value": `${sliderValues[3]}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
