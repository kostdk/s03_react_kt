import React from "react";
import styles from "./Basket.module.css";
import logo from "../../img/basket.svg";

export default function Basket() {
  return (
    <nav className={styles.basket}>
      <a href="/">
        <img src={logo} alt="Logo"></img>
      </a>
    </nav>
  );
}
