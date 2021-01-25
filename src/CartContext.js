import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

    const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState()

    useEffect(() => {
        var t = 0;
        const tot = cart.map(p => p.price * p.amount);
        tot.map( p => t = t + p)

        setTotal(t);
        console.log(tot)
        const cartQuantity = cart.length;
        setQuantity(cartQuantity);
    }, [cart])
    
const isInCart = (id) => {
    const item = cart.find (p => p.id === id) 
    if (item === undefined){
        return false;
    }else{
        return true;
    }
}









const addToCart = (product, counter, id) => {
    
    if (isInCart(id)){
        const oldProduct = cart.find(p => p.id === id);
        const newQuantity = oldProduct.amount + counter;
        const newProduct = { id: oldProduct.id, title: oldProduct.title, image: oldProduct.pictureUrl, price: oldProduct.price, amount:newQuantity}   
        const cartWithoutOld = cart.filter(product => product.id =! id)
        const cartWithNew = [...cartWithoutOld, newProduct];
        setCart(cartWithNew);
    }else{
        const newItem = {id: product.id, title:product.title, image: product.pictureUrl, price: product.price, amount:counter}
        setCart([...cart, newItem]) 
    }
}

const eliminateFromCart = (id) =>{
    const newCart = cart.filter(product => product.id!==id)
    setCart(newCart)
}

const clearCart = () => {
    setCart([]);
    setQuantity(0);
}

return(
        <CartContext.Provider value= {{cart, quantity, total, addToCart, eliminateFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
)
}

export default CartProvider;