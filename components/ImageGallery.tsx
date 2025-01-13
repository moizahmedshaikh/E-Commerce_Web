"use client";

import Image from "next/image";
import { useState } from "react";

interface imgAppProps {
  image: string;
}

const ImageGallery = ({ image }: imgAppProps) => {
  const [bigImage, setBigImage] = useState(image);

  const handleSmallImageClick = (image: string) => {
    setBigImage(image);
  };

  return (
    <div className="grid lg:grid-cols-5 gap-4">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        <div className="overflow-hidden rounded-lg  bg-gray-100">
          <Image
            onClick={() => {
              handleSmallImageClick(image);
            }}
            src={image}
            alt="detailed picture"
            width={1000}
            height={1000}
            className="object-cover object-center hover:opacity-75 cursor-pointer"
          />
        </div>

        <div className="overflow-hidden rounded-lg  bg-gray-100">
          <Image
            onClick={() => {
              handleSmallImageClick(image);
            }}
            src={image}
            alt="detailed picture"
            width={1000}
            height={1000}
            className="object-cover object-center hover:opacity-75 cursor-pointer"
          />
        </div>


        <div className="overflow-hidden rounded-lg  bg-gray-100">
          <Image
            onClick={() => {
              handleSmallImageClick(image);
            }}
            src={image}
            alt="detailed picture"
            width={1000}
            height={1000}
            className="object-cover object-center hover:opacity-75 cursor-pointer"
          />
        </div>


        


      </div>

      <div className=" overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={bigImage}
          alt="detailed picture"
          height={1000}
          width={1000}
          className="object-cover object-center w-full h-full"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
