import React from "react";
import profilePic from "../assets/images/alexander-hipp.webp"
import "../styles/testimonial.css";

const Testimonials = () => {
  return (

      <div className="section section-testimonials-handler">
        <div className="section-testimonials">
        <div className="customers-number">
          <div className="number"> 20k+</div>
          <p className="description">Happy Customers</p>
        </div>
        <div className="testimonial-message">
          <a
            href="https://unsplash.com/photos/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lA"
            alt="source for the image of alexander hipp"
          >
            <img
              src={profilePic}
              loading="lazy"
              alt="testimonial person"
              width={100}
              height="auto"
              className="testimonial-pic"
            />
          </a>
          <div className="testimonial-message-text">
            If you're a sushi lover, this restaurant is
            <span className="title-highlight"> an absolute must-visit. </span>
            If you want to experience <span className="title-highlight">the best sushi</span> in town, look no further
            than this restaurant.
          </div>
        </div>
      </div>
      </div>
  );
};

export default Testimonials;
