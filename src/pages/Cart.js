import React, { useEffect } from "react";
import CartItem from "../components/CartItem";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/cart.css";
import checkoutImg from "../assets/landingpage/deliver.jpg";
import arrowIcon from "../assets/icons/right-arrow.png";
import { motion } from "framer-motion";
const Cart = ({
  cart,
  setCart,
  totalPrice,
  handleCartAdd,
  handleCartUpdate,
  handleCartRemove,
  setActiveSection,
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
  const createPopup = () => {
    const popupAlert = document.createElement("div");
    popupAlert.classList.add("popup");
    popupAlert.innerText = `Your order has been placed!`;
    document.querySelector(".cart-section").append(popupAlert);
    setTimeout(() => {
      popupAlert.remove();
      setCart([]);
    }, 1000);
  };
  useEffect(() => {
    setActiveSection(null);
  }, []);
  return (
    <section className="cart-section" id="cart">
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
              <Link to="/#delivery">
                <img
                  src={arrowIcon}
                  alt="icon to return to shopping menu"
                  height={21}
                  width="auto"
                />
              </Link>
              <Link to="/#delivery">Continue Shopping</Link>
            </div>
            {totalPrice > 0 ? (
              <div className="subtotal">
                <p>Subtotal:</p>
                <h3>¥ {totalPrice}</h3>
                <button
                  className="place-order"
                  aria-label="place your order"
                  onClick={createPopup}
                >
                  Place order
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <a
          href="https://unsplash.com/photos/9Cwg1ym3SCs"
          alt="source for image"
        >
          <img
            loading="lazy"
            className="checkout-img"
            src={checkoutImg}
            alt="checkout pic"
            width={500}
          />
        </a>
      </motion.div>
    </section>
  );
};

export default Cart;
