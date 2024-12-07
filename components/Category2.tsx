import Image from "next/image"

function Category2() {
  return (
    <div className="max-w-[1170px]  my-16 mx-auto lg:h-[500px] text-white bg-[#000000]">
    <div className="flex justify-center lg:items-center items-center lg:flex-row flex-col gap-5">
      {/* Content */}
      <div className="md:px-0 px-4 pt-4">
        <p className="text-[#00FF66] my-2 tracking-[4%] leading-[60px]">
          Categories
        </p>
        <h1 className="md:text-[48px] text-[38px] mb-10 font-[600]">
          Enhance Your <br /> Music Experience
        </h1>
        <div className="flex gap-x-5 pb-10  items-center">
          <div className="w-[62px]">
            <Image
              src={"/category/Flash-Timer.png"}
              alt=""
              width={3000}
              height={3000}
            />
          </div>

          <div className="w-[62px]">
            <Image
              src={"/category/Flash-Timer2.png"}
              alt=""
              width={3000}
              height={3000}
            />
          </div>

          <div className="w-[62px]">
            <Image
              src={"/category/Flash-Timer3.png"}
              alt=""
              width={3000}
              height={3000}
            />
          </div>
          <div className="w-[62px]">
            <Image
              src={"/category/Flash-Timer4.png"}
              alt=""
              width={3000}
              height={3000}
            />
          </div>
        </div>
        <button className="py-[16px]  px-[48px] bg-[#00FF66] text-white rounded">
          Buy Now!
        </button>
      </div>

      {/* Image */}
      <div className="lg:w-[568px] sm:w-[500px] lg:h-[330px] p-12">
        <Image
          src={"/category/music.png"}
          width={2000}
          height={2000}
          alt={""}
          style={{ transformStyle: "flat" }}
          className="object-cover"
        />
      </div>
    </div>
  </div>
  )
}

export default Category2