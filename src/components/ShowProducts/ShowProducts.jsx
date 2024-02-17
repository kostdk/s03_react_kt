import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ShowProducts.module.css";

import Button_add from "../Buttons/Button_add";
import ProductCard from "../ProductCard/ProductCard";

export default function ShowProducts(props) {
  const [productsCategory, setProducts_category] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const backend = "http://localhost:3333";

  useEffect(() => {
    const fetchProducts_category = async () => {
      const response = await fetch(backend + "/products/all");
      const data = await response.json();
      setProducts_category(data);
    };
    fetchProducts_category();
  }, []);

  function percent(newprice, oldprice) {
    return (Math.abs(oldprice - newprice) / oldprice) * 100;
  }
  return (
    <div className={styles.content}>
      {productsCategory
        .filter((product) => product.categoryId === Number(props.catid))
        .map((product) => (
          <ProductCard product = {product}></ProductCard>
        ))}
    </div>
  );
}
