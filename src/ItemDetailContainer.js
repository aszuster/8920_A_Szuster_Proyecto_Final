import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail'
import data from './data.json';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    
    const [ item, setItem ] = useState()
    const [ image, setImage ] = useState({})
    const { id } = useParams()
      

    useEffect(() => {
        const promesa = new Promise((resolve, reject)=>{
        setTimeout(function(){
            const i = data.find(product => product.id === id)
            resolve(i); 
        }, 2000);
        }
        )
        promesa.then(result => {
            setItem(result)
            const img= require(`./img/${result.pictureUrl}`)
            setImage(img)
        }) 
        promesa.catch(err => console.log("Algo salio mal")) 

    },  [id]);

        return(
            <div className="container">
            { item ?
            <ItemDetail
             id={item.id}
             title={item.title}     
             price={item.price}
             image={image.default}
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