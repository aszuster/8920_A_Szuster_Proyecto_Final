import React, { useContext } from 'react';
import { CartContext } from './CartContext';


const CartItem = ({ id, title, image, price, amount}) =>{
    const {eliminateFromCart} = useContext(CartContext);
    const img = require(`../img/${image ?? 'plumero.jpg'}`)

    return(
        <>
        <div className="items__Container">
            <h2>{title}</h2>
            <img className="items__img" src={img?.default} alt={title}/>
            <div className="items__desc">
            <h3>${price}</h3>
            <h3>Cantidad: {amount}</h3>

            <h3>Sub-Total: ${amount*price}</h3>
            <span className="items__button flex-jc-c" onClick={() => eliminateFromCart(id)}> 
                Borrar
            </span> 
            </div>   
            </div>
        </>

    )
}

export default CartItem;