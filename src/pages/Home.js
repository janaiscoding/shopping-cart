import React, { useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/home.css";
import HomeImg from "../assets/images/homeimg.webp"
import flowerIcon from "../assets/icons/flowericon.png";
import Dining from "./Dining";
import Tradition from "./Tradition";
import Delivery from "./Delivery";
import Subscribe from "./Subscribe";
import Testimonials from "./Testimonials";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = ({
  products,
  handleCartAdd,
  activeSection,
  setActiveSection,
  applyDiscount,
}) => {
  const observer = useRef(null);
  const navigate = useNavigate()
  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting
        )?.target;
        if (visibleSection) {
          setActiveSection(visibleSection.id);
        }
      },
      {
        threshold: 0.5,
      }
    );
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      observer.current.observe(section);
    });
    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="home-main"
      >
        <section className="section section-home">
          <div className="content">
            <h1 className="section-title">
              ENJOY THE TASTE OF
              <br /> <span className="title-highlight">UMAī</span> FOOD
            </h1>
            <p className="section-paragraph">
              Sushi, one of the most popular Japanese dishes, has a rich and
              fascinating history that dates back to the 8th century.   <br />
              <span className="title-highlight">
                {" "}
                Fun facts about this project:
              </span>
            </p>
            <ul className="menu-list">
              <li>
                <p>
                  This project aims to be a shopping cart, but I
                  personalised it around my{" "}
                  <span className="title-highlight">favorite food!</span>
                </p>
                <img
                  src={flowerIcon}
                  width={25}
                  height={25}
                  alt="flower icon"
                />
              </li>
              <li>
                <p>
                  All of the text content in this site was
                  <span className="title-highlight"> AI generated </span> based
                  on my prompts.
                </p>
                <img
                  src={flowerIcon}
                  width={25}
                  height={25}
                  alt="flower icon"
                />
              </li>
              <li>
                <p>
                  Umaī means <span className="title-highlight">delicious</span>{" "}
                  in Japanese.
                </p>
                <img
                  src={flowerIcon}
                  width={25}
                  height={25}
                  alt="flower icon"
                />
              </li>
            </ul>
            <Link to="/#delivery" className="section-button store-button" aria-label="Go to Order Food">
                Order Online
            </Link>
          </div>
          <a href="https://unsplash.com/photos/NVX55qVyEkE">
            <img
              className="tradition-img"
              src={HomeImg}
              alt="japanese restaurant outdoors"
              height={600}
              width={400}
              loading="lazy"
            />
          </a>
        </section>
        <Tradition />
        <Delivery products={products} handleCartAdd={handleCartAdd} />
        <Dining />
        <Testimonials />
        <Subscribe applyDiscount={applyDiscount} />
      </motion.div>
    </>
  );
};

export default Home;
