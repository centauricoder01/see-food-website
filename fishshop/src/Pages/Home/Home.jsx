import React from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import first from "../../Assets/first-banner.jpg";
import second from "../../Assets/second-banner.jpg";
import third from "../../Assets/third-banner.jpg";
import fourth from "../../Assets/fourth-banner.jpg";

const Home = () => {
  return (
    <div className="main-home-div">
      <div className="HomeCarousel">
        <Carousel infiniteLoop autoPlay>
          <Link to="/product?category=gifts">
            <div className="image">
              <img src={first} alt="images" />
            </div>
          </Link>
          <Link to="/product?subcategory=invitation">
            <div className="image">
              <img src={second} alt="images" />
            </div>
          </Link>
          <Link to="/product">
            <div className="image">
              <img src={third} alt="images" />
            </div>
          </Link>
          <Link to="/product?subcategory=banner">
            <div className="image">
              <img src={fourth} alt="images" />
            </div>
          </Link>
        </Carousel>
      </div>

      {/* MAIN PART START FROM HERE */}

      <div>
        <div className="homeNav"></div>
      </div>
      <p className="homeHeader">TOP SELLERS</p>
      <div className="homeColors">
        <div>
          <Link to="/product?subcategory=visitingcard">
            <img
              src={require("../../Assets/Product-img/Abalone/1.jpg")}
              alt="img"
            />
          </Link>
        </div>
        <div>
          <Link to="/product?subcategory=stamp">
            <img
              src={require("../../Assets/Product-img/Almas_caviar/1.jpg")}
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/product?subcategory=mug">
            <img
              src={require("../../Assets/Product-img/Anguilla_Australis/1.jpg")}
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/product?subcategory=tshirt">
            <img
              src={require("../../Assets/Product-img/Anguilla_anguilla/1.jpg")}
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/product?subcategory=banner">
            <img
              src={require("../../Assets/Product-img/Anguilla_rostrate/1.png")}
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/product?subcategory=invitation">
            <img
              src={require("../../Assets/Product-img/Bluefin_tuna/1.jpg")}
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/product?category=graphic">
            <img
              src={require("../../Assets/Product-img/Canadian_Geoduck_Clam/1.jpg")}
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/product?category=gifts">
            <img
              src={require("../../Assets/Product-img/Canadian_Geoduck_Clam/3.webp")}
              alt=""
            />
          </Link>
        </div>
      </div>
      <p className="homeHeader">TRENDING SEAFOOD</p>
      <div className="homeColors">
        <div>
          <Link to="/product?category=homedecor">
            <img
              src={require("../../Assets/Product-img/lobster/1.jpg")}
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/product?subcategory=album">
            <img
              src={require("../../Assets/Product-img/Abalone/3.jpg")}
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/product?subcategory=crystal">
            <img
              src={require("../../Assets/Product-img/White_Albino/1.webp")}
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/product?subcategory=shirt">
            <img
              src={require("../../Assets/Product-img/Sea_Urchin/1.jpg")}
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/product?subcategory=photoframe">
            <img
              src={require("../../Assets/Product-img/Sea_Cucumber/1.webp")}
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/product?subcategory=lamp">
            <img
              src={require("../../Assets/Product-img/Percebes/1.webp")}
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/product?subcategory=cushion">
            <img
              src={require("../../Assets/Product-img/King_crab/1.jpg")}
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/product?subcategory=notebook">
            <img
              src={require("../../Assets/Product-img/European_Dover_Sole/3.jpg")}
              alt=""
            />
          </Link>
        </div>
      </div>
      <p className="homeHeader">OLD IS GOLD</p>
      <div className="homeCategories">
        <div>
          <Link to="/product?subcategory=heatpress">
            <img
              src={require("../../Assets/Product-img/Copper_River_king_salmon/2.jpg")}
              alt="IMG"
            />
          </Link>
        </div>
        <div>
          <Link to="/product?subcategory=mugprinting">
            <img
              src={require("../../Assets/Product-img/Coffin_Bay_king_oysters/2.jpg")}
              alt="IMG"
            />
          </Link>
        </div>
        <div>
          <Link to="/product?subcategory=lamination">
            <img
              src={require("../../Assets/Product-img/Almas_caviar/1.jpg")}
              alt="IMG"
            />
          </Link>
        </div>
        <div>
          <Link to="/product?subcategory=selfinkstamp">
            <img
              src={require("../../Assets/Product-img/Anguilla_Japonica/3.jpg")}
              alt="IMG"
            />
          </Link>
        </div>
        <div>
          <Link to="/product?subcategory=polymerstamp">
            <img
              src={require("../../Assets/Product-img/Anguilla_anguilla/2.jpg")}
              alt="IMG"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;