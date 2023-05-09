import React from "react";
import CartItem from "../components/CartItem";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/cart.css";
import checkoutImg from "../assets/landingpage/right-sushi.png";
import arrowIcon from "../assets/icons/right-arrow.png";
import { motion } from "framer-motion";
const Cart = ({
  cart,
  totalPrice,
  handleCartAdd,
  handleCartUpdate,
  handleCartRemove,
}) => {
  let allCartItems = cart.map((cartItem) => (
    <CartItem
      cartItem={cartItem}
      key={cartItem.id}
      handleCartAdd={handleCartAdd}
      handleCartUpdate={handleCartUpdate}
      handleCartRemove={handleCartRemove}
    />
  ));
  return (
    <section className="cart-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="cart-main"
      >
        <div className="cart-info">
          <h1 className="cart-title">Shopping Cart</h1>
          <div className="cart-items-wrapper">{allCartItems}</div>
          <div className="handle-checkout">
            <div className="continue-shopping">
              <Link to="/#sushi">
                <img
                  src={arrowIcon}
                  alt="icon to return to shopping menu"
                  height={21}
                />
              </Link>
              <Link to="/#sushi">Continue Shopping</Link>
            </div>
            {totalPrice > 0 ? (
              <div className="subtotal">
                <p>Subtotal:</p>
                <h3>¥ {totalPrice}</h3>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <img src={checkoutImg} alt="checkout pic" width={300} />
      </motion.div>
    </section>
  );
};

export default Cart;
