import React from "react";
import { Link } from "react-router-dom";
import Img4 from "../assets/img4.jpg";

const OurColumn = () => {
  return (
    <div
      className="flex flex-col bg-black text-white h-screen max-[768px]:h-fit px-28 max-[768px]:px-8 py-20 max-[768px]:py-10"
      id="blog"
    >
      <h1 className="flex basis-1/6 text-4xl max-[768px]:mb-4">Our Column</h1>
      <div className="flex basis-5/6">
        <div className="grid grid-cols-4 gap-4 max-[768px]:grid-cols-1">
          <div className="flex flex-col border-2 w-75 bg-white h-full px-6 py-4 max-[768px]:px-2 max-[768px]:py-2 rounded-xl cursor-pointer">
            <div className="flex basis-6/12">
              <img className="rounded-xl" src={Img4} alt="" />
            </div>
            <div className="flex basis-1/12">
              <h1 className="text-2xl text-black font-semibold my-4 max-[768px]:my-2 max-[768px]:text-lg">
                Digital Arts Conclave
              </h1>
            </div>
            <div className="flex basis-3/12 text-lg max-[768px]:text-sm text-slate-900">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex modi
              aliquam iure
            </div>
            <div className="flex basis-2/12 items-center justify-center">
              <Link to="/blog1">
                <button
                  type="button"
                  class="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs tracking-wide uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Read More
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col border-2 w-75 bg-white h-full px-6 py-4 max-[768px]:px-2 max-[768px]:py-2 rounded-xl cursor-pointer">
            <div className="flex basis-6/12">
              <img className="rounded-xl" src={Img4} alt="" />
            </div>
            <div className="flex basis-1/12">
              <h1 className="text-2xl text-black font-semibold my-4 max-[768px]:my-2 max-[768px]:text-lg">
                The 15s Disaster
              </h1>
            </div>
            <div className="flex basis-3/12 text-lg max-[768px]:text-sm text-slate-900">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex modi
              aliquam iure
            </div>
            <div className="flex basis-2/12 items-center justify-center">
              <Link to="/blog2">
                <button
                  type="button"
                  class="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs  tracking-wide uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Read More
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col border-2 w-75 bg-white h-full px-6 py-4 max-[768px]:px-2 max-[768px]:py-2 rounded-xl cursor-pointer">
            <div className="flex basis-6/12">
              <img className="rounded-xl" src={Img4} alt="" />
            </div>
            <div className="flex basis-1/12">
              <h1 className="text-2xl text-black font-semibold my-4 max-[768px]:my-2 max-[768px]:text-lg">
                Our Photowalks
              </h1>
            </div>
            <div className="flex basis-3/12 text-lg max-[768px]:text-sm text-slate-900">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex modi
              aliquam iure
            </div>
            <div className="flex basis-2/12 items-center justify-center">
              <button
                type="button"
                class="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs  tracking-wide uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
              >
                Read More
              </button>
            </div>
          </div>
          <div className="flex flex-col border-2 w-75 bg-white h-full px-6 py-4 max-[768px]:px-2 max-[768px]:py-2 rounded-xl cursor-pointer">
            <div className="flex basis-6/12">
              <img className="rounded-xl" src={Img4} alt="" />
            </div>
            <div className="flex basis-1/12">
              <h1 className="text-2xl text-black font-semibold my-4 max-[768px]:my-2 max-[768px]:text-lg">
                Short Film For IFP
              </h1>
            </div>
            <div className="flex basis-3/12 text-lg max-[768px]:text-sm text-slate-900">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex modi
              aliquam iure
            </div>
            <div className="flex basis-2/12 items-center justify-center">
              <button
                type="button"
                class="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs tracking-wide uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurColumn;
