import styles from './ItemDel.module.css'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { removeFromCart } from "../../store/cartActions";

export default function ItemDel(props){
    const dispatch = useDispatch();
    const handleRemove = () =>{
        console.log(props.id)
        dispatch(removeFromCart(props.id))
    }
    return(
        <div className={styles.del} onClick={handleRemove}>X</div>
    )
}
    





