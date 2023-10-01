import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  return (
    <div className="main-singlepro-div">
      <img
        src={require("../../Assets/Product-img/Abalone/1.jpg")}
        alt="img"
        width={500}
      />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio et
        delectus natus consectetur laborum. Impedit similique consectetur magni
        ratione, odio provident, mollitia commodi fugit autem, eos culpa ipsam
        assumenda modi saepe quis cum? Magni, officia. Dolore, possimus? Aliquam
        mollitia asperiores, maiores suscipit libero rem dolores. Ab repellendus
        quaerat saepe, obcaecati fugiat ullam. Quam aliquid minus nisi
        distinctio a facilis, inventore eius culpa molestiae iusto voluptas
        dolorum enim aut, alias impedit quidem numquam necessitatibus. Tenetur
        accusamus iste ullam ipsa repellat adipisci consectetur sit maxime
        consequatur magnam. Quia minima nihil aliquam quaerat vitae est quas nam
        nostrum ipsam, sint ducimus, blanditiis doloremque!
      </p>
      <Link to={"/product"}>
        <button className="button-29">
          <BsArrowLeftCircle />
          Go back
        </button>
      </Link>
    </div>
  );
};

export default SingleProduct;
