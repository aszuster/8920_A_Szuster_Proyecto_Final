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
          console.log(result);
          setItem(result);
      });


    },[])

    return (
        <section>
          <h1>Listado de Productos</h1>

          <Item item={item}/>
          {/* {items.length > 0 ? (
            items.map(items => {
              return (
                <div>
                  <Item title={items.title} pictureUrl={items.pictureUrl} desc={items.desc}/>
                </div>
              );
            })
          ) : (
            <p>No hay productos</p>
          )} */}
        </section>
      )}

    
    export default ItemList
