import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from './DataContext'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = function(){

    const { listOfItems } = useContext(DataContext)

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
       },[listOfItems])
 
     return(
        <div className="container section">
        <h1 className="section__title">Productos</h1>
        <div  className="container flex flex-f-s flex-ai-c flex-fw-w itemsContainer">
        <ItemList items={item}/>
        </div>
        </div>
     );
     }

     export default ItemListContainer;


