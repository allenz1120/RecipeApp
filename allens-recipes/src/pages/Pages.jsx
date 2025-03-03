import React from "react";
import Home from "./Home/Home";
import Recipe from "./Recipe/Recipe";
import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:id" element={<Recipe />} />
    </Routes>
  );
}

export default Pages;
