import React, { useState } from "react";


const ItemCount = ({onAdd, addToCart, condicion, stock, inicial, item, id}) => {
  const [contador, setContador] = useState(inicial);
  const aumentarContador = () => {
    if(contador < stock){
      setContador(contador + 1);
    }
  };

  const restarContador = () => {
    if(contador > 1){
      setContador(contador - 1);
    }
  };

  const agregarCarrito = (contador, item, id) => {
    onAdd(contador);
    addToCart(item, contador, id);
  }


  return(     
      <>
        <h2>Cantidad : {contador}</h2>
        <div>
          <span className="items__plusMinus" onClick={aumentarContador}>+</span>
          <span className="items__plusMinus" onClick={restarContador}>-</span>
          </div>
          <br/>
          {condicion && 
          <span className="items__button" onClick={ () => agregarCarrito(contador, item, id) }>Agregar al Carrito</span>          
          }
      </>
  )};

export default ItemCount;
