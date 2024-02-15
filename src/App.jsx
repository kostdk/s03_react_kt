import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import MainPage from "./pages/MainPage";
import { Layout } from "./components/Layout";
import { Categories } from "./pages/Categories";
import { AllProducts } from "./pages/AllProducts";
import { AllSales } from "./pages/AllSales";
import {NotFound} from "./pages/NotFound"

function App() {
  return (
    <div className="container">
      <Routes>
        <Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="Categories" element={<Categories/>}/>
            <Route path="AllProducts" element={<AllProducts/>}/>
            <Route path="AllSales" element={<AllSales/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
