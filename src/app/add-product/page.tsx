import React from "react";
import { FaCameraRetro } from "react-icons/fa6";

export default function Addproduct() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="flex items-center justify-center border p-5 rounded-full">
        <FaCameraRetro className="text-6xl text-[#967f50]" />
      </div>

      <form className="flex flex-col items-center justify-center w-full px-4">
        <div className="flex flex-col items-start justify-start w-full">
          <label className="font-semibold">Item Name</label>
          <input
            type="text"
            placeholder="Enter name of item"
            className="border placeholder:text-sm px-3 py-2 rounded-lg outline-none w-full"
          />
        </div>

        <div className="flex flex-col items-start justify-start w-full">
          <label className="font-semibold">Item Price</label>
          <input
            type="number"
            placeholder="Enter name of item"
            className="border placeholder:text-sm px-3 py-2 rounded-lg outline-none w-full"
          />
        </div>

        <div className="flex flex-col items-start justify-start">
          <p className="p-2 font-semibold">Select size :</p>

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

        <div className="flex flex-col items-start justify-start">
          <p className="p-2 font-semibold">Select color :</p>

          <ul className="flex flex-wrap items-center justify-start gap-3">
            <li className="border p-2 font-semibold rounded-xl hover:border-[#967f50]">
              Black
            </li>
            <li className="border p-2 font-semibold rounded-xl hover:border-[#967f50]">
              White
            </li>
            <li className="border p-2 font-semibold rounded-xl hover:border-[#967f50]">
              Red
            </li>
            <li className="border p-2 font-semibold rounded-xl hover:border-[#967f50]">
              Blue
            </li>
            <li className="border p-2 font-semibold rounded-xl hover:border-[#967f50]">
              Ash
            </li>
            <li className="border p-2 font-semibold rounded-xl hover:border-[#967f50]">
              Green
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}
