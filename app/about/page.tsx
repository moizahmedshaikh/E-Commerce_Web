import Image from "next/image";
import Testimonials from "./Testimonials";
import CustomerShip from "./CustomerShip";

function page() {
  return (
    <div className="max-w-full mx-auto">
      <div>
        <div className="lg:my-7 mt-6">
          <div className="lg:w-[114px] lg:h-[21px]  ml-16">
            <span className="text-[14px]">
              <span className="opacity-35">Home </span> / About
            </span>
          </div>

          <div className=" flex md:flex-row flex-col justify-center lg:justify-between items-center ">
            <div className="lg:w-[525px] md:w-[400px] w-full lg:h-[336px] lg:pl-14 lg:p-3 p-6">
              <h1 className="md:text-[54px] text-start text-[30px] font-[600] pb-10 tracking-[5px]">
                Our Story
              </h1>
              <p className="sm:text-[17px] text-[14px] text-start px-2">
                Launced in 2015, Exclusive is South Asia&apos;s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.{" "}
              </p>
              <br />
              <p className="sm:text-[17px] text-[14px]  text-start px-2 pt-2">
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>

            <div className="lg:w-[705px] md:w-[550px] lg:mx-0 mx-3 lg:h-[609px] lg:my-16">
              <Image
                src={"/about/about.png"}
                width={12000}
                height={12000}
                alt={""}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-full my-12 ">
        <div className="flex justify-center items-center mx-auto w-full">
          <div className="lg:w-[1170px]   lg:mx-auto mx-8 gap-8 grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-y-3   items-center ">
            <div className="w-[270px] border border-gray-300  hover:bg-[#DB4444] hover:text-white  items-center justify-center  h-[230px]  flex-col  rounded-[4px] flex ">
              <div className="rounded-full  mx-auto  flex items-center justify-center  bg-[#9d9c9d] w-[50px] h-[50px] ">
                <Image
                  className="relative h-[32px] rounded-full p-[3px] bg-black  w-[33.66px]"
                  src={"/about/icon_shop.png"}
                  width={100}
                  height={100}
                  alt={""}
                />
              </div>
              <div className="mx-auto text-center">
                <h2 className="text-[32px] font-[700]">10.5k </h2>
                <p className="text-[16px]">Sallers active our site</p>
              </div>
            </div>

            <div className="w-[270px] border border-gray-300 bg-[#DB4444] text-white  items-center justify-center  h-[230px] flex-col  rounded-[4px] flex ">
              <div className="rounded-full mx-auto flex items-center justify-center  bg-[#ceccced6] w-[50px] h-[50px] ">
                <Image
                  className="relative h-[32px] rounded-full p-[3px] bg-white  w-[33.66px]"
                  src={"/about/Icon-Sale (1).png"}
                  width={100}
                  height={100}
                  alt={""}
                />
              </div>
              <div className="mx-auto text-center">
                <h2 className="text-[32px] font-[700]">33k </h2>
                <p className="text-[16px]">Mopnthly Produduct Sale</p>
              </div>
            </div>

            <div className="w-[270px] border border-gray-300 00 hover:bg-[#DB4444] hover:text-white items-center justify-center  h-[230px]  flex-col  rounded-[4px] flex ">
              <div className="rounded-full mx-auto flex items-center justify-center  bg-[#9d9c9d] w-[50px] h-[50px] ">
                <Image
                  className="relative h-[32px] rounded-full p-[3px] bg-black  w-[33.66px]"
                  src={"/about/icon_shop.png"}
                  width={100}
                  height={100}
                  alt={""}
                />
              </div>
              <div className="mx-auto text-center">
                <h2 className="text-[32px] font-[700]">45.5k </h2>
                <p className="text-[16px]">Customer active in our site</p>
              </div>
            </div>

            <div className="w-[270px] hover:bg-[#DB4444] hover:text-white items-center justify-center  h-[230px]  border border-gray-300 flex-col  rounded-[4px] flex ">
              <div className="rounded-full mx-auto flex items-center justify-center  bg-[#9d9c9d] w-[50px] h-[50px] ">
                <Image
                  className="relative h-[32px] rounded-full p-[3px] bg-black  w-[33.66px]"
                  src={"/about/icon_shop.png"}
                  width={100}
                  height={100}
                  alt={""}
                />
              </div>
              <div className="mx-auto text-center">
                <h2 className="text-[32px] font-[700]">25k </h2>
                <p className="text-[16px]">Anual gross sale in our site</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />
      <CustomerShip />
    </div>
  );
}

export default page;
