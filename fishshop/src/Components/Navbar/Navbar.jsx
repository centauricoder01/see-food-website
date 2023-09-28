import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <Link to={"/"}>
          <p>Home</p>
        </Link>
        <Link to={"/"}>
          <p>About</p>
        </Link>
        <Link to={"/"}>
          <p>Product</p>
        </Link>
        <Link to={"/"}>
          <p>Contact</p>
        </Link>
        <Link to={"/"}>
          <p>Partner</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
