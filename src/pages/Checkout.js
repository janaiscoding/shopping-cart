import React from "react";
import { Link } from "react-router-dom";
import "../styles/checkout.css";

const Checkout = ({ cart, totalPrice }) => {
  return (
    <div className="contact-main">
      <div className="contact-info">
        Checkout Page
      </div>
      <div className="contact-cart-check">
        {cart.length === 0 ? (
          <div className="contact-go-to-store">
            Quick add some stuff to your order and come back here!
              <Link to="/menu" className="store-button"> See Our Menu </Link>
          </div>
        ) : (
          "Your order information:"
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
              Still working on the styling :)
          </div>
          </div>
        )}
    </div>
  );
};

export default Checkout;
