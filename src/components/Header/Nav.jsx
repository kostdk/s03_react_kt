import styles from "./Nav.module.css";

import { Routes, Route, NavLink } from "react-router-dom";


export default function Nav() {
  return (
    <>
      <nav className={styles.nav}>
        <NavLink to="/">Main Page</NavLink>
        <NavLink to="/Categories">Categories</NavLink>
        <NavLink to="/AllProducts">AllProducts</NavLink>
        <NavLink to="/AllSales">AllSales</NavLink>
      </nav>
      
    </>
  );
}
