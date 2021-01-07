import React from "react"


const Item = ({item}) => {


    return(
        item.map((items, i) => {
            const images= require(`./img/${items.pictureUrl}`)
            console.log(images);
            return(
                <div key={i}>
                <h1>{items.title}</h1>
                <img src={images.default} className="items__img" alt="Juguete Pelota" />      
                <p>{items.desc}</p>
                </div>
            )
        })
    )
    }
  export default Item;