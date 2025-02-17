import { useEffect, useState } from "react";
import './Newest.css';
import {Link} from "react-router-dom";

function Newest() {

    //  Variable and the function used to set that variable. Inside the useState, define the type of data it is
      const [newest, setNewest] = useState([]);
    
      useEffect(() => {
        getNewest();
      }, []);
    
      const getNewest = async() => {
        const check = localStorage.getItem('newest');
        if (check){
          setNewest(JSON.parse(check));
          console.log(JSON.parse(check))
        }
        else{
          const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=1`);
          const data = await api.json();
          localStorage.setItem('newest', JSON.stringify(data.recipes[0]));
          setNewest(data.recipes[0])
        }
      }

  return (
    <div className="newest">
      <div className="image-wrapper">
        <Link to={'/recipe/' + newest.id}>
          <img src={newest.image} alt={newest.title}/>
        </Link>
      </div>
      <div className="description-wrapper">
        <h4>New to the Kitchen</h4>
        <h1>{newest.title}</h1>
        <div className="description">{newest.summary}</div>
      </div>
    </div>
  )
}

export default Newest