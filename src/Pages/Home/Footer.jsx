import { Link } from "react-scroll";
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div className="footer--content--container">
          <p className="footer--content">&copy; Ysabella Cubay {currentYear}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
