import React from 'react'
import styled from 'styled-components'
import { menu_list } from '../assets/assets'

const ExploreMenu = ({category,setcategory}) => {
  return (
    <StyledMenu>
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p>Explore our menu filled with fresh, flavorful dishes made to satisfy every craving. From quick bites to full meals, we offer a variety of options crafted with care and quality. Discover your next favorite dish and enjoy a delicious experience every time.</p>
      <div className='menu-items'>
      {menu_list.map((item,index)=>{
        return (
            <div className='menu-item'>
                <img className={category===item.menu_name?"active":""} onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>
            </div>
        )
      })}
        </div>
    </div>

    </StyledMenu>
  )
}

export default ExploreMenu


const StyledMenu=styled.div`
    .explore-menu{
       width: clamp(700px, 80vw, 1200px);
         margin: auto;
         display: flex;
         flex-direction: column;
         gap: 20px;
    }

    .explore-menu h1{
        font-weight: 500;
    }

    .explore-menu p{
        max-width: 60%;
    }

    .menu-items{
        display: flex;
        overflow-x: scroll;
        gap: 20px;
        text-align: center;
    }
     .menu-items::-webkit-scrollbar{
        display: none;
    }

    .menu-items p{
        margin-top: 10px;
        color: #747474;
        font-size: max(1.4vw,14px);
        cursor: pointer;
    }

    .active {
      border: 5px solid red;
      border-radius: 50%;
    }

    .menu-item{
      cursor:pointer;
    }

    @media (max-width:1050px) {
      .explore-menu{
        max-width: 100%;
        font-size: 14px;
      }
    }
     
`
