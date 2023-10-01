import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const SingleItem = ({ Image, title, location }) => {
  return (
    <>
      <div className="single-product-div">
        <img src={Image} alt="" />
        <p>{title}</p>
        <Link to={location}>
          <button className="button-33">Show More</button>
        </Link>
      </div>
    </>
  );
};

export default SingleItem;
