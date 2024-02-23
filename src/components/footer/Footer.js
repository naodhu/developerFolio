import React, { useContext } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Crafted with 💡 & 🎨 by Naod Hunde")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Inspired by digital dreams & coded into reality
        </p>
      </div>
    </Fade>
  );
}