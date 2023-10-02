import React, { useEffect } from "react";
import "./Product.css";
import SingleItem from "./SingleItem";

const Product = () => {

  useEffect(() => {
    // Scrolls the page to the top when the component mounts
    window.scrollTo(0, 0);
  }, []); 
  return (
    <>
      <h2 className="your-products">Your Products</h2>
      <div className="main-product-div">
        <SingleItem
          Image={require("../../Assets/Product-img/Abalone/1.jpg")}
          title="Abalone"
          location="/product/product8"
        />

        <SingleItem
          Image={require("../../Assets/Product-img/Anguilla_Australis/1.jpg")}
          title="Anguilla Australis"
          location="/product/product4"
        />
        <SingleItem
          Image={require("../../Assets/Product-img/Anguilla_Japonica/1.jpg")}
          title="Anguilla Japonica"
          location="/product/product1"
        />
        <SingleItem
          Image={require("../../Assets/Product-img/Anguilla_anguilla/1.jpg")}
          title="Anguilla anguilla"
          location="/product/product2"
        />
        <SingleItem
          Image={require("../../Assets/Product-img/Anguilla_rostrate/1.png")}
          title="Anguilla rostrate"
          location="/product/product3"
        />
        <SingleItem
          Image={require("../../Assets/Product-img/Bluefin_tuna/1.jpg")}
          title="Bluefin tuna"
          location="/product/product5"
        />
        <SingleItem
          Image={require("../../Assets/Product-img/Canadian_Geoduck_Clam/1.jpg")}
          title="Canadian Geoduck Clam"
          location="/product/product16"
        />
        <SingleItem
          Image={require("../../Assets/Product-img/Coffin_Bay_king_oysters/1.jpg")}
          title="Coffin Bay king oysters"
          location="/product/product11"
        />
        <SingleItem
          Image={require("../../Assets/Product-img/European_Dover_Sole/1.jpg")}
          title="European Dover Sole"
          location="/product/product17"
        />
        <SingleItem
          Image={require("../../Assets/Product-img/King_crab/1.jpg")}
          title="King crab"
          location="/product/product10"
        />
        <SingleItem
          Image={require("../../Assets/Product-img/Percebes/1.webp")}
          title="Percebes"
          location="/product/product13"
        />
        <SingleItem
          Image={require("../../Assets/Product-img/Sea_Cucumber/1.webp")}
          title="Sea Cucumber"
          location="/product/product12"
        />
        <SingleItem
          Image={require("../../Assets/Product-img/Sea_Urchin/1.jpg")}
          title="Sea Urchin"
          location="/product/product14"
        />
        <SingleItem
          Image={require("../../Assets/Product-img/White_Albino/1.webp")}
          title="White Albino sturgeon caviar"
          location="/product/product6"
        />
        <SingleItem
          Image={require("../../Assets/Product-img/lobster/1.jpg")}
          title="Lobster"
          location="/product/product9"
        />
        <SingleItem
          Image={require("../../Assets/Product-img/Almas_caviar/1.jpg")}
          title="Almas caviar"
          location="/product/product7"
        />
        <SingleItem
          Image={require("../../Assets/Product-img/Copper_River_king_salmon/2.jpg")}
          title="Copper River King Salmon"
          location="/product/product15"
        />
      </div>
    </>
  );
};

export default Product;
