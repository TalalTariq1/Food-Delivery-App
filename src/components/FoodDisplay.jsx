import React from 'react'
import { food_list } from '../assets/assets'
import FoodCard from './FoodCard'
import styled from 'styled-components'

const FoodDisplay = ({category,setcategory}) => {
  return (
    <StyledDisp>
    <div className='food-items'>
      <h2>Top Dishes Near U</h2>
      <div className="food-items-list">
        {food_list.map((item,index)=>{
          if(category==="All" || category===item.category)
          {
             return( <div>
                <FoodCard key={index} id={item._id} name={item.name}  desc={item.description} price={item.price} image={item.image}/>
                 </div>
            )
          }
            
        })}
      </div>
    </div>
    </StyledDisp>
  )
}

export default FoodDisplay

const StyledDisp=styled.div`

.food-items{
    width: 90%; 
  max-width: 1200px; 
  margin: 30px auto;
  box-sizing: border-box;
}

.food-items h2{
    font-weight: 600;
    font-size: max(2vw,24px);
}

.food-items-list{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 30px;
    row-gap: 50px;
    margin-top: 20px;
}


    
`
