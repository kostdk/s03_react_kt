import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import Button_add from "../Buttons/Button_add";

export default function ProductCard(props) {
    const [productsCategory, setProducts_category] = useState([]);
    const [isHovered, setIsHovered] = useState(false);
  
    const backend = "http://localhost:3333";
  
  
  
    const product=props.product
    function percent(newprice, oldprice) {
      return (Math.abs(oldprice - newprice) / oldprice) * 100;
    }
    return(
    <div className={styles.container}>
            <div
              className={styles.card}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              
            >
              <img
                className={styles.image}
                src={backend + product.image}
                alt={product.title}
                width="316px"
                height="284px"
              />

              <p>
                {product.title.length < 25
                  ? product.title
                  : product.title.slice(0, 15) + "..."}
              </p>
              <div className={styles.divprice}>
                <h1 className={styles.price}>
                  ${" "}
                  {product.discont_price != null
                    ? product.discont_price
                    : product.price}
                </h1>
                <p className={styles.discont}>
                  {product.discont_price != null ? product.price : ""}
                </p>
                {isHovered && <Button_add text="Add to card"></Button_add>}
              </div>
              <p>
                {product.discont_price != null ? (
                  <div className={styles.percent}>
                    {"-" +
                      Math.round(
                        percent(product.price, product.discont_price)
                      ) +
                      "%"}
                  </div>
                ) : (
                  ""
                )}
              </p>
            </div>
          </div>
    )    
    }
