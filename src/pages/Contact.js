import React from "react";
import { Link } from "react-router-dom";
import "../styles/contact.css";

const Contact = ({ cart, totalPrice }) => {
  return (
    <div className="contact-main">
      <div className="contact-info">
        You expected a contact page... But it was me, the placeholder text! &gt;:)
      </div>
      <div className="contact-cart-check">
        {cart.length === 0 ? (
          <div className="contact-go-to-store">
            Quick add some stuff to your order and come back here!
              <Link to="/menu" className="store-button"> See Our Menu </Link>
          </div>
        ) : (
          "However, just to practice some more props and state and stuff, here is some really cool info (im very sarcastic btw):"
        )}
      </div>
        {cart.length === 0 ? (
          " "
        ) : (
          <div className="contact-cart-full">
          <div className="contact-order-info">
            Your order costs a total of ${totalPrice} and it consists of:
            <div className="order-list">
              {cart.map((item, index) => {
                return (
                  <div key={item.id}>
                    {` `}
                    {index + 1}
                    {`. `}
                    {item.quantity} portions of {item.name}
                    {` `}
                  </div>
                );
              })}{" "}
            </div>
              That's about it. Yum Yum!<br />
              Hope you enjoy your imaginary meal teehee!<br />
              Oh and yeah, I totally got lazy on the styling... for now.
          </div>
          </div>
        )}
    </div>
  );
};

export default Contact;
