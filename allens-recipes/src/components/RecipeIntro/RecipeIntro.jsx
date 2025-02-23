import React from "react";
import "./RecipeIntro.css";

function RecipeIntro({ recipe }) {
  return (
    <div className="recipeIntro">
      <div className="imageWrapper">
        <img src={recipe.image} alt="" />
        <div>{recipe.summary}</div>
      </div>
      <div className="imageSideBar">
        <img src={recipe.image} alt="" />
      </div>
    </div>
  );
}

export default RecipeIntro;
