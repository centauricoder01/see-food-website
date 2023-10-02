import React, { useEffect } from "react";
import "./About.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
          <h1>Inspired by the pearl diving heritage of the Europe</h1>
          <p style={{ marginBottom: "5px" }}>
            In 2016, Ramie Murray, the visionary behind our organization,
            spearheaded a significant shift away from the conventional Arabian
            pearl oyster industry to cultivating a delectable oyster species.
          </p>
          <p>
            Leveraging the exceptional qualities of the Arabian ocean that once
            made the region famous for its exquisite white pearls, the oyster
            now flourishes. Its shells, adorned in striking white and gold hues,
            not only reflect the vibrant heritage of the area but also pay
            homage to the legacy of pearl cultivation. The unique attributes of
            the Europe' waters, once renowned for their legendary white pearls,
            are now encapsulated within the resplendent shell of the oyster,
            ensuring the enduring legacy of this rich tradition.
          </p>
        </div>
      </div>
      <div className="second-about-div">
        <div class="contents">
          <h1>Our mission</h1>
          <p>
            At our eco-conscious seafood business, we're on a mission to provide
            you with the freshest, sustainably sourced seafood, all while
            preserving our oceans. With a focus on quality, taste, and
            environmental responsibility, we're committed to delivering a
            delicious experience that cares for both your palate and our planet.
          </p>
        </div>
        <div class="contents">
          <h1>Our Vision</h1>
          <p>
            Our vision is to revolutionize seafood dining, offering exquisite
            taste while championing sustainability. We are committed to
            providing gourmet experiences that protect our oceans and inspire
            conscious living. Join us in savoring a future where culinary
            delight meets environmental harmony.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
