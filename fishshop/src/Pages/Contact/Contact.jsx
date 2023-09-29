import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="main-contact-div">
      <div className="background-image-contact">
        <div class="content">
          <h1>Contact Us</h1>
          <p>Give us a call, send an email, we are always there for you...</p>
        </div>
      </div>

      <p className="contact-para">
        Let us know your requirements and we are happy to help. Whether you are
        a wholesale retailer, a supermarket chain, a restaurant or just anyone
        in need of a reliable supplier, we can offer you the best of pole and
        line frozen and fresh tuna from the Maldives.
      </p>

      <div className="contact-input-div">
        <div class="input-container">
          <input type="text" id="inputField" class="custom-input" />
          <label for="inputField" class="input-label">
            Your Label
          </label>
          <div class="input-border"></div>
        </div>
        <div class="input-container">
          <input type="text" id="inputField" class="custom-input" />
          <label for="inputField" class="input-label">
            Your Label
          </label>
          <div class="input-border"></div>
        </div>
        <div class="input-container">
          <input type="text" id="inputField" class="custom-input" />
          <label for="inputField" class="input-label">
            Your Label
          </label>
          <div class="input-border"></div>
        </div>
        <div class="input-container">
          <input type="text" id="inputField" class="custom-input" />
          <label for="inputField" class="input-label">
            Your Label
          </label>
          <div class="input-border"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
