
import Link from "next/link";
import React from "react";

const Notfound = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="py-36">
        <h1 className="text-center text-3xl font-bold">Not Found</h1>
        <Link href={"/"} >
        <p className="text-center hover:underline pt-2">
           Back To Home
        </p>
        </Link>
      </div>
    </div>
  );
};

export default Notfound;
