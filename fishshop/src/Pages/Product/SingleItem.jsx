import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const SingleItem = ({ Image, title }) => {
  return (
    <>
      <div className="single-product-div">
        <img src={Image} alt="" />
        <p>{title}</p>
        <Link to={"/product/something"}>
          <button className="button-33">Show More</button>
        </Link>
      </div>
    </>
  );
};

export default SingleItem;
