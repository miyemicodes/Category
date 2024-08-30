import React from "react";

export default function Sidebar() {
  return (
    <>
      <div className="hidden  lg:flex flex-col  gap-5 w-[20%]">
        <div className="flex-col items-start justify-start border p-1 rounded-lg">
          <h2 className="text-xl px-2 py-1 font-serif font-semibold">
            Product By Category
          </h2>

          <ul className="text-sm flex flex-col gap-1">
            <li className="px-2 py-1 hover:bg-[#f5f5f2]">Men</li>
            <li className="px-2 py-1 hover:bg-[#f5f5f2]"> Women</li>
            <li className="px-2 py-1 hover:bg-[#f5f5f2]">Necklaces</li>
            <li className="px-2 py-1 hover:bg-[#f5f5f2]">Earrings </li>
            <li className="px-2 py-1 hover:bg-[#f5f5f2]">Bracelets </li>
            <li className="px-2 py-1 hover:bg-[#f5f5f2]">Rings </li>
          </ul>
        </div>

        <div className="flex-col items-start justify-start border p-1 rounded-lg">
          <h2 className="text-xl px-2 py-1 font-serif font-semibold">
            Brand By Category
          </h2>
          <ul className="text-sm flex flex-col gap-1">
            <li className="px-2 py-1 hover:bg-[#f5f5f2]">Versace</li>
            <li className="px-2 py-1 hover:bg-[#f5f5f2]"> Pandora</li>
            <li className="px-2 py-1 hover:bg-[#f5f5f2]">Tiffany & Co.</li>
            <li className="px-2 py-1 hover:bg-[#f5f5f2]">Boucheron </li>
          </ul>
        </div>
      </div>
    </>
  );
}
