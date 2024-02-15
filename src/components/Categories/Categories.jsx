import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from './Categories.module.css'

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const backend = "http://localhost:3333"
 
  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch(backend+"/categories/all");
      const data = await response.json();
      setCategories(data);
    };
    fetchCategory();
  },[]);
  categories.slice(0,4)
 
  return (
    <>
      <div className={styles.categoriesDiv}>
        <h1>Categories</h1>
        <div className={styles.line}></div>
        <Link to="/categories">
        <button className={styles.button}>All categories</button>
        </Link>
        </div>
        <div className={styles.content}>
            
                {categories.slice(0,4).map(category =>  (
                  
                   
                 <div className ={styles.cards} key={category.id}>
                    <Link to = {categories}>
                      <img className = {styles.img} src={backend+category.image} alt={category.title}></img>
                    
                    <p>{category.title}</p>
                    </Link>
                 </div>
                
                )
                )}
        </div>
    </>
  );
}
