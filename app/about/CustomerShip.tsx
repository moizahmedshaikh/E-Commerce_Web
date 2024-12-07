import Image from "next/image";

function CustomerShip() {
  return (
    <div>
      <div className="max-w-[943px] lg:h-[161px] grid lg:grid-cols-3 md:grid-cols-2 gap-10  gap-x-[88px] my-28 mx-auto">
        <div className="lg:w-[249px] lg:h-[161px] ">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center  w-[70px] h-[70px] bg-[#c1bfbf] rounded-full ">
              <Image
                className="h-[40px] p-[2px] w-[40px] rounded-full bg-[#000000]"
                src={"/about/icon-delivery.png"}
                width={200}
                height={200}
                alt={""}
              />
            </div>

            <div>
              <h2 className="text-[20px] pt-3 pb-2 font-[600]">FREE AND FAST DELIVERY</h2>
              <p className="text-[14px] ">
                Free delivery for all orders over $140
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-[249px] lg:h-[161px]">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center  w-[70px] h-[70px] bg-[#c1bfbf] rounded-full ">
              <Image
                className="h-[40px] p-[2px] w-[40px] rounded-full bg-[#000000]"
                src={"/about/head.png"}
                width={200}
                height={200}
                alt={""}
              />
            </div>

            <div>
              <h2 className="text-[20px] pt-3 pb-2 font-[600]">FREE AND FAST DELIVERY</h2>
              <p className="text-[14px] ">
                Free delivery for all orders over $140
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-[249px] lg:h-[161px]">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center  w-[70px] h-[70px] bg-[#c1bfbf] rounded-full ">
              <Image
                className="h-[40px] p-[3px] w-[40px] rounded-full bg-[#000000]"
                src={"/about/right.png"}
                width={200}
                height={200}
                alt={""}
              />
            </div>

            <div>
              <h2 className="text-[20px] pt-3 pb-2 font-[600]">FREE AND FAST DELIVERY</h2>
              <p className="text-[14px] ">
                Free delivery for all orders over $140
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerShip;
