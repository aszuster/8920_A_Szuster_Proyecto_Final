import React from "react"
import ItemList from './ItemList'

const ItemListContainer = function(){
    return(
        <div className="container">
        <h1>Productos</h1>
        <div className="container flex flex-f-s flex-ai-c itemsContainer">
        <ItemList/>
        </div>
        </div>
    )
  }
  
  export default ItemListContainer;