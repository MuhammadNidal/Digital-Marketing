import React from "react";
import EmailBox from "../EmailBox/EmailBox";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="f-wrapper">
        <div className="container">
          <div className="f-container">
            <span className="title">Get Funded Today!</span>
            <EmailBox />
            <hr />

            <div className="f-menu">
              <span>Home</span>
              <span>What we do</span>
              <span>How it works</span>
              <span>Who we invest</span>
              <span>Testimonial</span>
            </div>

            <hr />

            <span className="text">"Made by Muhammad Nidal"</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
