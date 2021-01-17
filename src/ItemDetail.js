import React, { useState } from "react"
import ItemCount from './ItemCount'


const ItemDetail = ({title, image, id, desc, price, stock}) => {

    const [contadorDetail, setContadorDetail] = useState(null);
    const [condicionBoton, setCondicionBoton] = useState (true);

    const onAdd = cantidad => {
        console.log("funcion onAdd " + cantidad)
        setContadorDetail(cantidad)
        setCondicionBoton(false)
    }


    return(
        <div>
        <h1>{title}</h1>
        <img src={image} className="items__img" />      
        <p>{desc}</p>
        <p>{price}</p>
        <ItemCount stock={10} inicial={0} onAdd={onAdd} condicion={condicionBoton}/>
        <br/>
        {contadorDetail &&
            <button>Comprar</button>
        }
        </div>
    )

}

  export default ItemDetail;