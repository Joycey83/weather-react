import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        This project coded by Joyce Cheung and is{" "}
        <a
          href="https://github.com/Joycey83/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open sourced on GitHub
        </a>
      </footer>
    </div>
  );
};

export default Footer;
