import React from "react";
import "./Product.css";

const SingleItem = ({ Image, title }) => {
  return (
    <>
      <div className="single-product-div">
        <img src={Image} alt="" />
        <p>{title}</p>
        <button className="button-33">Show More</button>
      </div>
    </>
  );
};

export default SingleItem;
