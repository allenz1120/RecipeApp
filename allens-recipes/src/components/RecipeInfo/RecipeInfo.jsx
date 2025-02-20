import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./RecipeInfo.css";

function RecipeInfo() {
  let params = useParams();

  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    const recipeId = params.id;
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await api.json();
    console.log(data);
    setRecipe(data);
  };

  return (
    <div className="recipe">
      <div className="titleBar">
        <h3>
          {recipe.dishTypes !== undefined ? recipe.dishTypes[0] : "Dinner"}
        </h3>
        <h2>{recipe.title}</h2>
        <h4>ready in {recipe.readyInMinutes} minutes</h4>
      </div>
      <div className="recipeWrapper">
        <div className="introWrapper">
          <div className="imageWrapper">
            <img src={recipe.image} alt="" />
            <div>{recipe.summary}</div>
          </div>
          <div className="imageSideBar">
            <img src={recipe.image} alt="" />
          </div>
        </div>
        <div className="recipeCard">
          <h2>{recipe.title}</h2>
          <div className="container">
            <div className="navButtons">
              <div className="navButton">Ingredients</div>
              <div className="navButton">Instructions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeInfo;
