import React from "react"
import NavBar from './NavBar'
import ItemListContainer from './ItemListContainer'
import ItemCount from './ItemCount'
import "./dist/styles.css"


const App = function(){

  return(
    <div className="container">
    <NavBar/>
    <ItemListContainer/>
    <ItemCount/>
    <footer>
      <p>&copy; Copyright 2020</p>
    </footer>
    </div>
  )
}

export default App