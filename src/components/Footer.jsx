import React from 'react'
import { assets } from '../assets/assets'
import styled from 'styled-components'

const Footer = () => {
  return (
    <StyleFooter>
    <div className='footer' id='footer'>
        <div className="footer-content">
      <div className="left">
         <img className='logo' src={assets.logo} alt="" />
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tempore soluta minus corrupti nostrum aspernatur saepe tempora molestias, maxime velit?</p>
         <div className="icons">
         <img src={assets.facebook_icon} alt="" />
         <img src={assets.linkedin_icon} alt="" />
         <img src={assets.twitter_icon} alt="" />
         </div>
      </div>

      <div className="center">
        <h2>Company</h2>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
      </div>

      <div className="right">
        <h2>Get In Touch</h2>
        <ul>
            <li>+1-212-456-789</li>
            <li>contact@tomato.com</li>
        </ul>

      </div>
      </div>
    </div>
    </StyleFooter>
  )
}

export default Footer

const StyleFooter = styled.div`
  .footer {
  color: #d9d9d9;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #323232;
  padding: 2rem 1rem;
  margin-top: 5rem ;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden; /* prevent horizontal overflow */
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* responsive columns */
  gap: 2rem;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
}

.left {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.logo{
    width:100px;
}
.left, .center, .right {
  width: 100%; /* ensure columns don’t overflow */
}

.left .logo, .icons img {
  max-width: 100%; /* images scale with container */
  height: auto;
}

.icons {
  display: flex;
  flex-wrap: wrap; /* wrap icons on small screens */
  gap: 10px;
  margin-top: 10px;
}

.center ul, .right ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.center ul li, .right ul li {
  margin: 5px 0;
  cursor: pointer;
}

/* MEDIA QUERIES */
@media (max-width: 750px) {
  .footer-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}

.left,.center,.right{
    margin-left: 20px;
}


`;

