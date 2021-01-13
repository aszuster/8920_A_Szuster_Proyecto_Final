import React from "react"
import logo from './katsudon_logo.svg'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'


const NavBar = function(){
  return(
    <nav className="navBar container container--padd flex flex-jc-sb flex-ai-c">
      <div className="navBar__brand flex flex-jc-sb flex-ai-c">
      <NavLink to={`/`}><img src={logo} className="navBar__logo" alt="logo" /></NavLink>
      <p>Katsudon</p>
      </div>
      <div className="navBar__links flex flex-jc-sb flex-ai-c">
      <NavLink to={`/`}><p>Home</p></NavLink>
        <p>Productos</p>
        <p>Contacto</p>
      </div>
      <CartWidget/>
    </nav>
  )
}

export default NavBar;