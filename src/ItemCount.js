import React, { useState } from "react"

const ItemCount = function(){
  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    setContador(contador + 1);
  };

  const restarContador = () => {
    if(contador > 0){
      setContador(contador - 1);
    }
  };

  const resetearContador = () => {
    setContador(0);
  };

  return(     
      <>
        <p>Cantidad : {contador}</p>
          <button onClick={aumentarContador}>+</button>
          <button onClick={resetearContador}>resetear</button>
          <button onClick={restarContador}>-</button>
      </>
  )};

export default ItemCount;
