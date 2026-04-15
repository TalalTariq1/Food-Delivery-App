import React, { useContext } from 'react'
import { StoreContext } from '../context/storecontext'
import styled from 'styled-components';

const PlaceOrder = () => {
const {getTotalCartAmount}=useContext(StoreContext);

  return (
    <StyleOrderpage>
    <form action="" className="placeorder">
        <div className="placeorder-left">
            <p className="title">
                Delivery Information
            </p>

            <div className="multi-fields">
                <input type="text" placeholder='First Name'/>
                <input type="text" placeholder='Last Name' />
            </div>
            <input type="email" placeholder='Email Address' />
            <input type="text" placeholder='Street' />

            <div className="multi-fields">
                <input type="text" placeholder='City'/>
                <input type="text" placeholder='State' />
            </div>

            <div className="multi-fields">
                <input type="text" placeholder='Zip code'/>
                <input type="text" placeholder='Country' />
            </div>
            <input type="text" placeholder='Phone' />
              
        </div>

        <div className="placeorder-right">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
                 <div className="cart-total-details">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <p>Delivery Fee</p>
                    <p>{getTotalCartAmount()===0?0:2}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <b>Total</b>
                    <b>${getTotalCartAmount()===0?0:getTotalCartAmount() +2}</b>
                </div>
            </div>
            <button >Proceed To Payment</button>
        </div>  

        </div>
    </form>
    </StyleOrderpage>
  )
}

export default PlaceOrder


const StyleOrderpage=styled.div`
    .placeorder{
       display:flex ;
       align-items: start;
       justify-content: space-between;
       gap: 50px;
       margin-top: 100px;

       max-width: 1200px;       
       margin: 100px auto 0;   
       padding: 20px;  
    }

    .cart-total{
        flex:1;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .cart-total-details{
        display: flex;
        justify-content: space-between;
        color: #555;
    }

    .cart-total hr{
        margin: 10px 0px;
    }

    .cart-total button{
        border: none;
        color: white;
        background-color: tomato;
        width: max-content(12vw,200px);
        padding: 12px 0px;
        border-radius: 4px;
        cursor: pointer;
    }

    .cart-promocode{
        flex: 1;
    }

    .placeorder-left{
       width: 100%;
       max-width: max-content(30%,500px);

    }

    .placeorder-left .title{
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 50px;

    }

    .placeorder-left input{
        margin-bottom: 15px;
        width: 100%;
        padding: 10px;
        border: 1px solid #c5c5c5;
        border-radius: 4px;
        outline-color: tomato;
    }

    .placeorder-left .multi-fields{
        display: flex;
        gap:10px;
    }

    .placeorder-right{
        width: 100%;
        max-width: max-content(40%,500px);
    }

    .placeorder .cart-total button{
        margin-top:30px ;
    }

`
