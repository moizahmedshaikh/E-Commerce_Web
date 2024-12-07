import Arrival from "@/components/Arrival";
import Category from "@/components/Category";
import Category2 from "@/components/Category2";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CustomerShip from "./about/CustomerShip";

const data = [
  {
    name: "HAVIT Gamepad",
    image: "/product_img/game.png",
    price: 120,
    price2: 150,
    rating: {
      rate: 12,
      count: 23,
    },
  },
  {
    name: "AK-900 Wired Keyboard",
    image: "/product_img/keyboard.png",
    price: 960,
    price2: 999,
    rating: {
      rate: 12,
      count: 23,
    },
  },

  {
    name: "IPS LCD Gaming Monitor",
    image: "/product_img/monitor.png",
    price: 370,
    price2: 420,
    rating: {
      rate: 12,
      count: 23,
    },
  },

  {
    name: "S-Series Comfort Chair ",
    image: "/chair.png",
    price: 375,
    price2: 420,
    rating: {
      rate: 3,
      count: 23,
    },
  },

  {
    name: "HAVIT Gamepad",
    image: "/product_img/game.png",
    price: 120,
    price2: 150,
    rating: {
      rate: 12,
      count: 23,
    },
  },

  {
    name: "IPS LCD Gaming Monitor",
    image: "/product_img/monitor.png",
    price: 90,
    price2: 130,
    rating: {
      rate: 4,
      count: 23,
    },
  },

  {
    name: "S-Series Comfort Chair ",
    image: "/chair.png",
    price: 370,
    price2: 430,
    rating: {
      rate: 12,
      count: 23,
    },
  },

  {
    name: "AK-900 Wired Keyboard",
    image: "/product_img/keyboard.png",
    price: 378,
    price2: 420,
    rating: {
      rate: 2,
      count: 23,
    },
  },

 
];




const data2 = [
  {
    name: "The north coat",
    image: "/Jacket.png",
    price: 260,
    price2: 300,
    rating: {
      rate: 12,
      count: 23,
    },
  },
  {
    name: "Gucci duffle bag",
    image: "/bag.png",
    price: 190,
    price2: 200,
    rating: {
      rate: 12,
      count: 23,
    },
  },
  {
    name: "RGB liquid CPU Cooler",
    image: "/cpu.png",
    price: 160,
    price2: 200,
    rating: {
      rate: 12,
      count: 23,
    },
  },
  {
    name: "Small BookSelf",
    image: "/books.png",
    price: 176,
    price2: 210,
    rating: {
      rate: 12,
      count: 23,
    },
  },
];


const data3 = [
  {
    name: "Breed Dry Dog Food",
    image: "/dog-food.png",
    price: 100,
    price2: 150,
    rating: {
      rate: 12,
      count: 23,
    },
  },
  {
    name: "CANON EOS DSLR Camera",
    image: "/canon.png",
    price: 360,
    price2: 400,
    rating: {
      rate: 12,
      count: 23,
    },
  },
  {
    name: "ASUS FHD Gaming Laptop",
    image: "/laptop.png",
    price: 700,
    price2: 750,
    rating: {
      rate: 12,
      count: 23,
    },
  },
  {
    name: "Curology Product Set ",
    image: "/product-set.png",
    price: 500,
    price2: 550,
    rating: {
      rate: 12,
      count: 23,
    },
  },

  {
    name: "Kids Electric Car",
    image: "/car.png",
    price: 960,
    price2: 1000,
    rating: {
      rate: 12,
      count: 23,
    },
  },
  {
    name: "Jr. Zoom Soccer Cleats",
    image: "/shoes.png",
    price: 1160,
    price2: 1200,
    rating: {
      rate: 12,
      count: 23,
    },
  },
  {
    name: "GP11 Shooter USB Gamepad",
    image: "/gamepad.png",
    price: 660,
    price2: 700,
    rating: {
      rate: 12,
      count: 23,
    },
  },
  {
    name: "Quilted Satin Jacket",
    image: "/jacket2.png",
    price: 660,
    price2: 690,
    rating: {
      rate: 12,
      count: 23,
    },
  },
];

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

// const category2 = [
//   {
//     img: "/category2/van.png",
//     name: "Phones",
//     description: "Free delivery for all orders over $140",
//   },
//   {
//     img: "/category2/headphone.png",
//     name: "Phones",
//     description: "Friendly 24/7 customer support",
//   },
//   {
//     img: "/category2/tickmark.png",
//     name: "Phones",
//     description: "We reurn money within 30 days",
//   },
// ];







export default function Home() {
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
