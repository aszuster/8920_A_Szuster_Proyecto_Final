import React, { useState, useEffect, useContext } from "react"
import ItemList from './ItemList'
import {DataContext} from './DataContext'


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