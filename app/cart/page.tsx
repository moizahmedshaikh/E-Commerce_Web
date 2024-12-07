import Image from "next/image";

function page() {
  return (
    <div className="max-w-[1170px]  mx-auto md:px-12 px-2 py-16">
      <span className="text-gray-400">Home</span>/ <span>Cart</span>
      <div className="lg:py-14">
        <div className="flex justify-between flex-col gap-y-20  ">
          <div className=" grid grid-cols-4 md:gap-20 gap-x-2 border-t-[1px] border-gray-100  shadow py-4 md:px-20">
            <h2 className="">Product</h2>
            <h2 className="">Price</h2>
            <h2 className="">Quantity</h2>
            <h2 className="">Subtotal</h2>
          </div>

          <div className=" grid grid-cols-4 items-center md:gap-20 gap-12 border-t-[1px] border-gray-100  shadow py-4 md:px-20">
            <div className="w-[65px]  relative group flex md:flex-row flex-col   gap-x-2 items-center">
              <div
                className="absolute -top-1.5 left-0 bg-red-700  text-white p-[1px] 
              rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  className="w-5"
                  src={"/cart/icon-cancel.png"}
                  width={50}
                  height={50}
                  alt={""}
                />
              </div>
              <Image src={"/cart/dragon.png"} alt="" width={200} height={200} />
              <h1 className="text-[12px] md:w-[25%] w-[50%]">LCD Monitor</h1>
            </div>
            <p>$650</p>
            <input
              type="number"
              defaultValue="01"
              min="1"
              max="99"
              className="md:w-16 w-[12] md:h-12 text-center border border-gray-400 rounded"
            />
            <p>$650</p>
          </div>

          <div className=" grid items-center grid-cols-4 md:gap-20 gap-12  shadow border-t-[1px] border-gray-100 py-4 md:px-20">
            <div className="w-[65px] relative group flex   md:flex-row flex-col  gap-x-2 items-center">
              <div
                className="absolute -top-1.5 left-0 bg-red-700  text-white p-[1px] 
              rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  className="w-5"
                  src={"/cart/icon-cancel.png"}
                  width={50}
                  height={50}
                  alt={""}
                />
              </div>
              <Image src={"/cart/game.png"} alt="" width={200} height={200} />
              <h1 className="text-[12px] md:w-[25%] w-[50%]">LCD Monitor</h1>
            </div>
            <p>$550</p>
            <input
              type="number"
              defaultValue="02"
              min="1"
              max="99"
              className="md:w-16 w-[12] md:h-12 text-center  border border-gray-400 rounded"
            />
            <p>$1100</p>
          </div>

          <div className="flex justify-between items-center md:flex-row flex-col gap-y-8 md:gap-y-0">
            <button className="md:px-[48px] md:py-[16px] px-[25px] py-[10px] border border-gray-500">
              Return To Shop
            </button>
            <button className="md:px-[48px] md:py-[16px] px-[33px] py-[10px] border border-gray-500">
              Update Cart
            </button>
          </div>
        </div>

        <div className=" my-20 flex lg:justify-between justify-center items-center  lg:items-start lg:flex-row flex-col-reverse ">
          <div className="flex sm:flex-row flex-col  gap-8 lg:gap-3 gap-x-3 my-6 lg:my-0">
            <input
              className="sm:w-[300px] w-[270px] h-[56px] rounded border-[1px] px-3 border-gray-600"
              type="text"
              placeholder="Coupon Code"
            />
            <button className="sm:w-[211px] w-[150px] h-[56px] rounded bg-[#DB4444] text-white">
              Apply Coupon
            </button>
          </div>

          <div className="lg:w-[470px] my-10 md:my-0 sm:w-[500px] w-[300px]  border-2 p-7 rounded border-gray-500">
            <div>

            </div>
            <h1 className="font-[500] text-[20px] ">Cart Total</h1>
            <div className="flex justify-between py-3">
              <h1>Subtotal:</h1>
              <p>$1750</p>
            </div>
            <div className="my-3 bg-gray-500 h-[1px]" />
            <div className="flex justify-between py-3">
              <h1>Shipping:</h1>
              <p>Free</p>
            </div>
            <div className="my-3 bg-gray-500 h-[1px] " />

            <div className="flex justify-between py-3">
              <h1>Total:</h1>
              <p>$1750</p>
            </div>
            <div className="flex justify-between items-center my-2">
              <button className="w-[260px] h-[56px] text-white bg-[#DB4444] mx-auto">
                Procees to checkout
              </button>
            </div>
          </div>


          
        </div>
      </div>
    </div>
  );
}

export default page;
