import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Product from "../Pages/Product/Product";
import Partner from "../Pages/Partner/Partner";

const MainRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default MainRoutes;
