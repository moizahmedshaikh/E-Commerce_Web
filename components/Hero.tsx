import React from "react";
import Image from "next/image";
import MySwiper from "./MySwiper";

const Hero = () => {
  return (
    <div className="max-w-[1170px] mx-auto mb-28">
      <div className="flex lg:flex-row flex-col-reverse gap-10 mt-10 mx-6">
        <div className="lg:max-w-[217px] border-r-2 pr-7 lg:flex lg:flex-col hidden gap-4">
          <div className="flex lg:gap-[51px] items-center justify-between ">
            <h3>Womans Fashion</h3>
            <div className="h-[12px] w-[7px]">
              <Image
                src={"/Vector2.png"}
                alt="DropDown"
                height={1000}
                width={1000}
                className="text-black"
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <h3>Mens Fashion</h3>
            <div className="h-[12px] w-[7px]">
              <Image
                src={"/Vector2.png"}
                alt="DropDown"
                height={1000}
                width={1000}
                className="text-black"
              />
            </div>
          </div>

          <h3>Elextronics</h3>
          <h3>Home & Style</h3>
          <h3>Medicine</h3>
          <h3>Sports & Outdoor</h3>
          <h3>Babys & Toys</h3>
          <h3>Groceries & Pets</h3>
          <h3>Helth & Beauty</h3>
        </div>

        <MySwiper />
      </div>
    </div>
  );
};

export default Hero;
