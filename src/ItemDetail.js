import React from "react"
import ItemCount from './ItemCount'


const ItemDetail = ({title, image, id, desc, price, stock}) => {


            return(
                <div>
                <h1>{title}</h1>
                <img src={image} className="items__img" />      
                <p>{desc}</p>
                <p>{price}</p>
                <ItemCount/>
                </div>
            )
        // })
    // )
    }

  export default ItemDetail;