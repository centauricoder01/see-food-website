import React, { useState } from "react";
import { Drawer, Dropdown, Collapse } from "antd";
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
        <Link to={"/partner"}>
          <p className="para-navbar-div">Partner</p>
        </Link>
      </div>

      {/* DRAWER START FROM HERE */}
      <GiHamburgerMenu onClick={showDrawer} className="navbar-menu-div" />
      <Drawer title="Surprice" placement="right" onClose={onClose} open={open}>
        <Link to={"/"}>
          <p className="para-navbar-div">Home</p>
        </Link>
        <Link to={"/about"}>
          <p className="para-navbar-div">About</p>
        </Link>
        <Collapse
          items={[
            {
              key: "1",
              label: "Product",
              children: <p>{"Some"}</p>,
            },
          ]}
        />
        <Link to={"/contact"}>
          <p className="para-navbar-div">Contact</p>
        </Link>
        <Link to={"/partner"}>
          <p className="para-navbar-div">Partner</p>
        </Link>
      </Drawer>
    </div>
  );
};

export default Navbar;
