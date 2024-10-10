"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import img1 from "../../app/images/Ellipse 10.png";
import img2 from "../../app/images/Ellipse 11.png";
import img3 from "../../app/images/“.png";

const Testimonial = () => {
  return (
    <div className="mt-[139px]">
      <div className="pb-[72px]">
        <h2 className="text-[64px] font-semibold text-center pb-4">
          Testimonials
        </h2>
        <p className="text-xl fot-nt-normal text-center">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus <br /> netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>
      <div>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-[#F8F8F8] rounded-xl pl-[59px] pt-[68px] pr-[77px] pb-10 flex gap-5">
              <div>
                <Image src={img1} alt="Logo" width={235} height={235} />
              </div>
              <div className="relative">
                <div className="pl-4 pt-5">
                  <p className="text-[#424242] text-xl font-normal">
                    Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                    accumsan. Id leo urna velit neque mattis id tellus arcu
                    condimentum. Augue dictum dolor elementum convallis
                    dignissim malesuada commodo ultrices.
                  </p>
                  <h3 className="text-2xl font-medium pt-2 text-black">Name</h3>
                  <h4 className="text-xl font-normal p text-black">CEO</h4>
                </div>
                <div className="absolute top-0 ">
                  <Image src={img3} alt="Logo" width={25} height={25} />
                </div>
                <div className="absolute right-[20%] bottom-[40%]">
                  <Image src={img3} alt="Logo" width={25} height={25} />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#F8F8F8] rounded-xl pl-[59px] pt-[68px] pr-[77px] pb-10 flex gap-5">
              <div>
                <Image src={img2} alt="Logo" width={235} height={235} />
              </div>
              <div className="relative">
                <div className="pl-4 pt-5">
                  <p className="text-[#424242] text-xl font-normal">
                    Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                    accumsan. Id leo urna velit neque mattis id tellus arcu
                    condimentum. Augue dictum dolor elementum convallis
                    dignissim malesuada commodo ultrices.
                  </p>
                  <h3 className="text-2xl font-medium pt-2 text-black">Name</h3>
                  <h4 className="text-xl font-normal p text-black">CEO</h4>
                </div>
                <div className="absolute top-0 ">
                  <Image src={img3} alt="Logo" width={25} height={25} />
                </div>
                <div className="absolute right-[20%] bottom-[40%]">
                  <Image src={img3} alt="Logo" width={25} height={25} />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#F8F8F8] rounded-xl pl-[59px] pt-[68px] pr-[77px] pb-10 flex gap-5">
              <div>
                <Image src={img1} alt="Logo" width={235} height={235} />
              </div>
              <div className="relative">
                <div className="pl-4 pt-5">
                  <p className="text-[#424242] text-xl font-normal">
                    Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                    accumsan. Id leo urna velit neque mattis id tellus arcu
                    condimentum. Augue dictum dolor elementum convallis
                    dignissim malesuada commodo ultrices.
                  </p>
                  <h3 className="text-2xl font-medium pt-2 text-black">Name</h3>
                  <h4 className="text-xl font-normal p text-black">CEO</h4>
                </div>
                <div className="absolute top-0 ">
                  <Image src={img3} alt="Logo" width={25} height={25} />
                </div>
                <div className="absolute right-[20%] bottom-[40%]">
                  <Image src={img3} alt="Logo" width={25} height={25} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
