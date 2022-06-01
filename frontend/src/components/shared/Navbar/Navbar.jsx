import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const brandStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
  };

  return (
    <nav className={`${styles.navbar} container`}>
      <Link style={brandStyle} to="/">
        <img src="/images/hand.png" alt="logo" />
        <span>Techy House</span>
      </Link>
    </nav>
  );
};

export default Navbar;
