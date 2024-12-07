"use client";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Swiper ke modules import karein

interface SlideData {
  image: string;
  title: string;
  description: string;
}

const slides: SlideData[] = [
  {
    image: "/hero_img.png",
    title: "iPhone 14 Series",
    description: "Up to 10% off Voucher",
  },
  {
    image: "/hero_img.png",
    title: "Slide 2",
    description: "Up to 10% off Voucher",
  },
  {
    image: "/hero_img.png",
    title: "Slide 3",
    description: "Up to 10% off Voucher",
  },
  {
    image: "/hero_img.png",
    title: "Slide 3",
    description: "Up to 10% off Voucher",
  },
  {
    image: "/hero_img.png",
    title: "Slide 3",
    description: "Up to 10% off Voucher",
  },
];

export default function MySwiper() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{
        delay: 3000, // 3 seconds per slide
        disableOnInteraction: false, // Interaction ke baad bhi autoplay continue rahega
        pauseOnMouseEnter: true, // Mouse hover karne par autoplay pause hoga
      }}
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={1}
      className="w-full max-w-4xl mx-auto"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="max-w-[892px] flex flex-col lg:flex-row bg-black items-center">
            <div className="flex flex-col gap-6 md:pl-16 px-14 md:pt-12 md:pb-10 pt-6 pb-8">
              <div className="flex items-center gap-6 justify-center md:justify-start">
                <div className="max-w-[40px] max-h-[49px]">
                  <Image
                    src={"/apple_logo.png"}
                    height={1000}
                    width={1000}
                    alt="apple logo"
                  />
                </div>
                <p className="text-white text-center md:text-start">{slide.title}</p>
              </div>

              <div className=" font-style font-[600]">
                <p className="text-white text-center md:text-start lg:text-[49px] md:text-[40px] text-[34px] tracking-[4%]">
                  {slide.description}
                </p>
              </div>

              <div className="flex text-white items-center gap-2 justify-center md:justify-start">
                <p className="text-[16px] leading-4 font-[500] border-b-[1.5px]">Shop Now</p>
                <ArrowRightIcon className=" w-6 h-6" />
              </div>
            </div>

            <div className="max-w-[496px] max-h-[352px] leading-[60px]">
              <Image
                src={slide.image}
                width={2000}
                height={2000}
                alt="hero image"
                className=""
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

// <div className="max-w-[892px]  flex bg-black">

{
  /* <div className="flex flex-col gap-6  pl-16 pt-12 pb-10">
<div className="flex items-center gap-6">
  <div className="max-w-[40px] max-h-[49px]">
    <Image
      src={"/apple_logo.png"}
      height={1000}
      width={1000}
      alt="apple logo"
    />
  </div>
  <p className="text-white">iPhone 14 Series</p>
</div>

<div className=" font-style font-[600]">
  <p className="text-white lg:text-[49px] text-[40px] tracking-[4%]">
    Up to 10% off Voucher
  </p>
</div>

<div className="flex text-white items-center gap-2">
  <p className="text-[16px] leading-6 font-[500]">Shop Now</p>
  <ArrowRightIcon className=" w-6 h-6"/>
</div>
</div>

<div className="max-w-[496px] h-[352px] leading-[60px]">
<Image
  src={"/hero_img.png"}
  width={2000}
  height={2000}
  alt="hero image"
  className=""
/>
</div>
</div> */
}
