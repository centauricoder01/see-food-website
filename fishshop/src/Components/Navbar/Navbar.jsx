import React, { useState } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="main-navbar-div">
      <div className="image-navbar-div">
        {/* <Link to={"/"}> */}
        <img src={logo} alt="logo" />
        {/* </Link> */}
      </div>
      <div className="links-navbar-div">
        <Link to={"/"}>
          <p className="para-navbar-div">Home</p>
        </Link>
        <Link to={"/about"}>
          <p className="para-navbar-div">About</p>
        </Link>
        <Link to={"/product"}>
          <p className="para-navbar-div">Products</p>
        </Link>

        <Link to={"/contact"}>
          <p className="para-navbar-div">Contact</p>
        </Link>
      </div>

      {/* DRAWER START FROM HERE */}
      <GiHamburgerMenu onClick={showDrawer} className="navbar-menu-div" />
      <Drawer title="Surprice" placement="right" onClose={onClose} open={open}>
        <Link to={"/"}>
          <p className="para-navbar-div" onClose={onClose} open={open}>
            Home
          </p>
          <hr />
        </Link>
        <Link to={"/about"}>
          <p className="para-navbar-div" onClose={onClose}>
            About
          </p>
          <hr />
        </Link>
        <Link to={"/product"}>
          <p className="para-navbar-div" onClose={onClose}>
            Product
          </p>
          <hr />
        </Link>
        <Link to={"/contact"}>
          <p className="para-navbar-div" onClose={onClose}>
            Contact
          </p>
          <hr />
        </Link>
        <img
          src={require("../../Assets/logo.png")}
          alt="logo"
          width={100}
          className="drawer-logo"
        />
      </Drawer>
    </div>
  );
};

export default Navbar;
