import React from "react"
import toy from './pelota.png'

const Item = ({id,title,price,pictureUrl}) => {
    return(
        <div>
            <img src={toy} className="product__image" alt="Juguete Pelota" />
        </div>
        )
  }
  
  export default Item;