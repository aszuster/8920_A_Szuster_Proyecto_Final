import React, { useContext, useState } from "react"
import ItemCount from './ItemCount'
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';


const ItemDetail = ({title, image, id, desc, price, item}) => {

    const [contadorDetail, setContadorDetail] = useState(null);
    const [condicionBoton, setCondicionBoton] = useState (true);
    const { addToCart } =useContext(CartContext);


    const onAdd = cantidad => {
        setContadorDetail(cantidad)
        setCondicionBoton(false)
    }



    return(
        <div className="section section__detailContainer">
        <div className="items__Container">
        <h1>{title}</h1>
        <img src={image} className="items__img" alt={title} />
        <div className="items__desc">
        <p>{desc}</p>
        <p>Precio: ${price}</p>
        </div>
        </div>
        <div className="addingToCart">
        <ItemCount stock={10} inicial={1} onAdd={onAdd} addToCart={addToCart} condicion={condicionBoton} id={id} item={item}/>
        <br/>
        {contadorDetail &&
            <Link className="items__button" to="/cart" >Comprar</Link>
        }
        </div>
        </div>
    )

}

  export default ItemDetail;