import ButtonCheckout from "../components/Buttons/Button_for_all"
import styles from "./NotFound.module.css"
import num from "../img/4.png"
import cactus from "../img/404.svg"

const NotFound = () => {
    return(
    <div className={styles.content}>
        <div className={styles.image}>
            <div><img src={num}></img>  <img src={cactus}></img><img src={num}></img></div>
            </div>
            <h1>Page Not Found</h1>
            <p className={styles.p}>We’re sorry, the page you requested could not be found.<br></br>
Please go back to the homepage.</p>
        <ButtonCheckout text="Go home" link="/"></ButtonCheckout>
        </div>
    )
}

export {NotFound}