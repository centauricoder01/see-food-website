import React, { useEffect } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import first from "../../Assets/first-banner.jpg";
import second from "../../Assets/second-banner.jpg";
import third from "../../Assets/third-banner.jpg";
import fourth from "../../Assets/fourth-banner.jpg";

const Home = () => {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []); 
  return (
    <div className="main-home-div">
      <div className="HomeCarousel">
        <Carousel infiniteLoop autoPlay>
          <Link to="/product">
            <div className="image">
              <img src={first} alt="images" />
            </div>
          </Link>
          <Link to="/product">
            <div className="image">
              <img src={second} alt="images" />
            </div>
          </Link>
          <Link to="/product">
            <div className="image">
              <img src={third} alt="images" />
            </div>
          </Link>
          <Link to="/product">
            <div className="image">
              <img src={fourth} alt="images" />
            </div>
          </Link>
        </Carousel>
      </div>

      {/* MAIN PART START FROM HERE */}
      <p className="homeHeader">TOP SELLERS</p>
      <div className="homeColors">
        <div>
          <Link to="/product/product8">
            <img
              src={require("../../Assets/Product-img/Abalone/1.jpg")}
              alt="img"
            />
          </Link>
        </div>
        <div>
          <Link to="/product/product7">
            <img
              src={require("../../Assets/Product-img/Almas_caviar/1.jpg")}
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/product/product4">
            <img
              src={require("../../Assets/Product-img/Anguilla_Australis/1.jpg")}
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/product/product2">
            <img
              src={require("../../Assets/Product-img/Anguilla_anguilla/1.jpg")}
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/product/product3">
            <img
              src={require("../../Assets/Product-img/Anguilla_rostrate/1.png")}
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/product/product5">
            <img
              src={require("../../Assets/Product-img/Bluefin_tuna/1.jpg")}
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/product/product16">
            <img
              src={require("../../Assets/Product-img/Canadian_Geoduck_Clam/1.jpg")}
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/product/product10">
            <img
              src={require("../../Assets/Product-img/King_crab/1.jpg")}
              alt=""
            />
          </Link>
        </div>
      </div>
      <p className="homeHeader">TRENDING SEAFOOD</p>
      <div className="homeColors">
        <div>
          <Link to="/product/product9">
            <img
              src={require("../../Assets/Product-img/lobster/1.jpg")}
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/product/product8">
            <img
              src={require("../../Assets/Product-img/Abalone/3.jpg")}
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/product/product6">
            <img
              src={require("../../Assets/Product-img/White_Albino/1.webp")}
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/product/product14">
            <img
              src={require("../../Assets/Product-img/Sea_Urchin/1.jpg")}
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/product/product12">
            <img
              src={require("../../Assets/Product-img/Sea_Cucumber/1.webp")}
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/product/product13">
            <img
              src={require("../../Assets/Product-img/Percebes/1.webp")}
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/product/product10">
            <img
              src={require("../../Assets/Product-img/King_crab/1.jpg")}
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/product/product17">
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
          <Link to="/product/product15">
            <img
              src={require("../../Assets/Product-img/Copper_River_king_salmon/2.jpg")}
              alt="IMG"
            />
          </Link>
        </div>
        <div>
          <Link to="/product/product11">
            <img
              src={require("../../Assets/Product-img/Coffin_Bay_king_oysters/2.jpg")}
              alt="IMG"
            />
          </Link>
        </div>
        <div>
          <Link to="/product/product7">
            <img
              src={require("../../Assets/Product-img/Almas_caviar/1.jpg")}
              alt="IMG"
            />
          </Link>
        </div>
        <div>
          <Link to="/product/product1">
            <img
              src={require("../../Assets/Product-img/Anguilla_Japonica/3.jpg")}
              alt="IMG"
            />
          </Link>
        </div>
        <div>
          <Link to="/product/product2">
            <img
              src={require("../../Assets/Product-img/Anguilla_anguilla/2.jpg")}
              alt="IMG"
            />
          </Link>
        </div>
      </div>
      <p className="homeHeader">Our Partners</p>

      <div class="image-strip">
        <div class="images-container">
          <img
            src={require("../../Assets/partners/1.png")}
            alt="Partner"
            width={100}
          />
          <img
            src={require("../../Assets/partners/2.png")}
            alt="Partner"
            width={100}
          />
          <img
            src={require("../../Assets/partners/3.png")}
            alt="Partner"
            width={100}
          />
          <img
            src={require("../../Assets/partners/4.jpeg")}
            alt="Partner"
            width={100}
          />
          <img
            src={require("../../Assets/partners/5.png")}
            alt="Partner"
            width={100}
          />
          <img
            src={require("../../Assets/partners/6.webp")}
            alt="Partner"
            width={100}
          />
          <img
            src={require("../../Assets/partners/7.jpg")}
            alt="Partner"
            width={100}
          />
          <img
            src={require("../../Assets/partners/8.png")}
            alt="Partner"
            width={100}
          />
          <img
            src={require("../../Assets/partners/10.jpg")}
            alt="Partner"
            width={100}
          />
          <img
            src={require("../../Assets/partners/9.png")}
            alt="Partner"
            width={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
