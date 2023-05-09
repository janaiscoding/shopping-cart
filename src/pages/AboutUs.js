import React from "react";
import leftSectionTwoImage from "../assets/landingpage/left-side.png";
import { Link } from "react-router-dom";

const AboutUs = () => {
  let title = "OISHī JAPANESE CUISINE AND SUSHI";
  let para =
    "Oishī Japanese cuisine (Kaiseki & Sushi) aims to reconceptualise `WASHOKU`(Japanese traditional dining concept)* by innovating and creating state-of-the-art dishes made with a modern twist. *In 2013, Japanese `WASHOKU` was awarded and officially listed as one of the UNESCO World Intangible Cultural Heritage.";
  let breadcrumbs = "私たちに関しては / About Us";
  return (
    <section className="section section-two">
      <img src={leftSectionTwoImage} alt="animated sushi table" width={400} />
      <div className="content">
        <h2 className="section-breadcrumbs">{breadcrumbs}</h2>
        <h1 className="section-title">{title}</h1>
        <p className="section-paragraph">{para}</p>
        <button className="section-button">
          <Link to="/menu" className="store-button">
            Reservation
          </Link>
        </button>
      </div>
    </section>
  );
};
export default AboutUs;
