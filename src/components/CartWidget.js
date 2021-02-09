import React from "react"
import cartIcon from '../img/shopping-cart-blue.svg'
import { Link } from 'react-router-dom';

const CartWidget = function(){
    return(
        <Link to="/cart" >
        <img className="cartIcon" src={cartIcon} alt="cart" />
            </Link>
    )
  }
  
  export default CartWidget;