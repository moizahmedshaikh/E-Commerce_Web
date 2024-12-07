import Image from "next/image";

const dataArray = [
  {
    name: "Gucci duffle bag",
    img: "/wish/bag.png",
    price: "$960",
  },

  {
    name: "RGB liquid CPU Cooler",
    img: "/wish/cpu.png",
    price: "$$1960",
  },
  {
    name: "GP11 Shooter USB Gamepad",
    img: "/wish/gamepad.png",
    price: "$550",
  },
  {
    name: "Quilted Satin Jacket",
    img: "/wish/jacket.png",
    price: "$750",
  },
];

interface Props {
  // name:string,
  // img:string,
  // price:string,
  banner?: string;
  bannerItem?: string;
  className1: string;
  // className2: boolean;
}

function Wish({ banner, bannerItem, className1 }: Props) {
  return (
    <div className=" max-w-[1170px] mx-auto my-10">
      <div className="max-w-[1170px]">
        <div className={` flex justify-between items-center mx-3 md:mx-auto`}>
          <h2>{banner}</h2>
          <button className={className1}>{bannerItem}</button>
        </div>
      </div>

      <div className=" max-w-[1170px] my-7 mx-3 md:mx-0 rounded gap-10  grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2  md:gap-x-5">
        {dataArray.map((item, i) => {
          return (
            <div
              className="flex   justify-center flex-col items-center"
              key={i}
            >
              <div className="flex relative justify-center items-center lg:p-6 p-11 bg-[#F5F5F5] lg:w-[270px] sm:w-[290px] w-[80%]  lg:h-[250px]">
                {/* Add to Cart Section */}
                <div className="absolute bg-black text-white w-full h-10 flex justify-center items-center bottom-0 cursor-pointer">
                  Add To Cart
                </div>

                <Image
                  className="lg:w-[190px] "
                  src={item.img}
                  alt=""
                  width={1000}
                  height={1000}
                />
              </div>
              <h2 className="text-[16px] py-2 font-[500]">{item.name}</h2>
              <p className="font-[500] py-1 text-[#DB4444]">{item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Wish;
