import Image from "next/image";

function Testimonials() {
  return (
    <div className="max-w-full my-16 flex justify-center">
      <div className=" lg:w-[1170px]  lg:h-[564px]  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-y-6   items-center gap-x-[30px] mx-auto">

        <div className="lg:w-[370px]  lg:h-[564px] ">
          <div className="lg:w-[370px] w-[290px] mx-auto lg:h-[430px]">
            <Image
              src={"/about/Frame3.png"}
              width={1000}
              height={1000}
              alt={""}
            />
            <div className="py-3">
              <h1 className="text-[32px] font-[500]">Tom Cruise</h1>
              <p className="text-[16px] py-[2px]">Founder & Chairman</p>
              <div className="flex gap-x-3 items-center ">
                <Image
                  className="w-[24px] h-[24px]"
                  src={"/about/Twitter.png"}
                  alt="twitter"
                  width={300}
                  height={300}
                />
                <Image
                  className="w-[20px] h-[20px]"
                  src={"/about/Insta.png"}
                  alt="insta"
                  width={300}
                  height={300}
                />
                <Image
                  className="w-[24px] h-[24px]"
                  src={"/about/Linkedin.png"}
                  alt="linkedin"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-[370px] lg:h-[564px] ">
          <div className="lg:w-[370px] w-[290px] mx-auto lg:h-[430px]">
            <Image
              src={"/about/Frame1.png"}
              width={7000}
              height={7000}
              alt={""}
            />
            <div className="py-3">
              <h1 className="text-[32px] font-[500]">Emma Watson</h1>
              <p className="text-[16px] py-[2px]">Managing Director</p>
              <div className="flex gap-x-3 items-center ">
                <Image
                  className="w-[24px] h-[24px]"
                  src={"/about/Twitter.png"}
                  alt="twitter"
                  width={300}
                  height={300}
                />
                <Image
                  className="w-[20px] h-[20px]"
                  src={"/about/Insta.png"}
                  alt="insta"
                  width={300}
                  height={300}
                />
                <Image
                  className="w-[24px] h-[24px]"
                  src={"/about/Linkedin.png"}
                  alt="linkedin"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-[370px] lg:h-[564px] ">
          <div className="lg:w-[370px] w-[290px] mx-auto lg:h-[430px]">
            <Image
              src={"/about/Frame2.png"}
              width={7000}
              height={7000}
              alt={""}
            />
            <div className="py-3">
              <h1 className="text-[32px] font-[500]">Will Smith</h1>
              <p className="text-[16px] py-[2px]">Product Designer</p>
              <div className="flex gap-x-3 items-center ">
                <Image
                  className="w-[24px] h-[24px]"
                  src={"/about/Twitter.png"}
                  alt="twitter"
                  width={300}
                  height={300}
                />
                <Image
                  className="w-[20px] h-[20px]"
                  src={"/about/Insta.png"}
                  alt="insta"
                  width={300}
                  height={300}
                />
                <Image
                  className="w-[24px] h-[24px]"
                  src={"/about/Linkedin.png"}
                  alt="linkedin"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>



    
    </div>
  );
}

export default Testimonials;
