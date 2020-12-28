import React from "react"
import cartIcon from './shopping-cart-black-shape.svg'

const CartWidget = function(){
    return(
        <img src={cartIcon} className="icon" alt="cart" />
    )
  }
  
  export default CartWidget;