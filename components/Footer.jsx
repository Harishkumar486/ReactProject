import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <div >
        <footer className="footer">
      <span>C Style Conferences</span>

      <nav id="sub-topics">
        <a href="#" target="_self" className="navbar">
          HOME
        </a>
        <a href="#" target="_self" className="navbar">
          SPEAKER
        </a>
        <a href="#" target="_self" className="navbar">
          SCHEDULE
        </a>
        <a href="#" target="_self" className="navbar">
          VENUE
        </a>
        <a href="#" target="_self" className="navbar">
          REGISTER
        </a>
      </nav>
      </footer>
    </div>
  );
};

export default Footer;
