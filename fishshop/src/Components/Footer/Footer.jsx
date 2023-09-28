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
                <Link to="product?category=printing">King crab</Link>
              </li>
              <li>
                <Link to="product?category=graphic">
                  Coffin Bay king oysters
                </Link>
              </li>
              <li>
                <Link to="product?category=marketing">Almas caviar</Link>
              </li>
              <li>
                <Link to="product?category=stationary">White Albino</Link>
              </li>
              <li>
                <Link to="product?category=gifts">Bluefin tuna</Link>
              </li>
              <li>
                <Link to="product?category=fabric">Anguilla Japonica</Link>
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
                <Link to="/profile">Profile</Link>
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
                <a href="tel:8981167906">
                  <IoLogoWhatsapp className="footerIcon" /> +1 310-667-7914
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
                <p>691 Forest AvePortland</p>
              </li>
              <li>
                <p>ME 04103, USA</p>
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
