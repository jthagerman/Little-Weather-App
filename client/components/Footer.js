import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Link to="/about">
        <p>Created By: John T. Hagerman 2021, FSA-Stackathon-Assignment</p>
      </Link>
    </footer>
  );
};

export default Footer;
