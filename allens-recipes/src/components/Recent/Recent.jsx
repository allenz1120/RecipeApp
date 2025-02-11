import { useEffect, useState } from "react";
import '@splidejs/react-splide/css';
import RecipeCard from "../RecipeCard/RecipeCard";
import './Recent.css'

function Recent() {
  //  Variable and the function used to set that variable. Inside the useState, define the type of data it is
    const [recent, setRecent] = useState([]);
  
    useEffect(() => {
      getRecent();
    }, []);
  
    const getRecent = async() =>{
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`);
      const data = await api.json();
      console.log(data.recipes)
      setRecent(data.recipes)
    }
  
    return (
      <div>
          <div className="wrapper">
            <h3>Latest in the Kitchen</h3>
            <div className="container">
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