import { useEffect, useState } from "react";
import {styled} from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Recent() {
  //  Variable and the function used to set that variable. Inside the useState, define the type of data it is
    const [newest, setNewest] = useState([]);
  
    useEffect(() => {
      getNewest();
    }, []);
  
    const getNewest = async() =>{
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
      const data = await api.json();
      console.log(data)
      setNewest(data.recipes)
    }
  
    return (
      <div>
          <Wrapper>
            <h3>New to the Kitchen</h3>
            <Splide options={{
              perPage: 4,
              arrows: false,
              pagination: false,
              drag: 'free',
              gap: '5rem'

            }}>
              {newest.map(recipe =>{
                return (
                  <SplideSlide>
                    <Card>
                      <img src={recipe.image} alt={recipe.title}/>
                    </Card>
                    <h4>{recipe.title}</h4>
                  </SplideSlide>
                )
              })} 
            </Splide>
          </Wrapper>
      </div>
    )
}
const Wrapper = styled.div `
  margin: 4rem 0 rem;
`;

const Card = styled.div `
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  // p{
  //   position: absolute;
  //   z-index: 10;

  //   width: 100%;
  //   font-weight: 600;
  //   font-size: 1rem;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  // }
`;

export default Recent