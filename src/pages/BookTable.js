import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import bookTableImageLeft from "../assets/landingpage/leftbannerfix.png";
import bookTableImageRight from "../assets/landingpage/rightbanner.png";
const BookTable = () => {
  let title = "Book a Table for Dinner";
  let para =
    "Just one phone call and we will reserve a table for you also you can choose table according you requirements family members.";
  let breadcrumbs = "席を予約する";
  return (
    <section className="section section-five" id="book">
      <img src={bookTableImageLeft} alt="animated sushi table" width={400} />
      <div className="content">
        <Link to="/#about">
          <h2 className="section-breadcrumbs">{breadcrumbs}</h2>
        </Link>
        <h1 className="section-title">{title}</h1>
        <p className="section-paragraph">{para}</p>
        <button className="section-button">
          <Link to="/contact" className="book-button">
            Contact Us Now
          </Link>
        </button>
      </div>
      <img className="right-img" src={bookTableImageRight} alt="animated sushi table" width={400} />
    </section>
  );
};
export default BookTable;
