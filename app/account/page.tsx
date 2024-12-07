import React from "react";

function page() {
  return (
    <div className="min-w-full lg:p-5">
      <div className="flex lg:justify-between justify-center lg:flex-row flex-col">
        <div className="lg:pl-20 ">
          <span className="text-gray-500">Home </span>/<span> My Account</span>
          <div className="text-[16px] leading-[24px] mt-36 ">
            <h1 className="font-[500] py-3">Manage My Account</h1>
            <div className="ml-4">
              <h3 className="text-[#DB4444]">My Profile</h3>
              <p className="opacity-[50%] py-2">Address Book</p>
              <p className="opacity-[50%]">My Payment Options</p>
            </div>
            <br />
            <h2 className="font-[500] py-4">My Orders</h2>
            <div className="ml-4">
              <p className="opacity-[50%]">My Returns</p>
              <p className="opacity-[50%]  py-3">My Cancellations</p>
            </div>
            <h3 className="font-[500]">My WishList</h3>
          </div>
        </div>

        <div className="lg:w-[870px] lg:h-[630px] w-full  my-24 shadow-lg shadow-[#dcd8d8] p-12">
          <h1 className="text-[20px] text-[#DB4444] font-[500]">
            Edit Your Profile
          </h1>
          <div className="lg:w-[710px] md:h-[82px] flex  flex-col  lg:flex-row gap-x-9">
            <div className="my-3">
              <h2 className="text-[16px]">First Name</h2>
              <input
                className="p-2 rounded-[4px] lg:w-[330px] lg:h-[50px] w-full bg-[#F5F5F5]"
                type="text"
                placeholder="Md"
              />
            </div>
            <div>
              <h2 className="text-[16px]">Last Name</h2>
              <input
                className="p-2 rounded-[4px] bg-[#F5F5F5] w-full lg:w-[330px] lg:h-[50px]"
                type="text"
                placeholder="Rimal"
              />
            </div>
          </div>

          <div className="lg:w-[710px]  lg:h-[82px] w-full  my-3   flex flex-col lg:flex-row gap-x-9">
            <div>
              <h2 className="text-[16px]  ">Email</h2>
              <input
                className="p-2 rounded-[4px] w-full  bg-[#F5F5F5] lg:w-[330px] lg:h-[50px]"
                type="email"
                placeholder="rimel1111@gmail.com"
              />
            </div>
            <div>
              <h2>Address</h2>
              <input
                className="p-2 rounded-[4px] bg-[#F5F5F5] w-full lg:w-[330px] lg:h-[50px]"
                type="text"
                placeholder="Kingston, 5236, United State"
              />
            </div>
          </div>

          <div className="lg:w-[710px] lg:h-[214px]">
            <div className="flex flex-col mt-4 gap-y-5">
              <h3 className="text-[16px]">Password Changes</h3>
              <input
                className="p-2 rounded-[4px] lg:w-[710px] lg:h-[50px] bg-[#F5F5F5]"
                type="text"
                placeholder="Current Password"
              />
              <input
                className="p-2 rounded-[4px] lg:w-[710px] lg:h-[50px] bg-[#F5F5F5]"
                type="text"
                placeholder="New Password"
              />
              <input
                className="p-2 rounded-[4px] lg:w-[710px] lg:h-[50px] bg-[#F5F5F5]"
                type="text"
                placeholder="Confirm New Password"
              />
            </div>
            <div className="flex lg:justify-end items-center mt-5">
              <span className="text-[16px] pr-5">Cancel</span>
              <button className="bg-[#DB4444] text-white px-[48px] py-[16px] rounded-[4px]">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
