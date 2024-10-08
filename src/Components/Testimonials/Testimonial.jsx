import React from "react";
import "./Testimonial.css";
import SlickSlider from "./SlickSlider";

const Testimonial = () => {
  return (
    <>
      <div className="t-wrapper">
        <div className="container">
          <div className="t-container">
            <div className="t-head">
              <span className="tag">Testimonials</span>
              <span className="title">
                Access capital that complements traditional funding options
              </span>
              <span className="des">What people say about us</span>
            </div>
          </div>
          {/* slider */}
          <SlickSlider />
        </div>
      </div>
    </>
  );
};
export default Testimonial;
