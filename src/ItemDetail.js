import React, { useContext, useState } from "react"
import ItemCount from './ItemCount'
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';


const ItemDetail = ({title, image, id, desc, price, item}) => {

    const [contadorDetail, setContadorDetail] = useState(null);
    const [condicionBoton, setCondicionBoton] = useState (true);
    const { addToCart } =useContext(CartContext);


    const onAdd = cantidad => {
        console.log("funcion onAdd " + cantidad)
        setContadorDetail(cantidad)
        setCondicionBoton(false)
    }



    return(
        <div>
        <h1>{title}</h1>
        <img src={image} className="items__img" alt={title} />      
        <p>{desc}</p>
        <p>{price}</p>
        <ItemCount stock={10} inicial={0} onAdd={onAdd} addToCart={addToCart} condicion={condicionBoton} id={id} item={item}/>
        <br/>
        {contadorDetail &&
            <button><Link to="/cart" >Comprar</Link></button>
        }
        </div>
    )

}

  export default ItemDetail;