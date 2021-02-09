import React, { useState, useEffect, useContext } from 'react';
import ItemDetail from './ItemDetail'
import { DataContext } from './DataContext'
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const { listOfItems } = useContext(DataContext)
    
    const [ item, setItem ] = useState()
    const [ image, setImage ] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const i = listOfItems.filter(product => product.id === id)[0]
            setItem(i)
            const img= require(`../img/${i.pictureUrl}`)
            setImage(img)

    },  [id]);

        return(
            <div className="container">
            { item ?
            <ItemDetail
            image={image?.default}
             id={item.id}
             title={item.title}     
             price={item.price}
             desc={item.desc}
             stock={item.stock}
             item={item}
             />
             :
             <h2>Loading</h2>}
        </div>

        )

    }

export default ItemDetailContainer;