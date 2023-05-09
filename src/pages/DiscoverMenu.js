import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import ItemCard from "../components/ItemCard";

const DiscoverMenu = ({ products }) => {
  let lists = [
    { name: "Sushi Oishi" },
    { name: "Ramen Oishi" },
    { name: "Udon Oishi" },
    { name: "Danngo Oishi" },
    { name: "Others Menu" },
  ];
  let title = "DISCOVER OUR MENU";
  let breadcrumbs = "メニューを発見";
  const allLists = lists.map((list, index) => <li key={index}>{list.name}</li>);
  const allProducts = products.map((product) => (
    <ItemCard
      product={product}
      key={product.id}
      //   handleCartAdd={handleCartAdd}
      //   handleCartRemove={handleCartRemove}
    />
  ));
  return (
    <section className="section section-four">
      <div className="content" id="discover">
        <Link to="/#discover">
          <h2 className="section-breadcrumbs">{breadcrumbs}</h2>
        </Link>
        <h1 className="section-title">{title}</h1>
        <ul className="menu-list-li">
          <li className="first-li">All</li>
          {allLists}
        </ul>
      </div>
      <div className="products-wrapper"> {allProducts}</div>
    </section>
  );
};
export default DiscoverMenu;
