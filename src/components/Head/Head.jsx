import styles from "./Head.module.css";
import background from "../../img/head.svg";
import ButtonCheckout from "../Buttons/Button_for_all";


export default function Head() {
  return (
    <div className={styles.head}>
        <div className={styles.content}>
            <h1>Amazing Discounts <br></br> on Garden Products!</h1>
            <ButtonCheckout text="Check out"></ButtonCheckout>
        </div>
      
    </div>
  );
}
