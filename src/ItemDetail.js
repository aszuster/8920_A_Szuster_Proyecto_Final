import React from "react"
import ItemCount from './ItemCount'


const ItemDetail = ({title, image, id, desc, price, stock}) => {


    // return(
    //     item.map((items, i) => {
    //         const images= require(`./img/${items.pictureUrl}`)
    //         console.log(images);
            return(
                <>
                <h1>{title}</h1>
                <img src={image} className="items__img" alt="Juguete Pelota" />      
                <p>{desc}</p>
                <p>{price}</p>
                <ItemCount/>
                </>
            )
        // })
    // )
    }

  export default ItemDetail;