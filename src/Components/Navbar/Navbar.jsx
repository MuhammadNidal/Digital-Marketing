import React, { useState } from "react";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  return (
    <div className="n-wrapper">
      {/* desktop version */}
      <div className="container">
        <div className="n-container">
          {/* left side */}
          <div className="n-logo">
            <span>Muhammad Nidal</span>
          </div>

          {/* right side */}
          <div className="n-right">
            <div className="n-menu">
           
            </div>
            <div className="fund-button">get funded</div>
          </div>
        </div>
      </div>

      {/* mobile/tab version */}
      <div className="nm-container">
        {/* logo */}
        <span>Muhammad Nidal</span>

        {/* menu icon */}
        {!mobileMenuOpened ? (
          <BiMenuAltRight size={30} onClick={() => setMobileMenuOpened(true)} />
        ) : (
          <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />
        )}

        {/* mobile menu */}
        <div
          className="nm-menu"
          style={{
            transform: mobileMenuOpened
              ? "translateX(0%)"
              : "translateX(-100%)",
          }}
        >
        
          <div className="m-funded-button">Get Funded</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
