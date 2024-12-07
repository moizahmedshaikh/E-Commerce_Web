import Image from "next/image";

function Arrival() {
  return (
    <div className="max-w-[1170px] mx-auto flex flex-col md:gap-8 gap-4 md:flex-row justify-between px-6">
      {/* Left Section */}
      <div className="relative md:w-[50%] w-full bg-black text-white">
        <Image
          src={"/arrival/ps5.png"}
          width={2000}
          height={2000}
          alt="PS5"
          className="w-full h-auto flex md:mt-48 lg:mt-32 object-cover"
        />
        <div className="absolute z-50  -mt-40 md:-mt-36  ml-6 md:w-[255px] w-[200px]">
          <h1 className="md:text-[24px] text-[15px] leading-[24px] pb-3 font-[600]">
            PlayStation 5
          </h1>
          <p className="md:text-[14px] text-[9px]">
            Black and White version of the PS5 coming out on sale.
          </p>
          <p className="underline font-[500] py-3">Shop Now</p>
        </div>
      </div>

      {/* Right Section */}
      <div className=" md:w-[570px] w-full flex flex-col md:gap-8 gap-4">
        {/* Women's Collection */}
        <div className="relative   bg-black text-white">
          <Image
            src={"/arrival/women.png"}
            width={2000}
            height={2000}
            alt="Women"
            className="w-full h-auto object-cover"
          />
          <div className="absolute -mt-24 md:-mt-48  z-50 md:w-[255px] w-[200px]  ml-4">
            <h1 className="md:text-[24px] text-[15px] leading-[24px]  md:pb-3  font-[600]">
              Women&apos;s Collections
            </h1>
            <p className="md:text-[14px] text-[9px] ">
              Black and White version of the PS5 coming out on sale.
            </p>
            <p className="underline font-[500] md:py-3">Shop Now</p>
          </div>
        </div>

        {/* Speakers and Perfume */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-8 ">
          {/* Speaker */}
          <div className="relative w-full md:w-[50%] bg-black text-white">
            <Image
              src={"/arrival/speaker.png"}
              width={2000}
              height={2000}
              alt="Speaker"
              className="w-full h-auto object-cover"
            />
            <div className="absolute -mt-24 md:-mt-40  z-50 md:w-[255px] w-[200px]  ml-4">
            <h1 className="md:text-[24px] text-[15px] leading-[24px]  md:pb-3  font-[600]">
            Speakers
            </h1>
            <p className="md:text-[14px] text-[9px] ">
            Amazon wireless speakers
            </p>
            <p className="underline font-[500]  py-3">Shop Now</p>
          </div>
          </div>

          {/* Perfume */}
          <div className="w-full relative md:w-[50%] bg-black text-white">
            <Image
              src={"/arrival/perfume.png"}
              width={2000}
              height={2000}
              alt="Perfume"
              className="w-full h-auto object-cover"
            />
            <div className="absolute -mt-24 md:-mt-40  z-50 md:w-[255px] w-[200px]  ml-4">
            <h1 className="md:text-[24px] text-[15px] leading-[24px]  md:pb-3  font-[600]">
            Perfume
            </h1>
            <p className="md:text-[14px] text-[9px] ">
            GUCCI INTENSE OUD EDP
            </p>
            <p className="underline font-[500]  py-3">Shop Now</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Arrival;

