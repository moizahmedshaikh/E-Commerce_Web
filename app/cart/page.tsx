"use client";

import Image from "next/image";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";

function Cart() {
  const { cartDetails, cartCount, removeItem, incrementItem, decrementItem } =
    useShoppingCart();

  console.log("cart count", cartCount);
  console.log("cart deatils", cartDetails);

  const total = Object.values(cartDetails ?? {}).reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  return (
    <div className="max-w-[1170px]  mx-auto md:px-12 px-2 py-16">
      <span className="text-gray-400">Home</span>/ <span>Cart</span>
      {cartCount === 0 ? (
        <h1 className="text-black font-bold flex justify-center text-4xl py-16 ">
          You Dont Have Any Items
        </h1>
      ) : (
        <div>
          <div className="lg:py-14">
            <div className="flex justify-between flex-col gap-y-20  ">
              <div className=" grid grid-cols-4 md:gap-20 gap-x-2 border-t-[1px] border-gray-100  shadow py-4 md:px-20">
                <h2 className="">Product</h2>
                <h2 className="">Price</h2>
                <h2 className="">Quantity</h2>
                <h2 className="">Subtotal</h2>
              </div>

              {Object.values(cartDetails ?? {}).map((entry) => (
                <div
                  key={entry.id}
                  className=" grid grid-cols-5 items-center md:gap-20 gap-12 border-t-[1px] border-gray-100  shadow py-4 md:px-20"
                >
                  <div className="w-[65px]  relative group flex md:flex-row flex-col   gap-x-2 items-center">
                    <div
                      className="absolute -top-1.5 left-0 bg-red-700  text-white p-[1px] 
              rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    ></div>
                    <Image
                      src={entry.image as string}
                      alt=""
                      width={200}
                      height={200}
                    />

                    <h1 className="text-[12px] md:w-[25%] w-[50%]">
                      LCD Monitor
                    </h1>
                  </div>
                  <p>${entry.price}</p>
                  {/* <input
                    type="number"
                    value={entry.quantity}
                    min="1"
                    max="99"
                    className="md:w-16 w-[12] md:h-12 text-center border border-gray-400 rounded"
                  /> */}

                  <div className="flex items-center border border-gray-500 overflow-hidden w-[80px]">
                    <button
                      onClick={() => decrementItem(entry.id)}
                      className="w-1/3 h-full text-lg text-gray-500 hover:bg-gray-200 flex justify-center items-center"
                    >
                      -
                    </button>
                    <div className="w-1/3 h-full flex justify-center border-l border-r border-gray-500  items-center text-md font-medium text-gray-700 border-x">
                      {entry.quantity}
                    </div>
                    <button
                      onClick={() => incrementItem(entry.id)}
                      className="w-1/3 h-full text-lg  text-gray-800 hover:bg-gray-200 flex justify-center items-center"
                    >
                      +
                    </button>
                  </div>
                  <p>{entry.quantity * entry.price}</p>
                  <span
                    className="p-2 cursor-pointer"
                    onClick={() => removeItem(entry.id)}
                  >
                    &times;
                  </span>
                </div>
              ))}

              <div className="flex justify-between items-center md:flex-row flex-col gap-y-8 md:gap-y-0">
                <button className="md:px-[48px] md:py-[16px] px-[25px] py-[10px] border border-gray-500">
                  <Link href={"#"}>Return to Top</Link>
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
                <div></div>
                <h1 className="font-[500] text-[20px] ">Cart Total</h1>
                <div className="flex justify-between py-3">
                  <h1>Subtotal:</h1>
                  <p>${total}</p>
                </div>
                <div className="my-3 bg-gray-500 h-[1px]" />
                <div className="flex justify-between py-3">
                  <h1>Shipping:</h1>
                  <p>Free</p>
                </div>
                <div className="my-3 bg-gray-500 h-[1px] " />

                <div className="flex justify-between py-3">
                  <h1>Total:</h1>
                  <p>${total}</p>
                </div>
                <div className="flex justify-between items-center my-2">
                  <button className="w-[260px] h-[56px] text-white bg-[#DB4444] hover:bg-[#a82929] mx-auto">
                    <Link href={"/cart/checkout"}>Procees to checkout</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
