import React, { useContext } from 'react'
import {CartContext} from './CartContext'
import CartItem from './CartItem';
import { Link } from 'react-router-dom';


const Cart = () =>{
    const { cart, emptyCart, total} = useContext(CartContext)
    cart.map(item => console.log(item))
    console.log(cart)

    return(
        <div className="container">
            {cart.length > 0 ?(
            <h1>Comprar</h1>
            )
            :
            (<div>
                <h1>No hay nada en el carrito</h1>
                <Link to={"/"}>
                    <button onClick={emptyCart}>
                        Ver productos
                    </button>
                </Link>
            </div>
            )}

            <div>
                {cart.length > 0 && cart.map (product => <CartItem key={product.id}
                id = {product.id} title={product.title} image={product.image} price = {product.price}
                amount={product.amount} />
                )}
            </div>

            {cart.length > 0 &&
            <>
                <h2>Total: ${total}</h2>
                <div>
                    <button onClick= {emptyCart}>
                        Sacar del carrito
                    </button>
                    <button onClick={() => {console.log(cart)}}>
                        Pagar
                    </button>
                </div>
            </>
            }
            
        </div>
    )
}

export default Cart