import React from "react";
// import { FaCartShopping, FaUser } from "react-icons/fa6";
// import Search from "../search/search";

export default function Nav() {
  return (
    <>
      <nav className="border-b-2 p-5 bg-[#fbf3e2] flex w-[100%] items-center justify-between">
        <div className="text-[#272727] font-serif text-2xl font-semibold">
          <h1>YesEl</h1>
        </div>

        <div className="flex flex-row items-center justify-center gap-5">
          {/* <Search /> */}

          <div className="text-xl text-[#967f50] flex flex-row items-center justify-center gap-5">
            {/* <FaCartShopping />
            <FaUser /> */}
          </div>
        </div>
      </nav>
    </>
  );
}
