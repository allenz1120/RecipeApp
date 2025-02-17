import React from 'react'
import './RecipeCard.css'
import {Link} from "react-router-dom"

function RecipeCard({recipe}) {
  return (
    <div className='recipeCard'>
        <Link to={'/recipe/' + recipe.id}>
          <div className='header'>
              <img src={recipe.image} alt={recipe.title}/>
          </div>
          <div className='body'>
              <h5>ready in {recipe.readyInMinutes} mins</h5>
              <h4>{recipe.title}</h4>
          </div>
        </Link>
    </div>
  )
}

export default RecipeCard