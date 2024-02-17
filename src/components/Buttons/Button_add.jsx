import styles from "./Button_add.module.css";


export default function Button_add(props) {
    return (
        <>
        
        <button className={styles.button}>{props.text}</button>
       
        </>
    );
  }