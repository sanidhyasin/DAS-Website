import React from "react";
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img3.jpg";
import Img4 from "../assets/img4.jpg";
import Img5 from "../assets/img5.jpg";
import Img6 from "../assets/img6.jpg";
import Img7 from "../assets/img7.jpeg";
import Img8 from "../assets/img8.jpeg";

const HomeExtra = () => {
  return (
    <div
      className="flex flex-row max-[768px]:flex-col text-black bg-white h-[36rem] px-28 max-[768px]:px-8 pb-10"
      id="about"
    >
      <div className="flex basis-1/2 flex-col items-start justify-center">
        <h1 className="text-4xl max-[768px]:text-3xl">COMMUNITY OF</h1>
        <h1 className="text-7xl max-[768px]:text-3xl">Designers</h1>
        <h1 className="text-7xl max-[768px]:text-3xl">Photographers</h1>
        <h1 className="text-7xl max-[768px]:text-3xl">cinematographers</h1>
        <h1 className="text-7xl max-[768px]:text-3xl">Illustrators</h1>
        <h1 className="text-7xl max-[768px]:text-3xl">& Film Makers</h1>
      </div>
      <div className="flex basis-1/2 items-center justify-center">
        {/* <div className="grid-cols-3 py-10 space-y-2 lg:space-y-0 lg:grid lg:gap-2 lg:grid-rows-3">
          <div class="w-full rounded">
            <img className="object-cover w-[200px] h-40" src={Img1} alt="image" />
          </div>
          <div class="w-full col-span-2 row-span-2 rounded object-cover">
            <img className="h-[328px]" src={Img4} alt="image" />
          </div>
          <div class="w-full rounded object-cover">
            <img
              className="object-contain h-40 w-auto"
              src={Img7}
              alt="image"
            />
          </div>
          <div class="w-full rounded">
            <img
              className="object-contain h-40 w-auto"
              src={Img8}
              alt="image"
            />
          </div>
          <div class="w-full rounded">
            <img
              className="object-contain h-40 w-auto"
              src={Img2}
              alt="image"
            />
          </div>
          <div class="w-full rounded">
            <img className="object-cover h-40" src={Img6} alt="image" />
          </div>
        </div> */}
        <section class="overflow-hidden text-gray-700">
          <div class="container px-5 py-2 mx-auto max-[768px]:px-0 max-[768px]:py-0 max-[768px]:mx-0">
            {/* lg:pt-24 lg:px-32 */}
            <div class="flex flex-wrap -m-1 md:-m-2">
              <div class="flex flex-wrap w-1/2">
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-sm"
                    src={Img1}
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-sm"
                    src={Img2}
                  />
                </div>
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-sm"
                    src={Img4}
                  />
                </div>
              </div>
              <div class="flex flex-wrap w-1/2">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-sm"
                    src={Img5}
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-sm"
                    src={Img7}
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-sm"
                    src={Img6}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeExtra;
