import React from "react";
import profilePic from "../assets/landingpage/alexander-hipp.jpg";
import "../styles/testimonial.css";

const Testimonials = () => {
  let testimonial =
    "If you're a sushi lover, this restaurant is an absolute must-visit. I've been to many sushi restaurants, but this one truly stands out as a cut above the rest. If you want to experience the best sushi in town, look no further than this restaurant. ";
  return (
    <div className="section-testimonials">
      <div className="customers-number">
        <div className="number"> 20k+</div>
        <p className="description">Happy Customers</p>
      </div>
      <div className="testimonial-message">
        <img
          src={profilePic}
          loading="lazy"
          alt="testimonial person"
          width={100}
          className="testimonial-pic"
        />
        <div className="testimonial-message-text">{testimonial}</div>
      </div>
    </div>
  );
};

export default Testimonials;
