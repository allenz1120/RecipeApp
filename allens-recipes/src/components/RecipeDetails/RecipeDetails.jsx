import React from "react";
import "./RecipeDetails.css";

function RecipeDetails({ recipe }) {
  return (
    <div className="recipeDetails">
      <h2>{recipe.title}</h2>
      <div className="navContainer">
        <div className="navButtons">
          <div className="navButton">Share</div>
          <div className="navButton">Print</div>
        </div>
        <div className="recipeContainer">
            <div className="ingredients">test</div>
            <div className="instructions">test2</div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
