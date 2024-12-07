"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { UserIcon } from "@heroicons/react/24/outline";

import Link from "next/link";
import {
  HeartIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { Navlinks } from "@/constant/Navlinks";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <nav className="w-full">
      <div className="max-w-[1170px] h-[38px] gap-5 flex justify-between items-center mx-auto mt-[38px] mb-[16px] md:px-7 px-4">
        <div className="max-w-[675px] h-[24px] my-auto flex items-center justify-between gap-[110px]">
          <h1 className="font-style md:text-[24px] text-[18px] font-[700] tracking-[3%]">
            Exclusive
          </h1>
          <div className="lg:flex gap-[48px] hidden">
            {Navlinks.map((link) => {
              return (
                <Link href={link.url} key={link.id} className="nav_links">
                  {link.lable}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="max-w-[347px] flex gap-[24px]">
          <div className=" md:w-[243px] w-[150px] md:h-[38px] h-[30px] py-[7px] pr-2 md:pl-5 rounded-[4px] items-center flex justify-between bg-[#F5F5F5]">
            <input
              type="text"
              placeholder="What are you looking for?"
              className=" pr-3 pl-5 bg-[#F5F5F5] md:text-[12px] text-[8px] leading-[18px] "
            />
            <MagnifyingGlassIcon className="w-[16px]  top-4 left-4 h-[16px] text-black" />
          </div>
          <div className="lg:flex hidden gap-4">
            <Link className="flex items-center" href={"/wishlist"}>
              <HeartIcon className="w-[20px] " />
            </Link>
            <Link className="flex items-center" href={"/cart"}>
              <ShoppingCartIcon className="w-[20px] " />
            </Link>

            <DropdownMenu >
              <DropdownMenuTrigger>
                <UserIcon className=" w-6 p-[2px] bg-red-500 text-white rounded-full" />
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-56">
                <div className="flex justify-center">
                  <DropdownMenuLabel>
                    <div className="flex gap-x-2">
                      <UserIcon className="w-7 p-[1px]  rounded-full" />
                      Manage My Account
                    </div>
                  </DropdownMenuLabel>
                </div>

                
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-center">My Order</DropdownMenuItem>
                <DropdownMenuItem className="text-center">My Cancellations</DropdownMenuItem>
                <DropdownMenuItem className="text-center">My Reviews</DropdownMenuItem>
                <DropdownMenuItem className="text-center">Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Bars3Icon onClick={showNavHandler} className="w-6 lg:hidden" />
        </div>
      </div>

      {/* Icon toggle for Mobile Menu */}

      <div className="w-full border-[0.3px] border-[#00000073] opacity-[30%]"></div>
      <div className="lg:hidden">
        <div
          className={`fixed ${navOpen} transform transition-all duration-500  inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}
        >
          {/* Nav Links */}
        </div>
        <div
          className={`top-0 fixed ${navOpen} transform transition-all duration-500 delay-300 flex justify-center flex-col h-screen w-[80%] sm:w-[60%]  bg-[#ffffff] z-[10000] space-y-6`}
        >
          <div className="flex justify-center gap-9 items-center mb-10">
            <HeartIcon className="sm:w-12 w-8" />
            <ShoppingCartIcon className="sm:w-12 w-8" />
          </div>

          {Navlinks.map((link) => {
            return (
              <Link className="flex" key={link.id} href={link.url}>
                <p className="nav_links text-[20px] ml-12 border-b-[1.5px] pb-2 sm:text-[30px] text-black">
                  {link.lable}
                </p>
              </Link>
            );
          })}
          
          <CgClose
            onClick={closeNavHandler}
            className="absolute top-[0.7rem] right-[1.4rem] w-6 h-6 sm:w-8 sm:h-8 text-black"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
