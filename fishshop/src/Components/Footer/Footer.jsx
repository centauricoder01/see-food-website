import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { MdEmail, MdModeComment } from "react-icons/md";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { HiCursorClick } from "react-icons/hi";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerContainer">
          <div className="footerList">
            <h4>TOP SELLERS SEAFOOD</h4>
            <ul>
              <li>
                <Link to="/product/product10">King crab</Link>
              </li>
              <li>
                <Link to="product/product11">Coffin Bay king oysters</Link>
              </li>
              <li>
                <Link to="product/product7">Almas caviar</Link>
              </li>
              <li>
                <Link to="product/product6">White Albino</Link>
              </li>
              <li>
                <Link to="product/product5">Bluefin tuna</Link>
              </li>
              <li>
                <Link to="product/product1">Anguilla Japonica</Link>
              </li>
            </ul>
          </div>
          <div className="footerList">
            <h4>USEFUL LINKS</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {/* <li>
                <Link to="/profile">About Us</Link>
              </li> */}
              <li>
                <Link to="/about">Profile</Link>
              </li>
              <li>
                <Link to="/product">Products</Link>
              </li>
            </ul>
          </div>
          <div className="footerList">
            <h4>LET US HELP</h4>
            <ul>
              <li>
                <a href="tel:3106677914">
                  <IoLogoWhatsapp className="footerIcon" /> +1 3106677914, +351
                  937961541
                </a>
              </li>

              <li>
                <a target="blank" href="mailto: GHS Seafood LDA@gmail.com">
                  <MdEmail className="footerIcon" />
                  Send Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/GHS Seafood LDA/"
                  target="blank"
                >
                  <FaLinkedin className="footerIcon" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com/GHS Seafood LDA" target="blank">
                  <BsTwitter className="footerIcon" />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@GHS Seafood LDA/videos"
                  target="blank"
                >
                  <FaYoutube className="footerIcon" />
                  Youtube
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/GHS Seafood LDA"
                  target="blank"
                >
                  <BsFacebook className="footerIcon" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/GHS Seafood LDA/"
                  target="blank"
                >
                  <AiFillInstagram className="footerIcon" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://GHS Seafood LDA.com/" target="blank">
                  <MdModeComment className="footerIcon" />
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          <div className="footerList">
            <h4>ABOUT US</h4>
            <ul>
              <li>
                <p>GHS Seafood LDA</p>
              </li>
              <li>
                <p>691 Forest AvePortland, ME 04103, USA</p>
              </li>
              <li>
                <p></p>
                <p>
                  Avenida De França N 256 8 4050-276 Porto, Portugal VAT: PT
                  516386433
                </p>
              </li>
              <li>
                <p>
                  More about us <HiCursorClick />
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footerHeader">
        <p>GHS Seafood LDA &#169; All rights reserved , 2023 - 2024</p>
        <p>
          <a href="https://centauricoder01.github.io/" target="blank">
            Created By Rajendra Patel
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
