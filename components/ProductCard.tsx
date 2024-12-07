import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  HeartIcon, EyeIcon
} from "@heroicons/react/24/outline";


import { FaStar } from "react-icons/fa";

interface ProductCardsProps {
  name: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  rating: number;
  review: number;
  images: string;
  isNew: boolean;
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  rating,
  review,
  images,
}: ProductCardsProps) => {
  return (
    <Card className="group relative overflow-hidden">
      <CardContent className="p-6 md:p-0">
        <div className="relative  aspect-square bg-gray-100 rounded-md">
          <Image src={images} alt={name} className="w-full p-10" fill />
          <div className="p-2 absolute right-3 top-3 rounded-full bg-white">
          <HeartIcon className=" w-4"/>
          </div>
          <div className="p-2 absolute right-3 top-12 rounded-full bg-white">
          <EyeIcon className=" w-4"/>
          </div>

           {/* Add to Cart Section */}
      <div className="bg-black bottom-0 absolute flex items-center justify-center w-full h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
        Add To Cart
      </div>

        </div>

        <div className="p-4">
          <h1 className="text-base font-[500] tracking-wider">{name}</h1>
        </div>

        <div className="space-x-4 mb-3">
          <span className="text-[#DB4444] font-[500]">{`$${price}`}</span>
          <span className="line-through text-base opacity-55 font-[500]">{`$${originalPrice}`}</span>
        </div>

        <div className="flex gap-1">
          {[...Array(5)].map((g, i) => (
            <span
              key={i}
              className={
                i < Math.floor(rating) ? "text-yellow-500" : "text-gray-400"
              }
            >
              <FaStar size={20} />
            </span>
          ))}

          <span className="text-sm text-gray-500 font-[500] ml-1">{`(${review})`}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
