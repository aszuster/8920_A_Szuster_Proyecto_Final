import React from "react"
import cartIcon from './shopping-cart-black-shape.svg'
import { Link } from 'react-router-dom';

const CartWidget = function(){
    return(
        <Link to="/cart" ><img src={cartIcon} className="icon" alt="cart" /></Link>
    )
  }
  
  export default CartWidget;