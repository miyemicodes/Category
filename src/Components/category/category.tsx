import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

export default function Category() {
  return (
    <>
      <div className="w-full grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-2 px-8">
        <div className="flex flex-col items-center justify-start gap-4 border rounded-md w-[300px] lg:w-[220px] px-1">
          <div className="h-[250px]  w-[300px] lg:w-[220px]">
            <img
              src=""
              className="rounded-md h-[250px] w-[300px] lg:w-[220px] object-cover"
            />
          </div>

          <div className="flex flex-col gap-2 w-[300px] lg:w-[220px] px-2 mb-2">
            <div className="flex flex-row items-center justify-between">
              <p className="font-semibold font-sans"> Necklaces</p>

              <div className="flex items-center justify-center gap-1">
                <span className="text-sm md:text-base">4.5</span>
                <div className="flex items-center justify-center gap-0 text-[11px] md:text-sm">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStarHalf className="text-yellow-500" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2">
              <p className="font-semibold text-lg">$95.00</p>
              <FaCartShopping className="bg-transparent text-black text-lg " />
            </div>

            <div className="flex items-center justify-between gap-2">
              <button>
                <FiEdit3 className="text-[#967f50] md:text-base" />
              </button>
              <button className="text-lg">
                <MdDeleteOutline className="text-[#967f50]" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-start gap-4 border rounded-md w-[300px] lg:w-[220px] px-1">
          <div className="h-[250px]  w-[300px] lg:w-[220px]">
            <img
              src=""
              className="rounded-md h-[250px] w-[300px] lg:w-[220px] object-cover"
            />
          </div>

          <div className="flex flex-col gap-2 w-[300px] lg:w-[220px] px-2 mb-2">
            <div className="flex flex-row items-center justify-between">
              <p className="font-semibold font-sans"> Necklaces</p>

              <div className="flex items-center justify-center gap-1">
                <span className="text-sm md:text-base">4.5</span>
                <div className="flex items-center justify-center gap-0 text-[11px] md:text-sm">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStarHalf className="text-yellow-500" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2">
              <p className="font-semibold text-lg">$95.00</p>
              <FaCartShopping className="bg-transparent text-black text-lg " />
            </div>

            <div className="flex items-center justify-between gap-2">
              <button>
                <FiEdit3 className="text-[#967f50] md:text-base" />
              </button>
              <button className="text-lg">
                <MdDeleteOutline className="text-[#967f50]" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-start gap-4 border rounded-md w-[300px] lg:w-[220px] px-1">
          <div className="h-[250px]  w-[300px] lg:w-[220px]">
            <img
              src=""
              className="rounded-md h-[250px] w-[300px] lg:w-[220px] object-cover"
            />
          </div>

          <div className="flex flex-col gap-2 w-[300px] lg:w-[220px] px-2 mb-2">
            <div className="flex flex-row items-center justify-between">
              <p className="font-semibold font-sans"> Necklaces</p>

              <div className="flex items-center justify-center gap-1">
                <span className="text-sm md:text-base">4.5</span>
                <div className="flex items-center justify-center gap-0 text-[11px] md:text-sm">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStarHalf className="text-yellow-500" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2">
              <p className="font-semibold text-lg">$95.00</p>
              <FaCartShopping className="bg-transparent text-black text-lg " />
            </div>

            <div className="flex items-center justify-between gap-2">
              <button>
                <FiEdit3 className="text-[#967f50] md:text-base" />
              </button>
              <button className="text-lg">
                <MdDeleteOutline className="text-[#967f50]" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-start gap-4 border rounded-md w-[300px] lg:w-[220px] px-1">
          <div className="h-[250px]  w-[300px] lg:w-[220px]">
            <img
              src=""
              className="rounded-md h-[250px] w-[300px] lg:w-[220px] object-cover"
            />
          </div>

          <div className="flex flex-col gap-2 w-[300px] lg:w-[220px] px-2 mb-2">
            <div className="flex flex-row items-center justify-between">
              <p className="font-semibold font-sans"> Necklaces</p>

              <div className="flex items-center justify-center gap-1">
                <span className="text-sm md:text-base">4.5</span>
                <div className="flex items-center justify-center gap-0 text-[11px] md:text-sm">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStarHalf className="text-yellow-500" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2">
              <p className="font-semibold text-lg">$95.00</p>
              <FaCartShopping className="bg-transparent text-black text-lg " />
            </div>

            <div className="flex items-center justify-between gap-2">
              <button>
                <FiEdit3 className="text-[#967f50] md:text-base" />
              </button>
              <button className="text-lg">
                <MdDeleteOutline className="text-[#967f50]" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-start gap-4 border rounded-md w-[300px] lg:w-[220px] px-1">
          <div className="h-[250px]  w-[300px] lg:w-[220px]">
            <img
              src=""
              className="rounded-md h-[250px] w-[300px] lg:w-[220px] object-cover"
            />
          </div>

          <div className="flex flex-col gap-2 w-[300px] lg:w-[220px] px-2 mb-2">
            <div className="flex flex-row items-center justify-between">
              <p className="font-semibold font-sans"> Necklaces</p>

              <div className="flex items-center justify-center gap-1">
                <span className="text-sm md:text-base">4.5</span>
                <div className="flex items-center justify-center gap-0 text-[11px] md:text-sm">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStarHalf className="text-yellow-500" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2">
              <p className="font-semibold text-lg">$95.00</p>
              <FaCartShopping className="bg-transparent text-black text-lg " />
            </div>

            <div className="flex items-center justify-between gap-2">
              <button>
                <FiEdit3 className="text-[#967f50] md:text-base" />
              </button>
              <button className="text-lg">
                <MdDeleteOutline className="text-[#967f50]" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-start gap-4 border rounded-md w-[300px] lg:w-[220px] px-1">
          <div className="h-[250px]  w-[300px] lg:w-[220px]">
            <img
              src=""
              className="rounded-md h-[250px] w-[300px] lg:w-[220px] object-cover"
            />
          </div>

          <div className="flex flex-col gap-2 w-[300px] lg:w-[220px] px-2 mb-2">
            <div className="flex flex-row items-center justify-between">
              <p className="font-semibold font-sans"> Necklaces</p>

              <div className="flex items-center justify-center gap-1">
                <span className="text-sm md:text-base">4.5</span>
                <div className="flex items-center justify-center gap-0 text-[11px] md:text-sm">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStarHalf className="text-yellow-500" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2">
              <p className="font-semibold text-lg">$95.00</p>
              <FaCartShopping className="bg-transparent text-black text-lg " />
            </div>

            <div className="flex items-center justify-between gap-2">
              <button>
                <FiEdit3 className="text-[#967f50] md:text-base" />
              </button>
              <button className="text-lg">
                <MdDeleteOutline className="text-[#967f50]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
