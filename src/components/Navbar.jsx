import React from 'react'
import { assets } from '../assets/assets'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navbar = ({setshowLogin}) => {
  return (
    <StyleNav>
    <div className='nav'>
        <Link to={"/"}><img src={assets.logo} alt="" /></Link>
      <ul>
        <Link to='/' >Home</Link>
        <a href='#explore-menu'>Menu</a>
        <a href='#app-download'>Mobile-App</a>
        <a href='#footer'>Contact-Us</a>
      </ul>
      <Link to={"/cart"}><img className='basket' src={assets.basket_icon} alt="" /></Link>
      <button onClick={()=>setshowLogin(true)}>Sign in</button>
    </div>
    </StyleNav>
  )
}

export default Navbar

const StyleNav=styled.div`
    .nav{
        display: flex;
        justify-content: space-around;
        align-items: center;
        min-height: 60px;
        padding: 10px 10px;
        width: 100%;
    }

    .nav img{
        max-height: 50px;
        object-fit: cover;
    }

    .nav ul{
        list-style: none;
        display: flex;
        gap: 20px;
    }

    .nav ul li{
        cursor: pointer;
        font-size: 16px;
    }

    .nav button{
        background-color: #007bff;
     color: #fff; 
     padding: 0.5rem 1.2rem; 
     border: none;
     border-radius: 5px; 
    font-size: 1rem;
     cursor: pointer;
    transition: all 0.3s ease; 
    }

    .nav button:hover {
    background-color: #007bff;
    color: #fff;
  }

   .nav .basket {
  width: 28px;
  height: 28px;
  object-fit: contain;
  cursor: pointer;
 }

  @media (max-width:1050px) {
    .nav img{
      width: 140px;
    }

    .nav ul{
      gap: 20px;
      font-size: 17px;
    }


  }



   @media (max-width:900px) {
    .nav img{
      width: 120px;
    }

    .nav ul{
      gap: 15px;
      font-size: 16px;
    } 
  }


   @media (max-width:750px) {

    .nav{
      width: 100%;
    }

    .nav ul{
      display: none;
    }

    .nav .basket {
    width: 18px;
    height: 18px;
  }

    
  }

  a{
    text-decoration: none;
    color: black;
  }

  

  

`
