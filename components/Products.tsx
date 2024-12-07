import React from "react";
import SectionHeader from "./SectionHeader";
import Timer from "./Timer";
import { Button } from "./ui/button";
import ProductCard from "./ProductCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export type ProductCardsProps = {
  name: string;
  image: string;
  price: number;
  price2:number;
  rating: {
    rate: number;
    count: number;
  };
};

type ProductSection = {
  heading: string;
  subHeading: string;
  isTimer: boolean;
  action: React.ReactNode;
  products?: ProductCardsProps[];
  isCarousel: boolean;
  btnText?: string;
};

const Products = ({
  heading,
  subHeading,
  isTimer,
  action,
  isCarousel,
  products,
  btnText
}: ProductSection) => {
  return (
    <div className="flex max-w-[1170px] mx-auto flex-col justify-center">
      <div className="flex items-end justify-between mx-6">
        <div className="flex items-end gap-36">
          <SectionHeader heading={heading} subHeading={subHeading} />
          {isTimer && <Timer />}
        </div>
        <div>{action}</div>
      </div>

      {/* //card Div */}
      <div className="my-12">
        {!isCarousel ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 max-w-6xl mx-auto px-4">
            {products?.map((prod, index) => {
              return (
                <ProductCard
                  key={index}
                  images={prod.image}
                  name={prod.name}
                  price={prod.price2}
                  originalPrice={prod.price}
                  discount={"12%"}
                  rating={prod.rating.rate}
                  review={prod.rating.count}
                  isNew
                />
              );
            })}
          </div>
        ) : (
          <div >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto"
            >
              <CarouselContent>
                {products?.map((prod, index) => {
                  return (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                    >
                      <div className="p-4">
                        <ProductCard
                          key={index}
                          images={prod.image}
                          name={prod.name}
                          price={prod.price}
                          originalPrice={prod.price2}
                          discount={"12%"}
                          rating={prod.rating.rate}
                          review={prod.rating.count}
                          isNew
                        />
                      </div>
                    </CarouselItem>
                  );
                })}
                
              </CarouselContent>
              <div className="sm:block hidden">
              <CarouselPrevious />
              <CarouselNext />
              </div>
            </Carousel>
          </div>
        )}
      </div>
      {btnText? 
      <div className="flex justify-center">
        <Button className="bg-[#DB4444] text-white md:w-[234px] md:h-[56px] w-[200px] h-[50px] my-5 text-[16px] rounded-[4px]">{btnText}</Button>
      </div>:""}
    </div>
  );
};

export default Products;
