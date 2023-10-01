import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const products = {
    product1: {
      name: "Anguilla Japonica",
      description: "Description for Product 1",
      img: "$19.99",
    },
    product2: {
      name: "Anguilla Anguilla",
      description: "Description for Product 2",
      img: "$24.99",
    },
    product3: {
      name: "Anguilla Rostrata",
      description: "Description for Product 2",
      img: "$24.99",
    },
    product4: {
      name: "Anguilla austrails",
      description: "Description for Product 2",
      img: "$24.99",
    },
    product5: {
      name: "Bluefin Tuna",
      description: "Description for Product 2",
      img: "$24.99",
    },
    product6: {
      name: "White Albino Sturgeon Caviar",
      description: "Description for Product 2",
      img: "$24.99",
    },
    product7: {
      name: "Almas caviar",
      description: "Description for Product 2",
      img: "$24.99",
    },
    product8: {
      name: "Abalone",
      description: "Description for Product 2",
      img: "$24.99",
    },
    product9: {
      name: "Lobster",
      description: "Description for Product 2",
      img: "$24.99",
    },
    product10: {
      name: "King Crab",
      description: "Description for Product 2",
      img: "$24.99",
    },
  };

  const { id } = useParams();
  const product = products[id];

  console.log(product);
  return (
    <>
      {product ? (
        <div className="main-singlepro-div">
          <img
            src={require("../../Assets/Product-img/Abalone/1.jpg")}
            alt="img"
            className="main-singlepro-div-img"
          />
          <h3>{product.name}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio et
            delectus natus consectetur laborum. Impedit similique consectetur
            magni ratione, odio provident, mollitia commodi fugit autem, eos
            culpa ipsam assumenda modi saepe quis cum? Magni, officia. Dolore,
            possimus? Aliquam mollitia asperiores, maiores suscipit libero rem
            dolores. Ab repellendus quaerat saepe, obcaecati fugiat ullam. Quam
            aliquid minus nisi distinctio a facilis, inventore eius culpa
            molestiae iusto voluptas dolorum enim aut, alias impedit quidem
            numquam necessitatibus. Tenetur accusamus iste ullam ipsa repellat
            adipisci consectetur sit maxime consequatur magnam. Quia minima
            nihil aliquam quaerat vitae est quas nam nostrum ipsam, sint
            ducimus, blanditiis doloremque!
          </p>
          <Link to={"/product"}>
            <button className="button-29">
              <BsArrowLeftCircle />
              Go back
            </button>
          </Link>
        </div>
      ) : (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          officiis fugiat aut, aliquid itaque beatae quas earum amet
          reprehenderit dolor reiciendis architecto tempore dolores, quidem cum
          doloremque sint? Error incidunt est animi molestias, iusto at, cumque
          qui delectus aliquam repudiandae magni atque magnam illum. Tempora
          autem cum illo saepe perferendis, illum nobis deleniti porro aliquid
          dolorum! Perferendis officia consequuntur illum totam! Numquam optio
          voluptatibus ut aliquam vel accusantium repudiandae? Nihil
          perspiciatis officiis repellat rem minima! Id cupiditate saepe, quos
          ut dolorem maiores recusandae esse iste dolore reiciendis hic nesciunt
          perferendis aliquam earum quae nemo eligendi inventore facere placeat
          ratione architecto odit? Laudantium nemo quod eveniet deserunt,
          nostrum voluptatum debitis dolorem maxime harum sit, alias eligendi
          reprehenderit ad odit. Quam consequuntur consequatur eius rem saepe
          possimus quaerat, alias ratione atque. Ullam saepe voluptas veniam
          excepturi odio nesciunt nisi aliquid consectetur enim maiores
          recusandae incidunt et similique voluptate suscipit, tenetur rem
          expedita dolor! Adipisci explicabo accusamus veritatis nobis nostrum
          nihil iure possimus blanditiis unde doloremque aliquam, maxime,
          facilis ad inventore. Reiciendis rerum accusamus magni beatae
          asperiores placeat nemo dolore vel enim harum deleniti ipsum
          blanditiis voluptate, porro fugit! Consequatur hic velit tempora ad id
          dolorem illo molestiae perspiciatis eos quia quos culpa veniam nulla
          voluptatum, reprehenderit officia porro totam quisquam voluptatem sint
          aut dolores illum quod dolorum. Nesciunt accusantium ipsa labore,
          ducimus expedita tempore reprehenderit et hic nisi sequi velit
          laudantium alias quibusdam quia ut iste libero dolorem! Provident at
          doloribus ratione, eligendi odio aliquam ducimus. Vel rem iste unde
          quam. Atque consequuntur ipsa voluptas veniam delectus nesciunt nisi
          aut beatae? Accusamus non pariatur placeat dolor odio. Quasi nostrum
          laudantium debitis necessitatibus repellendus doloribus recusandae
          amet hic consequatur. Iusto pariatur repellendus cumque est doloribus,
          officiis delectus, ratione fuga amet mollitia modi vitae. Cupiditate
          necessitatibus optio dolore nisi quam numquam eius exercitationem
          quasi!
        </p>
      )}
    </>
  );
};

export default SingleProduct;
