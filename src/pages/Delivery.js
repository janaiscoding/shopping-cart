import React, { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import ItemCard from "../components/ItemCard";
import { motion } from "framer-motion";
import "../styles/delivery.css";
import { useState } from "react";
const Delivery = ({ products, handleCartAdd, handleSwapProducts }) => {
  const [selected, setSelected] = useState("sushi");
  let lists = [
    { name: "Umaī Sushi", data: "sushi" },
    { name: "Umaī Ramen", data: "ramen" },
    { name: "Umaī Rice", data: "rice" },
    { name: "Umaī Deserts", data: "desert" },
  ];
  let title = "DELīVERY AT YOUR HOME";
  let breadcrumbs = "ご自宅への配送 / Delivery";
  let floatingTitle = "ご自宅への配送 / Delivery ";

  const handleSelected = (e) => {
    document
      .querySelectorAll("li")
      .forEach((li) => li.setAttribute("hover-visible", "false"));
    e.target.setAttribute("hover-visible", "true");
    setSelected(e.target.id);
  };

  const allLists = lists.map((list, index) => (
    <li key={index} id={list.data} onClick={(e) => handleSelected(e)}>
      {list.name}
    </li>
  ));
  const selectedProducts = products.filter((p) => p.data === selected);
  const shownProducts = selectedProducts.map((product) => (
    <ItemCard product={product} key={product.id} handleAdd={handleCartAdd} />
  ));
  useEffect(() => {
    let initialId = document.getElementById("sushi");
    initialId.setAttribute("hover-visible", "true");
  }, []);
  return (
    <section className="section section-delivery" id="delivery">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-centered-title"
      >
        <Link to="/#delivery">
          <h2 className="section-breadcrumbs">{breadcrumbs}</h2>
        </Link>
        <h1 className="section-title">
          <span className="floating-title">{floatingTitle}</span>
          {title}
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-delivery-content"
      >
        <ul className="menu-list-li">{allLists}</ul>
        <div className="products-wrapper-total">
          <div className="products-wrapper">{shownProducts}</div>
          <div className="delivery-buttons-wrapper">
            <Link to="/cart" className="products-go-to-cart-button">
              Go To Cart
            </Link>
            <a
              href="https://www.freepik.com/free-vector/asia-food-icon-set_1531439.htm#query=sushi&position=1&from_view=search&track=sph"
              className="products-go-to-cart-button"
            >
              View Icons Source
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Delivery;
