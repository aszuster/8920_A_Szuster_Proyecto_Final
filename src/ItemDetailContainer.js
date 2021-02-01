import React, { useState, useEffect, useContext } from 'react';
import ItemDetail from './ItemDetail'
import data from './data.json';
import { DataContext } from './DataContext'
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const { listOfItems } = useContext(DataContext)
    
    const [ item, setItem ] = useState()
    const [ image, setImage ] = useState({})
    const { id } = useParams()

    console.log(listOfItems)

    useEffect(() => {
        // const promesa = new Promise((resolve, reject)=>{
        // setTimeout(function(){
        const i = listOfItems.filter(product => product.id === id)[0]
        //     resolve(i); 
        // }, 2000);
        // }
        // )
        // promesa.then(result => {
            setItem(i)
            const img= require(`./img/${i.pictureUrl}`)
            setImage(img)
        // }) 
        // promesa.catch(err => console.log("Algo salio mal")) 
        console.log(i.pictureUrl)

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