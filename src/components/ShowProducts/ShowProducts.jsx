import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ShowProducts.module.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ShowProducts(props) {
  const [products, setProducts] = useState([]);
  const backend = "http://localhost:3333";
  console.log(props.catid);
  console.log(props.from);

  useEffect(() => {
    const fetchProducts = async () => {
      const response =
        props.catid === undefined
          ? await fetch(backend + "/products/all")
          : await fetch(backend + "/categories/" + props.catid);
      const data = await response.json();
      console.log(data);
      props.catid === undefined ? setProducts(data) : setProducts(data.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className={styles.content}>
      {props.from === "/AllSales"? (  
       products.filter((product) => product.discont_price != null).map((product) => (
        <ProductCard product={product}></ProductCard>)))
        :
        
      products.map((product) => (
            <ProductCard product={product}></ProductCard>))}
  
    </div>
  );
}
