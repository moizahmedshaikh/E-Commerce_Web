import Image from "next/image";

function page() {
  return (
    <div className="max-w-[1170px] ">
      <div className="lg:max-w-[1305px]  px-5 xl:h-[781px] my-[70px] lg:mb-[120px]  flex lg:flex-row flex-col-reverse items-center lg:justify-between justify-evenly">
        <div className="lg:w-[700px] xl:h-[781px]">
          <Image
            className=""
            width={4000}
            height={4000}
            src={"/auth/side.png"}
            alt={""}
          />
        </div>
        <div className="lg:w-[371px] lg:mb-0 mb-9 xl:h-[530px]  flex flex-col justify-center items-center ">
          <h1 className="md:text-[36px] text-[25px] font-[500] tracking-[4%] pb-4">
            Log in to Exclusive
          </h1>
          <p className="text-[16px] pb-7 pt-3">Enter your details below</p>
          <div className="mb-7 flex flex-col justify-center items-center h-[176px] text-[16px]">
            <input
              className="outline-none border-b-2 pb-[3px]  sm:w-[370px] w-[300px] border-gray-400 pt-6"
              type="email"
              placeholder="Email or phone Number"
            />
            <input
              className="outline-none  border-b-2 pb-[3px]  sm:w-[370px]  w-[300px] border-gray-400 pt-8"
              type="password"
              placeholder="password"
            />
          </div>
          <div className="flex justify-between items-center md:gap-x-20 gap-x-20">
            <button className="bg-[#DB4444] md:px-[48px] rounded-[4px] md:py-[16px] px-[35px] py-[10px]  text-white">
              Log in
            </button>
            <p className="text-[#DB4444] md:text-[16px] text-[9px]">
              Forget Password?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
