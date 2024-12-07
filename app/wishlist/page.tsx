import React from "react";
import Wish from "./Wish";
import Wish2 from "./Wish2";

function page() {
  return (
    <div>
      <Wish
        banner="Wishlist (4)"
        bannerItem="Move All To Bag"
        className1={
          "md:py-[16px] md:px-[48px] border-[1px] px-[20px] py-[10px] border-gray-400 font-[500]"
        }
      />
    <Wish2
        banner="Just For You"
        bannerItem="See All"
        className1="md:py-[16px] md:px-[48px] border-[1px] px-[20px] py-[10px] border-gray-400 font-[500]"
      />
    </div>
  );
}

export default page;
