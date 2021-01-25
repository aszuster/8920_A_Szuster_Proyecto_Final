import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import hueso from './img/pelota.jpg';

const CartItem = ({ id, title, image, price, amount}) =>{
    const {eliminateFromCart} = useContext(CartContext);
    const img = require(`./img/${image}`)

    console.log(img)

    

    return(
        <div>
            <h2>Producto: {title}</h2>
            <img src={img.default} alt={title}/>
            <h3>${price}</h3>
            <h3>Cantidad: {amount}</h3>
            <h3>Sub-Total: ${amount*price}</h3>
            <button onClick={() => eliminateFromCart(id)}> 
                Borrar
            </button>    
        </div>

    )
}

export default CartItem;