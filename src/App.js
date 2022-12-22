import React from "react";
import Navbar from "./components/NavbarComp/Navbar";
import Sidebar from "./components/SidebarComp/Sidebar";
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import HomeExtra from "./pages/HomeExtra";
import OurColumn from "./pages/OurColumn";
import WhatWeDo from "./pages/WhatWeDo";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Always from "./pages/Always";

const App = () => {
  return (
    <div>
      <Router>
        {/* <Home />
        <HomeExtra />
        <WhatWeDo />
        <OurColumn />
        <Footer /> */}
        <Routes>
          <Route path="/" element={<Always />} />
          <Route path="blog1" element={<Blog1 />} />
          <Route path="blog2" element={<Blog2 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
