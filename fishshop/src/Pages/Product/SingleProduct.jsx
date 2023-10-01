import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const products = {
    product1: {
      name: "Anguilla Japonica",
      description: "Description for Product 1",
      img: require("../../Assets/Product-img/Anguilla_Japonica/3.jpg"),
    },
    product2: {
      name: "Anguilla Anguilla",
      description: "Description for Product 2",
      img: require("../../Assets/Product-img/Anguilla_anguilla/3.jpg"),
    },
    product3: {
      name: "Anguilla Rostrata",
      description: "Description for Product 2",
      img: require("../../Assets/Product-img/Anguilla_rostrate/3.jpg"),
    },
    product4: {
      name: "Anguilla austrails",
      description: "Description for Product 2",
      img: require("../../Assets/Product-img/Anguilla_Australis/3.jpg"),
    },
    product5: {
      name: "Bluefin Tuna",
      description: "Description for Product 2",
      img: require("../../Assets/Product-img/Bluefin_tuna/3.jpg"),
    },
    product6: {
      name: "White Albino Sturgeon Caviar",
      description: "Description for Product 2",
      img: require("../../Assets/Product-img/White_Albino/3.webp"),
    },
    product7: {
      name: "Almas caviar",
      description: "Description for Product 2",
      img: require("../../Assets/Product-img/Almas_caviar/3.jpg"),
    },
    product8: {
      name: "Abalone",
      description: "Description for Product 2",
      img: require("../../Assets/Product-img/Abalone/3.jpg"),
    },
    product9: {
      name: "Lobster",
      description: "Description for Product 2",
      img: require("../../Assets/Product-img/lobster/3.jpg"),
    },
    product10: {
      name: "King Crab",
      description: "Description for Product 2",
      img: require("../../Assets/Product-img/King_crab/3.webp"),
    },
    product11: {
      name: "Coffin Bay king Oysters",
      description: "Description for Product 2",
      img: require("../../Assets/Product-img/Coffin_Bay_king_oysters/3.jpg"),
    },
    product12: {
      name: "Sea Cucumber",
      description: "Description for Product 2",
      img: require("../../Assets/Product-img/Sea_Cucumber/3.jpg"),
    },
    product13: {
      name: "Percebes",
      description: "Description for Product 2",
      img: require("../../Assets/Product-img/Percebes/3.jpg"),
    },
    product14: {
      name: "Sea Urchin",
      description: "Description for Product 2",
      img: require("../../Assets/Product-img/Sea_Urchin/3.jpg"),
    },
    product15: {
      name: "Copper River King Salmon",
      description: "Description for Product 2",
      img: require("../../Assets/Product-img/Copper_River_king_salmon/3.webp"),
    },
    product16: {
      name: "Canadian Geoduck Clam",
      description: "Description for Product 2",
      img: require("../../Assets/Product-img/Canadian_Geoduck_Clam/3.webp"),
    },
    product17: {
      name: "European Dover Sole",
      description: "Description for Product 2",
      img: require("../../Assets/Product-img/European_Dover_Sole/3.jpg"),
    },
  };

  const { id } = useParams();
  const product = products[id];

  console.log(product);
  return (
    <>
      {product ? (
        <div className="main-singlepro-div">
          <img src={product.img} alt="img" className="main-singlepro-div-img" />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <Link to={"/product"}>
            <button className="button-29">
              <BsArrowLeftCircle />
              Go back
            </button>
          </Link>
        </div>
      ) : (
        <p>Product Not Found !!!</p>
      )}
    </>
  );
};

export default SingleProduct;
