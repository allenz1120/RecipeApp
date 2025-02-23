import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Recipe.css";
import RecipeHeaderBar from "../../components/RecipeHeaderBar/RecipeHeaderBar";
import RecipeIntro from "../../components/RecipeIntro/RecipeIntro";
import RecipeDetails from "../../components/RecipeDetails/RecipeDetails";

function Recipe() {
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
      <RecipeHeaderBar recipe={recipe} />
      <div className="recipeWrapper">
        <RecipeIntro recipe={recipe} />
        <RecipeDetails recipe={recipe} />
      </div>
    </div>
  );
}

export default Recipe;
