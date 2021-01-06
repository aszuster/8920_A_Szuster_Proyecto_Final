import React from "react"
import NavBar from './NavBar'
import ItemListContainer from './ItemListContainer'
import ItemCount from './ItemCount'
import "./dist/styles.css"
import ItemList from './ItemList'


const App = function(){

  return(
    <div className="container">
    <NavBar/>
    <ItemListContainer/>
    <ItemList/>
    <ItemCount/>
    <footer>
      <p>&copy; Copyright 2020</p>
    </footer>
    </div>
  )
}

export default App