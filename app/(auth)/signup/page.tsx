import Image from "next/image";
import Link from "next/link";

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
            Create an account
          </h1>
          <p className="text-[16px] pb-7 pt-3">Enter your details below</p>
          <div className="mb-7 flex flex-col justify-center items-center h-[176px] text-[16px]">
            <input
              className="outline-none border-b-2  pb-[3px] sm:w-[370px] w-[300px] border-gray-400 mb-4"
              type="text"
              placeholder="Name"
            />
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
          <button className="lg:w-[371px] sm:w-[370px] w-[300px] h-[56px] rounded-[4px] bg-[#DB4444] text-white mb-5">
            Create Account
          </button>

          <button className="lg:w-[371px] sm:w-[370px] w-[300px] rounded-[4px] h-[56px] inline-flex items-center justify-center gap-x-4 border-[1px] border-black ">
            <Image
              className="w-[24px]  h-[24px]"
              src={"/auth/icon-g.png"}
              width={200}
              height={200}
              alt={""}
            />
            Sign up with Google
          </button>
          <p className="text-[16px] text-center pt-7">
            Already have account?{" "}
            <span className="font-[500] border-b border-black">
              <Link href={"/login"}>Log in</Link>{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
