import React from 'react'
import './RecipeCard.css'

function RecipeCard({recipe}) {
  return (
    <div className='card'>
        <div className='header'>
            <img src={recipe.image} alt={recipe.title}/>
        </div>
        <div className='body'>
            <h5>ready in {recipe.readyInMinutes} mins</h5>
            <h4>{recipe.title}</h4>
        </div>
    </div>
  )
}

export default RecipeCard