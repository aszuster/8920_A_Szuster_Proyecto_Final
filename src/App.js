import React from "react"
import NavBar from './NavBar'
import ItemListContainer from './ItemListContainer'
import Contador from './Contador'
import "./dist/styles.css"


const App = function(){

  return(
    <div className="container">
    <NavBar/>
    <ItemListContainer/>
    <Contador/>
    <footer>
      <p>&copy; Copyright 2020</p>
    </footer>
    </div>
  )
}

export default App