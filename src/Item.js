import React from "react"
import { NavLink } from 'react-router-dom'


const Item = ({id, title, image}) => {

            return(
                <>
                <h1>{title}</h1>
                <img src={image} className="items__img" />      
                <NavLink to={`/item/${id}`} className="items__button">Ver más</NavLink> 
                </>
            )
    }
  export default Item;