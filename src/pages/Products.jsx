import { Link, useLocation } from "react-router-dom";
import ShowProducts from "../components/ShowProducts/ShowProducts";
import styles from "./Products.module.css"

const Products = () => {
  const location = useLocation();
  const [catId,catTitle] = location.search.slice(1).split('&')
  console.log(location);
  let checkcatTitle = catTitle.replace(/%20/g," ")
  
  return (
    <><div className={styles.prod}>
      <h1>{checkcatTitle}</h1>
     
    </div>
     <ShowProducts catid={catId}></ShowProducts>
     </>
  );
};

export { Products };
