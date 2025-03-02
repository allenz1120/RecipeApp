import { useEffect, useState } from "react";
import '@splidejs/react-splide/css';
import RecipeCard from "../RecipeCard/RecipeCard";
import './Recent.css'

function Recent() {
  //  Variable and the function used to set that variable. Inside the useState, define the type of data it is
    const [recent, setRecent] = useState([]);
  
    // This makes it so that this function gets called on load
    useEffect(() => {
      getRecent();
    }, []); // By passing an empty array, this only runs on the initial render
  
    const getRecent = async() =>{
      const check = localStorage.getItem('recent');
      if (check){
        setRecent(JSON.parse(check));
      }
      else{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=8`);
        const data = await api.json();
        localStorage.setItem('recent', JSON.stringify(data.recipes));
        setRecent(data.recipes)
      }
    }
  
    return (
      <div className="recent">
          <div className="wrapper">
            <h3>Latest in the Kitchen</h3>
            <div className="recipe-grid">
              {recent.map(recipe => {
                return (
                  <RecipeCard key={recipe.title} recipe={recipe}/>
                )
              })}
            </div>
          </div>
      </div>
    )
}


export default Recent