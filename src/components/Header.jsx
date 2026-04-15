import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <StyleHeader>
<div className="header">
    <div className='header-content'>
      <h2>Order your Favourite Food Here</h2>
      <p>Everyone has that one favorite food that instantly lifts their mood and satisfies their cravings. Whether it's a late-night snack or a comfort meal after a long day, the taste brings a sense of happiness and calm. Enjoying your favorite dish isn’t just about filling your stomach — it’s about enjoying a moment that feels familiar, comforting, and completely yours</p>
      <button>View Menu</button>
    </div>
 </div>
 </StyleHeader>
  )
}

export default Header

const StyleHeader = styled.div`
  .header {
    width: 100%;
    max-width: 1200px;
    height: 60vh;
    margin: 2rem auto;
    background: url(header_img.png) center/cover no-repeat;
    position: relative;
    border-radius: 10px; /* optional */
  }

  .header-content {
    position: absolute;
    bottom: 5%;
    left: 2%;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 50%;
  }

  .header-content h2 {
    font-weight: 500;
    font-size: clamp(1.2rem, 2.5vw, 2rem);
    margin: 0;
  }

  .header-content p {
    font-size: clamp(0.8rem, 1.5vw, 1rem);
    line-height: 1.5;
    margin: 0;
  }

  .header-content button {
    border: none;
    color: #323232;
    font-weight: 500;
    padding: 0.6rem 1.2rem;
    background-color: white;
    font-size: clamp(0.8rem, 1vw, 1rem);
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .header-content button:hover {
    background-color: #f0f0f0;
  }

  /* RESPONSIVE ADJUSTMENTS */
  @media (max-width: 900px) {
    .header {
      height: 50vh;
    }
    .header-content {
      width: 70%;
      bottom: 5%;
      left: 2%;
    }
  }

  @media (max-width: 600px) {
    .header {
      height: 40vh;
      border-radius: 0;
    }
    .header-content {
      width: 90%;
      bottom: 3%;
      left: 5%;
    }
    .header-content p {
      display: none; /* hide long text on small screens */
    }
  }
`;

