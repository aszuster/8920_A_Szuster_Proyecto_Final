import React, { useState, useEffect } from 'react';
import Item from './Item';
import data from './data.json';

const getPromise = (data) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      return res(data)
    }, 3000)
  })
}


const ItemList = () => {

    const [item,setItem] = useState([]);

    useEffect(() => {

      getPromise(data).then(result => {
          setItem(result);
      });


    },[])

    return(
      item.map((items, i) => {
          const images= require(`./img/${items.pictureUrl}`)

      return (

          <div key={i} className="items__Container flex-jc-sb">
          <Item title={items.title} image={images.default} desc={items.desc} id={items.id}/>
          </div>

      )
    })
    )
    }

    
    export default ItemList
