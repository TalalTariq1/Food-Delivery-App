import React,{useState} from 'react'
import styled from 'styled-components'
import { assets } from '../assets/assets';

const Loginpopup = ({setshowLogin}) => {
    const [currState, setcurrState] = useState("Sign-Up");
  return (
    <StyledLogin>
    <div className='login-popup'>
      <form  className="login-pop-container">
        <div className="login-pop-title">
            <h2>{currState}</h2>
            <img onClick={()=> {console.log("clicked"); setshowLogin(false);}} src={assets.cross_icon} alt="" />
        </div>
        <div className="inputs">
            {currState==="Login"?<></>:
            <input type="text" placeholder='Your name' required />}
            <input type="email" placeholder='Your email' required />
            <input type="password" placeholder='Password' required />
        </div>
        <button>{currState==="Sign-Up"?"Create account" : "Login"}</button>
        <div className="login-condition">
            <input type="checkbox" required />
            <p>By continuing,I agree to the terms of use & privacy policy</p>
        </div>
        {currState==="Login"
        ?<p>Create a new account ? <span onClick={()=>setcurrState("Sign-Up")}>Click Here</span></p>:
          <p>Already have an account? <span onClick={()=>setcurrState("Login")}>Login here</span></p>
        }
        
        
      </form>
    </div>
    </StyledLogin>
  )
}

export default Loginpopup


const StyledLogin=styled.div`
    .login-popup{
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-color: #00000090;
        display: grid;
    }

    .login-pop-container{
       place-self:center ;
       width: max(23vw,330px);
       color: #808080;
       background-color: white;
       display: flex;
       flex-direction: column;
       gap: 25px;
       padding: 25px 30px;
       border-radius: 8px;
       font-size: 14px;
       animation: fadein 0.5s;

    }

    .login-pop-title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: black;
    }

    .login-pop-title img{
        width: 16px;
        cursor: pointer;
    }

    .inputs{
      display:flex ;
      flex-direction: column;
      gap:20px;

    }
    .inputs input{
        outline: none;
        border: 1px solid #c9c9c9;
        padding: 10px;
        border-radius: 4px;
    }
    button{
       border:none ;
       padding: 10px;
       border-radius: 4px;
       color: white;
       background-color: tomato;
       font-size: 15px;
       cursor: pointer;
    }
    .login-condition{
      display: flex;
      align-items: start;
      gap: 8px;
      margin-top: -15px;
    }
    input{
        margin-top: 5px;
    }

    p span{
      color: tomato;
      font-weight: 500;
      cursor: pointer;
    }

`
