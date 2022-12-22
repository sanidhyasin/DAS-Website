import React, { useState } from "react";
import Homepage from "../components/Homepage/Homepage";
import Navbar from "../components/NavbarComp/Navbar";
import Sidebar from "../components/SidebarComp/Sidebar";
import "../components/Homepage/Homepage.css";
import videoBg from "../assets/bgvid.mp4";
import rightImg from "../assets/rightImg.svg";
import dogImg from "../assets/dog.svg";
import "../components/Homepage/Homepage.css";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="main absolute overflow-hidden" id="/">
      <video src={videoBg} autoPlay loop muted />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* <Homepage /> */}
      <div className="flex flex-row items-stretch absolute w-full h-full top-80 px-28">
        <div className="flex basis-1/2 flex-col text-white h-full">
          <div className="flex items-center justify-start flex-row">
            <div className="flex flex-col">
              <h1 className="flex text-6xl mb-5 tracking-none">
                DIGITAL ARTS SOCIETY
              </h1>
              <h1 className="flex text-5xl">OF BVCOE, NEW DELHI</h1>
            </div>
          </div>
          {/* <div className="flex"></div> */}
        </div>
        <div className="flex basis-1/2 flex-col">
          <div className="flex items-center justify-end text-white">
            <div className="flex">
              {/* <img className="w-44" src="https://i.imgur.com/QF6DAxq.png" alt="" /> */}
              <img className="text-white w-40" src="dogImg" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="content text-5xl font-semibold tracking-widest">
        <img className="mb-5" src="https://i.imgur.com/Jy2uNry.png" alt="" />
        <h1 className="">DIGITAL ARTS SOCIETY</h1>
        <h1>Of Bvcoe, New Delhi</h1>
      </div> */}
    </div>
  );
};

export default Home;
