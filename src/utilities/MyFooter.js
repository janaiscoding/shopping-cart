import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../assets/icons/logo.png";
import "../styles/footer.css";

const MyFooter = () => {
  return (
    <>
      <footer>
        <div className="footer-flex-top">
          <Link className="logo-wrapper flex" to="/#home">
            <img className="logo" src={logo} alt="sushi logo" width={50} />
            <p className="logo-name">Oishī</p>
          </Link>
          <ul className="footer-navigation flex" data-visible="false">
            <li className="active">
              <Link to="/#about">About</Link>
            </li>
            <li className="active">
              <Link to="/#tradition">Tradition</Link>
            </li>
            <li className="active">
              <Link to="/#sushi">Sushi</Link>
            </li>
            <li className="active">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-flex-bottom">
          <div className="link-wrapper">
            <a
              href="https://github.com/janaiscoding"
              className="footer-link"
              rel="noopener noreferrer"
            >
              Developed by ©JanaIsCoding
            </a>
            <a className="footer-link" href="https://dribbble.com/rizkirmw">
              Design Creator ©Rizki
            </a>
          </div>
          <div className="utility-pages-wrapper">
            <p>Security</p>
            <p>Privacy</p>
            <p>Terms</p>
          </div>
        </div>
      </footer>
    </>
  );
};
// change cart icon to display cuter stuff ? icons maybe ?
export default MyFooter;
