import styles from "./Header.module.css";
import logo from "../../img/logo.png";
import Nav from "./Nav.jsx";
import Basket from "./Basket.jsx";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="/">
        <img src={logo} alt="Logo"></img>
      </a>
      <Nav></Nav>
      <Basket></Basket>
    </header>
  );
}
