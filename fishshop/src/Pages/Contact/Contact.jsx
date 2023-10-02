import React, { useEffect } from "react";
import "./Contact.css";
import { message } from "antd";

const Contact = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "We will contact you soon...",
    });
  };

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []); 

  return (
    <>
      {contextHolder}
      <div className="main-contact-div">
        <div className="background-image-contact">
          <div class="content">
            <h1>Contact Us</h1>
            <p>Give us a call, send an email, we are always there for you...</p>
          </div>
        </div>

        <p className="contact-para">
          Let us know your requirements and we are happy to help. Whether you
          are a wholesale retailer, a supermarket chain, a restaurant or just
          anyone in need of a reliable supplier, we can offer you the best of
          pole and line frozen and fresh tuna from the Maldives.
        </p>

        <div className="contact-input-div">
          <div className="first-input-div">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
          </div>
          <div className="second-input-div">
            <input type="text" placeholder="Contact No" />
            <input type="text" placeholder="What you are looking For ?" />
          </div>
          <div className="third-input-div">
            <textarea type="text" placeholder="Message" rows="10" cols="85" />
          </div>
          <button class="custom-button" onClick={success}>
            Contact Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
