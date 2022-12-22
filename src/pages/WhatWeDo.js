import React from "react";

const WhatWeDo = () => {
  return (
    <div className="flex flex-col text-black bg-white h-screen px-28 max-[768px]:px-8 max-[768px]:h-fit pt-10 max-[768px]:pt-0 max-[768px]:pb-10">
      <h1 className="text-3xl mb-5 font-semibold">WHAT DO WE DO</h1>
      <div className="grid grid-cols-2 gap-4 max-[768px]:grid-cols-1">
        <div className="flex flex-col items-start justify-end h-72 bg-slate-300">
          <h1 className="flex text-4xl font-medium">Workshops</h1>
        </div>
        <div className="flex flex-col items-start justify-end h-72 bg-slate-300">
          <h1 className="flex text-4xl font-medium">Photowalks</h1>
        </div>
        <div className="flex flex-col items-start justify-end h-72 bg-slate-300">
          <h1 className="flex text-4xl font-medium">Competitions</h1>
        </div>
        <div className="flex flex-col items-start justify-end h-72 bg-slate-300">
          <h1 className="flex text-4xl font-medium">Masterclass</h1>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
