import Image from "next/image";

function page() {
  return (
    <div className="w-full mt-20 mb-24 px-4  lg:px-20">
      <div>
        <span>Home / contact</span>
      </div>
      <div className="lg:mx-14 mt-20  flex lg:flex-row flex-col justify-center lg:justify-between items-center gap-x-7">
        <div className="lg:max-w-[340px] h-[457px]  ">
          <div className="lg:w-[270px] w-full h-[366px] mx-auto">
            <div className=" pb-10 ">
              <div className="flex items-center gap-x-5 py-5">
                <Image
                  className="w-[40px] h-[40px]"
                  src={"/contact/phone.png"}
                  width={100}
                  height={100}
                  alt={""}
                />
                <h1 className="text-[16px] font-[500]">Call To Us</h1>
              </div>
              <p className="text-[14px] pb-4">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-[14px]">Phone: +8801611112222</p>
            </div>
            <hr className="h-[2px] bg-black w-full " />
            <div className="">
              <div className="flex items-center gap-x-5 pt-5 pb-4">
                <Image
                  className="w-[40px] h-[40px]"
                  src={"/contact/mail.png"}
                  width={100}
                  height={100}
                  alt={""}
                />
                <h1 className="text-[16px] font-[500]">Write To Us</h1>
              </div>
              <p className="text-[14px] leading-[21px] pb-4">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-[14px] leading-[21px] pb-3">
                Emails: customer@exclusive.com
              </p>
              <p className="text-[14px] leading-[21px] py-2">
                Emails: support@exclusive.com
              </p>
            </div>
          </div>
        </div>

        <div className="lg:max-w-[800px] w-full mt-10 h-[475px]  lg:p-3">
          <div className="lg:w-[737px] w-full h-[377px] mx-auto">
            <div className="lg:w-[737px] w-full lg:h-[50px]  flex justify-between gap-y-5 items-center lg:flex-row flex-col  mb-10">
              <input
                className="bg-[#F5F5F5] lg:w-[235px] w-[90%] px-3 h-[50px]"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="bg-[#F5F5F5] lg:w-[235px] w-[90%] px-3  h-[50px]"
                type="email"
                placeholder="Your Email"
              />
              <input
                className="bg-[#F5F5F5] lg:w-[235px] w-[90%] px-3  h-[50px]"
                type="tel"
                placeholder="Your Phone"
              />
            </div>
            <div className="flex items-center justify-center">
              <textarea
                placeholder="Your Messsage"
                className="lg:w-[737px] w-[90%] px-3 py-2 h-[207px] bg-[#F5F5F5]"
              ></textarea>
            </div>
            <div className="flex lg:justify-end justify-center items-center mt-7">
              <button className="bg-[#DB4444] text-white py-[16px] px-[48px] rounded-[4px] ">
                Send Massage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
