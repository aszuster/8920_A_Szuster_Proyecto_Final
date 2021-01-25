import React, { useState } from "react";


const ItemCount = ({onAdd, addToCart, condicion, stock, inicial, item, id}) => {
  const [contador, setContador] = useState(inicial);
  console.log(id);
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
        <p>Cantidad : {contador}</p>
          <button onClick={aumentarContador}>+</button>
          <button onClick={restarContador}>-</button>
          <br/>
          {condicion && 
          <button onClick={ () => agregarCarrito(contador, item, id) }>Agregar al Carrito</button>          
          }
      </>
  )};

export default ItemCount;
