import React from "react";
import { FaCameraRetro } from "react-icons/fa6";

export default function Addproduct() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="flex items-center justify-center border p-5 rounded-full">
        <FaCameraRetro className="text-6xl text-[#967f50]" />
      </div>

      <form className="flex flex-col items-center justify-center ">
        <div>
          <label>Item Name</label>
          <input type="text" placeholder="Enter name of item" />
        </div>
        <div>
          <label>Item Price</label>
          <input type="number" placeholder="Enter name of item" />
        </div>

        <div>
          <p className="p-2 font-semibold">Select :</p>

          <ul className="flex flex-wrap items-center justify-start gap-3">
            <li className="border p-2 font-semibold rounded-xl hover:border-[#967f50]">
              XS
            </li>
            <li className="border p-2 font-semibold rounded-xl hover:border-[#967f50]">
              S
            </li>
            <li className="border p-2 font-semibold rounded-xl hover:border-[#967f50]">
              M
            </li>
            <li className="border p-2 font-semibold rounded-xl hover:border-[#967f50]">
              L
            </li>
            <li className="border p-2 font-semibold rounded-xl hover:border-[#967f50]">
              XL
            </li>
            <li className="border p-2 font-semibold rounded-xl hover:border-[#967f50]">
              XXL
            </li>
            <li className="border p-2 font-semibold rounded-xl hover:border-[#967f50]">
              XXXL
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}
