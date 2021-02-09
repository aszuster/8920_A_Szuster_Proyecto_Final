import React from "react"
import { NavLink } from 'react-router-dom'


const Item = ({id, title, image, desc}) => {

            return(
                <div className="items__Container">
                <h2>{title}</h2>
                <img src={image} className="items__img" alt={title} />     
                <NavLink to={`/item/${id}`} className="items__button">Ver más</NavLink> 
                </div>
            )
    }
  export default Item;