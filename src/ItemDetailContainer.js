import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail'
import data from './data.json';
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    
    const [ item, setItem ] = useState()
    //hay que declararle algo a los useState porque si no es mala práctica, el valor inicial
    const [ image, setImage ] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve, reject)=>{
        setTimeout(function(){
            const i = data.find(product => product.id == id)
            resolve(i); 
        }, 2000);
        }
        )
        promesa.then(result => {
            setItem(result)
            //imagen
            const img= require(`./img/${result.pictureUrl}`)
            setImage(img)
        }) 
        promesa.catch(err => console.log("Algo salio mal")) 

    },  [id]);

        return(
            <div className="itemDetailContainer">
            { item ?
            <ItemDetail
             id={item.id}
             title={item.title}     
             price={item.price}
             image={image.default}
             desc={item.desc}
             stock={item.stock}
             />
             :
             <h2>Loading</h2>}
        </div>

        )

    }

export default ItemDetailContainer;