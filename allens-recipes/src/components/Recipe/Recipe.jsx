import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {useState} from 'react';
import './Recipe.css';
function Recipe() {

    let params = useParams();

    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        getRecipe();
    }, []);

    const getRecipe = async() => {
        const recipeId = params.id;
        const api = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const data = await api.json();
        console.log(data);
        setRecipe(data);
    }


  return (
    <div className='recipe'>
        <div className='recipeWrapper'>
            <div>
                <h2>{recipe.title}</h2>                
                <img src={recipe.image} alt='' />
            </div>
            <div className='info'>
                <div className='navButton'>
                    Ingredients
                </div>
                <div className='navButton'>
                    Instructions
                </div>
            </div>
        </div>
    </div>
  )
}

export default Recipe