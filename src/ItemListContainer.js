import React, { useState, useEffect, useContext } from 'react';
import Item from './Item';
import { DataContext } from './DataContext'
import ItemList from './ItemList';
import data from './data.json';
import { useParams } from 'react-router-dom';


const ItemListContainer = function(){

    const { listOfItems } = useContext(DataContext)
    console.log( listOfItems);

    const [item,setItem] = useState([]);
    const { id } = useParams()
    useEffect(() => {
     
     if(id){
       const category = listOfItems.filter(product => product.categoryId ===id)
       setItem(category)
     }
     else{
       setItem(listOfItems)
     } 
        console.log("item list", item)
       },[listOfItems])
 
 
 
 // const { items } = useContext(DataContext)
 // console.log(items);
 // const getPromise = (items) => {
 //   return new Promise((res, rej) => {
 //     setTimeout(() => {
 //       return res(items)
 //     }, 3000)
 //   })
 // }
 
 //     const [item,setItem] = useState([]);
 
 //     useEffect(() => {
 
 //       getPromise(items).then(result => {
 //           setItem(result);
 //       });
 
 
 //     },[])
 
 
     return(
         <div className="container">
        <h1>Productos</h1>
        <div  className="container flex flex-f-s flex-ai-c itemsContainer">
        <ItemList items={item}/>
        </div>
        </div>
 
        //itemlist
    //    item.map((items, i) => {
    //      const image= require(`./img/${items.pictureUrl}`)
 
    //      return (
    //        <div key={i} className="items__Container flex-jc-sb">
    //          <Item title={items.title} desc={items.desc} id={items.id} image={image.default}/>
    //        </div>
    // )
    //   })
 
 
 
 
 
     //   items.map((item, i) => {
     //       const image= require(`./img/${item.pictureUrl}`)
 
     //  
 
     //       <div key={i} className="items__Container flex-jc-sb">
     //       <Item title={item.title} image={image.default} desc={item.desc} id={item.id}/>
     //       </div>
 
     //   )
     // })
     );
     }

     export default ItemListContainer;


