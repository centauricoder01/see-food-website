import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="main-about-div">
      <div className="background-image">
        <div class="content">
          <h1>Your Story</h1>
          <p>Fresh from the Ocean to Your Plate!</p>
        </div>
      </div>

      <div className="first-about-div">
        <img src={require("../../Assets/client.jpg")} alt="client" />
        <div>
          <p>How it all Started</p>
          <h1>Inspired by the pearl diving heritage of the UAE</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nisi
            dolor at impedit repudiandae officiis. Numquam illum ducimus sequi
            sint ipsum recusandae aspernatur vitae sapiente.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
            impedit hic excepturi, cum doloribus, optio explicabo dolores sint
            eaque architecto odio at itaque aliquid pariatur velit temporibus
            vel officia autem quisquam rerum. Fuga, recusandae sapiente
            perspiciatis minima placeat voluptate harum officia quaerat officiis
            ratione impedit eum consequuntur totam incidunt quos.
          </p>
        </div>
      </div>
      <div className="second-about-div">
        <div class="contents">
          <h1>Our mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolorem, illum ad quibusdam aliquam quae ipsum assumenda corporis voluptatem nostrum beatae excepturi quam, alias eaque quasi aliquid! Molestias, minus ipsa.
          </p>
        </div>
        <div class="contents">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, fuga
            non sit laborum nam fugit necessitatibus doloribus voluptate iusto
            corporis reiciendis. Repellat id aliquam soluta dicta dolorum
            doloremque dolorem ex.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
