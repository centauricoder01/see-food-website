import React from "react";
import "./Product.css";
import SingleItem from "./SingleItem";

const Product = () => {
  return (
    <>
      <h2 className="your-products">Your Products</h2>
      <div className="main-product-div">
        <SingleItem
          Image={require("../../Assets/Product-img/Abalone/1.jpg")}
          title="SomeName"
        />
        <SingleItem
          Image={require("../../Assets/Product-img/Almas_caviar/1.jpg")}
          title="SomeName"
        />
        <SingleItem
          Image={require("../../Assets/Product-img/Anguilla_Australis/1.jpg")}
          title="SomeName"
        />
        <SingleItem
          Image={require("../../Assets/Product-img/Anguilla_Japonica/1.jpg")}
          title="SomeName"
        />
        <SingleItem
          Image={require("../../Assets/Product-img/Anguilla_anguilla/1.jpg")}
          title="SomeName"
        />
        <SingleItem
          Image={require("../../Assets/Product-img/Anguilla_rostrate/1.png")}
          title="SomeName"
        />
        <SingleItem
          Image={require("../../Assets/Product-img/Bluefin_tuna/1.jpg")}
          title="SomeName"
        />
        <SingleItem
          Image={require("../../Assets/Product-img/Canadian_Geoduck_Clam/1.jpg")}
          title="SomeName"
        />
        <SingleItem
          Image={require("../../Assets/Product-img/Coffin_Bay_king_oysters/1.jpg")}
          title="SomeName"
        />
        <SingleItem
          Image={require("../../Assets/Product-img/European_Dover_Sole/1.jpg")}
          title="SomeName"
        />
        <SingleItem
          Image={require("../../Assets/Product-img/King_crab/1.jpg")}
          title="SomeName"
        />
        <SingleItem
          Image={require("../../Assets/Product-img/Percebes/1.webp")}
          title="SomeName"
        />
        <SingleItem
          Image={require("../../Assets/Product-img/Sea_Cucumber/1.webp")}
          title="SomeName"
        />
        <SingleItem
          Image={require("../../Assets/Product-img/Sea_Urchin/1.jpg")}
          title="SomeName"
        />
        <SingleItem
          Image={require("../../Assets/Product-img/White_Albino/1.webp")}
          title="SomeName"
        />
        <SingleItem
          Image={require("../../Assets/Product-img/lobster/1.jpg")}
          title="SomeName"
        />
        <SingleItem
          Image={require("../../Assets/Product-img/Almas_caviar/2.jpg")}
          title="SomeName"
        />
      </div>
    </>
  );
};

export default Product;
