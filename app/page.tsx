import Arrival from "@/components/Arrival";
import Category from "@/components/Category";
import Category2 from "@/components/Category2";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CustomerShip from "./about/CustomerShip";
import { client } from "@/sanity/lib/client";

 const getData = async () => {
  const query = `*[_type == "product" && "Todays" in tags]{
  name,
    "image": image.asset->url,
      price,
    priceWithoutDiscount,
    rating,
    "slug":slug.current
}`;

  const data = await client.fetch(query);
  // console.log(data)
  return data;
};

export const getData2 = async () => {
  const query = `*[_type == "product" && "Month" in tags]{
  name,
    "image": image.asset->url,
      price,
    priceWithoutDiscount,
    rating,
    "slug":slug.current
}`;

  const data2 = await client.fetch(query);
  return data2;
};

const getData3 = async () => {
  const query = `*[_type == "product"][0...8]{
  name,
    "image": image.asset->url,
      price,
    priceWithoutDiscount,
    rating,
    "slug":slug.current
}`;

  const data3 = await client.fetch(query);
  return data3;
};

const category = [
  {
    img: "/category/phone.png",
    name: "Phones",
  },
  {
    img: "/category/Computer.png",
    name: "Phones",
  },
  {
    img: "/category/watch.png",
    name: "Phones",
  },
  {
    img: "/category/Camera.png",
    name: "camera",
  },

  {
    img: "/category/headphone.png",
    name: "Phones",
  },
  {
    img: "/category/Gamepad.png",
    name: "Phones",
  },
];

export default async function Home() {
  const data = await getData();

  const data2 = await getData2();

  const data3 = await getData3();

  return (
    <section>
      <Hero />
      <Products
        heading="Flash Sales"
        subHeading="Todays"
        isTimer={true}
        action={
          <div className="flex gap-2 ">
            <div className="rounded-full p-2 bg-gray-100">
              <ArrowLeft />
            </div>
            <div className="rounded-full p-2 bg-gray-100">
              <ArrowRight />
            </div>
          </div>
        }
        isCarousel={true}
        products={data}
        btnText="View All Products"
      />
      <div className="border-[1px] my-20 mx-auto max-w-[1170px]" />
      <Products
        heading="Browse By Category"
        subHeading="Categories"
        isTimer={false}
        action={
          <div className="flex gap-2 ">
            <div className="rounded-full p-2  bg-gray-100">
              <ArrowLeft className="md:size-8 size-4" />
            </div>
            <div className="rounded-full p-2 bg-gray-100">
              <ArrowRight className="md:size-8 size-4" />
            </div>
          </div>
        }
        isCarousel={false}
      />

      <Category
        product={category}
        className1={`sm:max-w-[170px] w-[250px] md:py-6 md:px-7 px-5 py-4 mx-2 rounded   flex flex-col items-center justify-center border-[2px] border-gray-300 hover:bg-[#DB4444] hover:text-white`}
      />

      <div className="border-[1px] my-20 mx-auto max-w-[1170px]" />

      <Products
        heading="Best Selling Products"
        subHeading="This Month"
        isTimer={false}
        action={
          <div className="flex gap-2 ">
            <Button className="md:w-[159px] md:h-[56px] w-[115px] h-[35px] bg-[#DB4444] text-white">
              View All
            </Button>
          </div>
        }
        isCarousel={false}
        products={data2}
      />

      {/* Image section  Banner*/}
      <Category2 />

      <Products
        heading="Explore Our Products"
        subHeading="Our Products"
        isTimer={false}
        action={
          <div className="flex gap-2 ">
            <div className="rounded-full p-2  bg-gray-100">
              <ArrowLeft className="md:size-8 size-4" />
            </div>
            <div className="rounded-full p-2 bg-gray-100">
              <ArrowRight className="md:size-8 size-4" />
            </div>
          </div>
        }
        isCarousel={false}
        products={data3}
        btnText="View All Products"
      />

      <div className="my-16 md:my-4">
        <Products
          heading="New Arrival"
          subHeading="Featured"
          isTimer={false}
          action={""}
          isCarousel={false}
        />

        <Arrival />

        <CustomerShip />
      </div>
    </section>
  );
}
