import React from "react"
import NavBar from './NavBar'
import ItemListContainer from './ItemListContainer'
import "./dist/styles.css"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer';


const App = function(){

  return(
    <div>
    <BrowserRouter>
    <header className="header">
    <NavBar/>
    </header>
    <Switch>
          <Route exact path="/">
    <ItemListContainer/>
    </Route>
    <Route exact path ="/item/:id">
      <ItemDetailContainer/>
    </Route>
    <footer>
      <p>&copy; Copyright 2020</p>
    </footer>
    </Switch>
    </BrowserRouter>
    </div>
  )
}

export default App