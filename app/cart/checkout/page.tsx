"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const { cartDetails, clearCart } = useShoppingCart();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const firstName = formData.get("firstName")?.toString().trim();
    const streetAddress = formData.get("streetAddress")?.toString().trim();
    const city = formData.get("city")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const email = formData.get("email")?.toString().trim();

    if (!firstName || !streetAddress || !city || !phone || !email) {
      setErrorMessage("Please fill all required fields.");
      return;
    }

    setErrorMessage("");

    clearCart();
    router.push("/cart/checkout/success");
  };

  return (
    <div className="max-w-[1170px]  mx-auto md:px-12 px-8 py-16">
      <span className="text-gray-400">Home / cart</span> / <span>checkout</span>
      <form onSubmit={handleSubmit}>
        <h1 className="text-4xl font-[500] mt-16">Billing Details</h1>
        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-32 md:gap-20 gap-12 pt-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-gray-400">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="w-full bg-gray-100 outline-none px-4 py-3 mt-3"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="streetAddress" className="text-gray-400">
                Street Address
              </label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                required
                className="w-full bg-gray-100 outline-none px-4 py-3 mt-3"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="city" className="text-gray-400">
                Town/City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                required
                className="w-full bg-gray-100 outline-none px-4 py-3 mt-3"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="text-gray-400">
                Phone Number
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                required
                className="w-full bg-gray-100 outline-none px-4 py-3 mt-3"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-400">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-gray-100 outline-none px-4 py-3 mt-3"
              />
            </div>
          </div>

          {/* Right section */}
          <div>
            {Object.values(cartDetails ?? {}).map((entry) => (
              <div
                key={entry.id}
                className="flex justify-between items-center mt-8"
              >
                <div className="flex items-center gap-8">
                  <Image
                    src={entry.image as string}
                    alt=""
                    height={60}
                    width={60}
                  />
                  <h2>{entry.name}</h2>
                </div>
                <p>${entry.price}</p>
              </div>
            ))}

            <div className="flex justify-between items-center pb-3 mt-8 border-b-2 border-gray-500">
              <h2>Subtotal</h2>
              <p>$200</p>
            </div>

            <div className="flex justify-between items-center pb-3 mt-8 border-b-2 border-gray-500">
              <h2>Shipping</h2>
              <p>Free</p>
            </div>

            <div className="flex justify-between items-center pb-3 mt-8 ">
              <h2>Total:</h2>
              <p>$6273</p>
            </div>

            <button
              type="submit"
              className="md:w-[50%] w-full py-3 px-4 mt-7 bg-[#DB4444] hover:bg-[#a82929] text-white rounded-sm"
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
