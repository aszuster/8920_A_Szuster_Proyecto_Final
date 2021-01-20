import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartItem = ({ id, name, image, price, amount}) =>{
    const {eliminateFromCart} = useContext(CartContext);

    return(
        <div>
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            <h3>${price}</h3>
            <h3>{amount}</h3>
            <h3>${amount*price}</h3>
            <button onClick={() => eliminateFromCart(id)}> 
                Borrar
            </button>    
        </div>

    )
}

export default CartItem;