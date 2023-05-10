import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/footer.css";

const MyFooter = () => {
  return (
    <>
      <footer>
        <div className="footer-flex-top">
          <a
            href="https://github.com/janaiscoding"
            className="footer-link"
            rel="noopener noreferrer"
          >
            Developed by ©JanaIsCoding
          </a>

          <ul className="footer-navigation flex" data-visible="false">
          <li className="active">
              <Link to="/#home">Home</Link>
            </li>
            <li className="active">
              <Link to="/#delivery">Delivery</Link>
            </li>
            <li className="active">
              <Link to="/#tradition">Tradition</Link>
            </li>
            <li className="active">
              <Link to="/#reservation">Reservation</Link>
            </li>
            <li className="active">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
// change cart icon to display cuter stuff ? icons maybe ?
export default MyFooter;
