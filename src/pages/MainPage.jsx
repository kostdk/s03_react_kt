import React from "react";
import Head from "../components/Head/Head";
import Categories from "../components/Categories/Categories";
import ProductList from "./ProductList";
import DiscountForm from "../components/DiscountForm/DiscountForm";

export default function MainPage() {
  return (
    <>
   <Head></Head>
   {/* <ProductList></ProductList> */}
   <Categories></Categories>
   <DiscountForm></DiscountForm>
   </>
  )
}
