import {React,useContext,useState}from 'react'
import styled from 'styled-components'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/storecontext';

const FoodCard = ({id,name,desc,price,image}) => {
  const {cartItems,addtoCart,removefromCart}=useContext(StoreContext);

  return (
    <StyledCard>
    <div className='food-item'>
        <div className="img-container">
            <img className='food-item-img' src={image} alt="" />
            {!cartItems[id]
              ?<img className='add' onClick={()=>addtoCart(id)} src={assets.add_icon_white} alt="" />
              : <div className='info-quantity'>
                <img className='more' onClick={()=>addtoCart(id)} src={assets.add_icon_green} alt="" />
                <p>{cartItems[id]}</p>
                <img className='less' onClick={()=>removefromCart(id)}  src={assets.remove_icon_red} alt="" />
                </div> 

            }
            
        </div>
        
        <div className="info">
          <p className='name'>{name}</p>
        <p className='desc'>{desc}</p>
        <p className='price'>${price}</p>
        </div>
        
      
    </div>
    </StyledCard>
  )
}

export default FoodCard

const StyledCard=styled.div`
    .food-item{
        width: 100%;
        margin: auto;
         border-radius: 15px;
         box-shadow: 0px 0px 10px #00000015;
    }

    .food-item-img{
        width: 100%;
        border-radius: 15px 15px 0px 0px;
    }

    .info{
        padding: 20px;
    }

    .food-item .name{
        font-weight: 500;
        font-size: 20px;
    } 

    .food-item .desc{
        color:#676767 ;
        font-size:16px ;
    }

    .food-item .price{
        color: tomato;
        font-size: 22px;
        font-weight: 500;
        margin: 10px 0px;
    }
    .img-container{
        position: relative;
    }

    .add{
        position: absolute;
        right: 3%;
        bottom: 5%;
    }

    .add {
        width: 40px;
        cursor: pointer;
        border-radius: 50%;
    }

    .info-quantity{
        display: flex;
        align-items: center;
        gap: 10px;
        position: absolute;
        right: 3%;
        bottom: 5%;
        background-color: white;
        padding:5px 5px;
        border-radius: 20px;
    }

    .more, .less{
        width: 30px;
        cursor: pointer;
        border-radius: 50%; 
    }


`
