import React, { useState } from "react";
import { Drawer, Dropdown } from "antd";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { items } from "./data";

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
        <img src={logo} alt="logo" />
      </div>
      <div className="links-navbar-div">
        <Link to={"/"}>
          <p className="para-navbar-div">Home</p>
        </Link>
        <Link to={"/about"}>
          <p className="para-navbar-div">About</p>
        </Link>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottom"
          arrow
          bold
        >
          <p>Products</p>
        </Dropdown>
        <Link to={"/contact"}>
          <p className="para-navbar-div">Contact</p>
        </Link>
      </div>

      {/* DRAWER START FROM HERE */}
      <GiHamburgerMenu onClick={showDrawer} className="navbar-menu-div" />
      <Drawer title="Surprice" placement="right" onClose={onClose} open={open}>
        <Link to={"/"}>
          <p className="para-navbar-div" onClose={onClose}>
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
