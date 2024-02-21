import React, { useState, useEffect } from "react";
import styles from "./Counter.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { decrementQuantity,incrementQuantity } from "../../store/cartActions";

const Counter = (props) => {
  
  const dispatch = useDispatch();
  let dataforcount = useSelector((state) => state.cart.cartItems);
  useEffect(() => {}, [dataforcount]);
  let count = useSelector((state) =>
    state.cart.cartItems.find((item) => item.id === props.id)
  );

  // const incrementQuantity = () => {
  //   setQuantity(quantity + 1);
  // };

  // const decrementQuantity = () => {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }
  const handleIncrement = () => {
    console.log("incr")
    dispatch(incrementQuantity(props.id));
  };

  const handleDecrement = () => {
    console.log("decr")
    dispatch(decrementQuantity(props.id));
  };

  return (
    <div className={styles.content}>
      <div className={styles.count}>
        <button className={styles.button} onClick={handleDecrement}>
          -
        </button>
        {count.quantity}
        <button className={styles.button} onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
