import React from "react"


const Item = ({title, pictureUrl, desc}) => {


    return(
        <>
            <h1>{title}</h1>
            <img src={pictureUrl} className="items__img" alt="Juguete Pelota" />
            <p>{desc}</p>
        </>
        )

    }
  export default Item;