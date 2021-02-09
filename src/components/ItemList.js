import React from 'react';
import Item from './Item';

const ItemList = ({items}) => {
  return(
  <>

      { items.map((item, i) =>{
        const image = require(`../img/${item.pictureUrl}`)
        return(
           <div key={i}>
             <Item title={item.title} desc={item.desc} id={item.id} image={image.default}/>
           </div>
        )

      })}
    </>
    ) 

}
    export default ItemList
