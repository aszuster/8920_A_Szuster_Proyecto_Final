import React from "react"
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import "./dist/styles.css"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './components/CartContext';
import DataProvider from './components/DataContext';
import Cart from './components/Cart'
import Hero from './components/Hero'


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
    <Hero/>
    <ItemListContainer/>
    </Route>
          <Route exact path="/category/:id">
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