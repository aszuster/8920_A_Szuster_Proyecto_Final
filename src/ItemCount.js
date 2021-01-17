import React, { useState } from "react"

const ItemCount = ({onAdd, condicion, stock, inicial}) => {
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

  const agregarCarrito = () => {
    onAdd(contador)
  }


  return(     
      <>
        <p>Cantidad : {contador}</p>
          <button onClick={aumentarContador}>+</button>
          <button onClick={restarContador}>-</button>
          <br/>
          {condicion && 
          <button onClick={agregarCarrito}>Agregar al Carrito</button>          
          }

          
      </>
  )};

export default ItemCount;
