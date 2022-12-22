import React, { useState } from "react";
import Img4 from "../assets/img4.jpg";
import Navbar from "../components/NavbarComp/Navbar";
import Sidebar from "../components/SidebarComp/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
// import Blogg1 from "../components/Blogs/Blogg1";
import Blogg2 from "../components/Blogs/Blogg2";

const Blog2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="absolute">
      <Navbar isOpen={isOpen} toggle={toggle} />
      <Sidebar toggle={toggle} />
      {/* <Blogg1 /> */}
      <Blogg2 />
    </div>
  );
};

export default Blog2;
