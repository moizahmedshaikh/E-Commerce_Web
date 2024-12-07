import React from "react";
import Image from "next/image";

const TopHeader = () => {
  return (
    <div className="w-full h-[48px] bg-black text-white text-[14px] md:flex hidden items-center lg:justify-end justify-center">
      <div className="flex max-w-[859px] lg:gap-[231px] sm:gap-[100px] gap-5 ml-4 lg:mr-36 mr-4" >
        
        <div className=" sm:text-[14px] text-[11px]">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className=" font-[600] underline leading-3">ShopNow</span>
        </div>
        <div className="flex items-center">
          <p className="sm:text-[14px] text-[11px]">English</p>
          <div className="h-[24px] w-[24px]">
            <Image
              src={"/DropDown.png"}
              alt="DropDown"
              height={1000}
              width={1000}
              className="text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
