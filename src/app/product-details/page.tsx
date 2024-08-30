import React from "react";
import { FaPlus } from "react-icons/fa6";

export default function Product() {
  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-2 items-start justify-center gap-4">
      <div className="h-[250px]  w-full md:[500px]">
        <img
          src=""
          className="rounded-md h-[250px] w-full md:[500px] object-cover"
        />
      </div>

      <div className="flex flex-col items-start justify-center gap-8 md:px-6">
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-3xl">Necklaces</h2>
          <span className="font-semibold text-lg bg-[#967f50] p-2 text-white rounded-xl">
            $95.00
          </span>
        </div>

        <div className="flex flex-col items-center gap-6 ">
          <div className="flex flex-col items-start justify-start gap-2">
            <h2 className="font-semibold">COLOR</h2>
            <div className="flex flex-wrap items-center justify-start gap-3">
              <span className="border p-2 font-semibold rounded-xl hover:border-[#967f50]">
                Black
              </span>
              <span className="border p-2 font-semibold rounded-xl hover:border-[#967f50]">
                White
              </span>
              <span className="border p-2 font-semibold rounded-xl hover:border-[#967f50]">
                Blue
              </span>
              <span className="border p-2 font-semibold rounded-xl hover:border-[#967f50]">
                Green
              </span>
              <span className="border p-2 font-semibold rounded-xl hover:border-[#967f50]">
                Pink
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start gap-2">
            <h2 className="font-semibold">SIZE</h2>
            <div className="flex flex-wrap items-center justify-start gap-3">
              <span className="border p-2 font-semibold rounded-xl hover:border-[#967f50]">
                XS
              </span>
              <span className="border p-2 font-semibold rounded-xl hover:border-[#967f50]">
                S
              </span>
              <span className="border p-2 font-semibold rounded-xl hover:border-[#967f50]">
                M
              </span>
              <span className="border p-2 font-semibold rounded-xl hover:border-[#967f50]">
                L
              </span>
              <span className="border p-2 font-semibold rounded-xl hover:border-[#967f50]">
                XL
              </span>
              <span className="border p-2 font-semibold rounded-xl hover:border-[#967f50]">
                XXL
              </span>
              <span className="border p-2 font-semibold rounded-xl hover:border-[#967f50]">
                XXXL
              </span>
            </div>
          </div>

          <button className="flex items-center justify-center gap-3 text-lg bg-[#967f50] p-2 text-white rounded-xl w-full">
            <FaPlus />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
