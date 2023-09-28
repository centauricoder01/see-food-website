import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default MainRoutes;
