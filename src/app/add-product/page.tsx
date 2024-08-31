import React from "react";
import { FaCameraRetro } from "react-icons/fa6";

export default function Addproduct() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-2">
      <button className="flex flex-col items-center justify-center gap-2 border p-5 rounded-full">
        <FaCameraRetro className="text-6xl text-[#967f50]" />
        <p className="text-sm text-[#967f50]">Upload Image</p>
      </button>

      <form className="flex flex-col items-center justify-center gap-4 w-full px-4">
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

        <select className="border p-3 rounded-lg outline-none text-sm bg-[#f5f5f2] w-full">
          <option>Product By Category</option>
          <option>Men</option>
          <option>Women</option>
          <option>Necklaces</option>
          <option>Earrings</option>
          <option>Bracelets</option>
          <option>Rings</option>
        </select>

        <select className="border p-3 rounded-lg outline-none text-sm bg-[#f5f5f2] w-full">
          <option>Brand By Category</option>
          <option>Versace</option>
          <option>Pandora</option>
          <option>Tiffany & Co.</option>
          <option>Boucheron </option>
        </select>

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

      <button className="text-[#967f50] border-2 border-[#967f50]  font-semibold hover:bg-[#967f50] w-full p-2 rounded-md hover:text-white">
        ADD PRODUCT
      </button>
    </div>
  );
}
