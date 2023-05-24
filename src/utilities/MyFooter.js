import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/footer.css";

const MyFooter = () => {
  return (
    <>
      <div className="footer-helper">
        <footer>
          <div className="footer-flex-top">
            <a
              href="https://github.com/janaiscoding"
              className="footer-link"
              rel="noopener noreferrer"
            >
              ©JanaIsCoding
            </a>

            <ul className="footer-navigation flex" data-visible="false">
              <li>
                <Link to="/#home">Home</Link>
              </li>
              <li>
                <Link to="/#tradition">Tradition</Link>
              </li>
              <li>
                <Link to="/#delivery">Delivery</Link>
              </li>
              <li>
                <Link to="/#reservation">Reservation</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};
// change cart icon to display cuter stuff ? icons maybe ?
export default MyFooter;
