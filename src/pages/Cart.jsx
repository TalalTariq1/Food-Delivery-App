import React, { useContext } from 'react'
import { food_list } from '../assets/assets'
import { StoreContext } from '../context/storecontext'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  
    const {cartItems,removefromCart,getTotalCartAmount}=useContext(StoreContext);
    const navigate=useNavigate();

  return (
    <StyledCart>
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-item-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
            if(cartItems[item._id]>0){
                return(
                    <div>
                    <div className="cart-item-title cart-items-item">
                         <img src={item.image} alt="" />
                         <p>{item.name}</p>
                         <p>${item.price}</p>
                         <p>{cartItems[item._id]}</p>
                         <p>${item.price*cartItems[item._id]}</p>
                         <p onClick={()=>removefromCart(item._id)} className='cross'>x</p>
                        
                    </div>
                    <hr />
                    </div>
                )
            }
        })}
      </div>
      <div className="cart-bottom">
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
            <button onClick={()=>navigate("/order")}>Proceed To Checkout</button>
        </div>

        <div className="cart-promocode">
            <div>
                <p>If you have a promo code,Enter it here </p>
                <div className='cart-promocode-input'>
                    <input type="text"  placeholder='promocode'/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
      </div>
    </div>
    </StyledCart>
  )
}

export default Cart


const StyledCart=styled.div`
    .cart{
      max-width: 1200px;       /* your cart width */
    margin: 100px auto 0;   /* center horizontally */
     padding: 20px;  
    }

    .cart-item-title{
        display: grid;
        grid-template-columns: 1fr 1.5fr 1fr 1fr 1fr 0.5fr;
        align-items: center;
        color: gray;
        font-size: max(1vw,12px);

    }

    .cart-items-item{
     margin:10px 0px ;
     color: black;
    }

    .cart-items-item img{
        width: 50px;
    }

    .cart hr{
        height: 1px;
        background-color: #e2e2e2;
        border: none;
    }

    .cross{
        cursor: pointer;
    }

    .cart-bottom{
        margin-top:80px;
        display: flex;
        justify-content: space-between;
        gap: max(12vw,20px);

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

    .cart-promocode p{
       color: #555;
    }

    .cart-promocode-input{
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        align-items:center ;
        background-color: #eaeaea;
        border-radius: 4px;
    }

    .cart-promocode-input input{
        background: transparent;
        border: none;
        outline: none;
        padding-left: 10px;
    }

    .cart-promocode-input button{
        width: max-content(10vw,150px);
        padding: 12px 5px;
        background-color: black;
        border: none;
        color: white;
        border-radius: 4px;
    }

    @media (max-width: 750px) {
        .cart-bottom{
            flex-direction: column-reverse;
        }

        .cart-promocode{
            justify-content: start;
        }
    }

`
