import Image from "next/image";

function Footer() {
  return (
    <div className="bg-black text-[#cfcdcd] max-w-full px-9">
      <div className="max-w-[1440px] lg:h-[440px] pt-20 lg:px-4 px-3 flex flex-wrap items-center">
        <div className="lg:w-[1170px] lg:h-[236px]  grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 mx-4 md:mx-auto gap-[60px] lg:gap-[50px] text-[16px]">
          <div className="">
            <h1 className="text-[24px] font-[500] text-white ">Exclusive</h1>
            <h2 className="text-[20px] py-3">Subscribe</h2>
            <p className="py-3">Get 10% off your first order</p>
            <div className="inline-flex items-center ">
              <input
                className="bg-black  w-[214px] text-[14px] h-[48px] text-gray-300 border-[1px] p-2 border-[#FAFAFA]"
                type="text"
                placeholder="enter your email"
              />
              <Image
                className="-ml-10  w-[24px] h-[24px]"
                src={"/icons/icon-send.png"}
                width={50}
                height={50}
                alt={""}
              />
            </div>
          </div>

          <div>
            <h1 className="text-[20px] text-white font-[500]">Support</h1>
            <p className="py-3">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="py-3">exclusive@gmail.com</p>
            <p className="py-2">+88015-88888-9999</p>
          </div>

          <div>
            <h1 className="text-[20px] text-white font-[500]">Account</h1>
            <p className="py-3">My Account</p>
            <p className="py-2">Login / Register</p>
            <p className="py-2">Cart</p>
            <p className="py-2">Wishlist</p>
            <p className="py-2">Shop</p>
          </div>

          <div>
            <h1 className="text-[20px] text-white font-[500]">Quick Link</h1>
            <p className="py-3">Privacy Policy</p>
            <p className="py-3">Terms Of Use</p>
            <p className="py-3">FAQ</p>
            <p className="py-2">Contact</p>
          </div>

          <div>
            <h1 className="text-[20px] text-white font-[500] ">Download App</h1>
            <p className="pt-4 pb-2 text-[12px]">
              Save $3 with App New User Only
            </p>
            <div className="flex  items-center w-[198px] h-[84px]">
              <Image
                className="w-[80px] h-[80px]  "
                src={"/icons/QrCode.png"}
                width={10000}
                height={1000}
                alt={""}
              />

              <div className="flex flex-col gap-y-2 ml-2 ">
                <div>
                  <Image
                    className="lg:w-[110px] lg:h-[40px] rounded-[6px] border-[1px] border-white"
                    src={
                      "https://wsa2.pakwheels.com/assets/google-play-badge-fe1c02f5d509b88ec786cc1893f68200.svg"
                    }
                    width={2000}
                    height={2000}
                    alt={""}
                  />
                </div>
                <div>
                  <Image
                    className="w-[110px] h-[40px] rounded-[6px] border-[1px] border-white "
                    src={
                      "https://wsa4.pakwheels.com/assets/app-store-badge-47a3fa71b3442ad5181388d9060d4478.svg"
                    }
                    width={2000}
                    height={2000}
                    alt={""}
                  />
                </div>
              </div>
            </div>
            <div className="flex  items-center gap-x-8 py-5">
              <Image
                className="h-[24px] w-[24px]"
                src={"/about/Icon-Facebook.png"}
                width={100}
                height={100}
                alt=""
              />
              <Image
                className="h-[24px] text-white w-[24px]"
                src={"/about/Icon-Twitter2.png"}
                width={100}
                height={1000}
                alt=""
              />
              <Image
                className="h-[18px] w-[18px]"
                src={"/about/insta2.png"}
                width={1000}
                height={1000}
                alt=""
              />
              <Image
                className="h-[17.5px] w-[17.5px]"
                src={"/about/link2.png"}
                width={1000}
                height={1000}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <p className="text-[16px] text-[#F9F9F933] text-center py-3">
        Copyright Rimel 2022. All right reserved{" "}
      </p>
    </div>
  );
}

export default Footer;
