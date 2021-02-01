import React, { useState, useEffect, useContext } from 'react';
import Item from './Item';
import { DataContext } from './DataContext'
import data from './data.json';
import { useParams } from 'react-router-dom';





const ItemList = ({items}) => {
  return(
  <>

    {/* { items.map( item => <Item key={product.id} id={product.id} 
      name={product.name} image={product.image} />)
      } */}

      { items.map((item, i) =>{
        const image = require(`./img/${item.pictureUrl}`)
        return(
           <div key={i} className="items__Container flex-jc-sb">
             <Item title={item.title} desc={item.desc} id={item.id} image={image.default}/>
           </div>
        )

      })}
        {/* //itemlist
    //    item.map((items, i) => {
    //      const image= require(`./img/${items.pictureUrl}`)
 
    //      return (
    //        <div key={i} className="items__Container flex-jc-sb">
    //          <Item title={items.title} desc={items.desc} id={items.id} image={image.default}/>
    //        </div>
    // )
    //   }) */}
    </>
    ) 

}
    export default ItemList
