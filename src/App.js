import React, { useState, useEffect } from "react"
import NavBar from './NavBar'
import ItemListContainer from './ItemListContainer'
import "./dist/styles.css"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer';
import CartProvider from './CartContext';
import DataProvider from './DataContext';
import Cart from './Cart'


const App = function(){

  return(

    <div>
      <DataProvider>
      <CartProvider>
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
    <Route exact path="/cart">
            <Cart />
    </Route>
    </Switch>
    </BrowserRouter>
    </CartProvider>
    </DataProvider>
    </div>
  )
}

export default App