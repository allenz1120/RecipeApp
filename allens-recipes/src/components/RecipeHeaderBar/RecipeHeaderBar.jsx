import React from "react";
import "./RecipeHeaderBar.css";

function RecipeHeaderBar({ recipe }) {
  return (
    <div className="recipeHeaderBar">
      <h3>{recipe.dishTypes !== undefined ? recipe.dishTypes[0] : "Dinner"}</h3>
      <h2>{recipe.title}</h2>
      <h4>ready in {recipe.readyInMinutes} minutes</h4>
    </div>
  );
}

export default RecipeHeaderBar;
