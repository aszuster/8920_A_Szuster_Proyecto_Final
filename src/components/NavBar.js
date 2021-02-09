import React from "react"
import logo from '../img/katsudon_logo.svg'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'


const NavBar = function(){
  return(
    <nav className="navBar container flex flex-jc-sb flex-ai-c">
      <div className="navBar__brand flex flex-jc-sb flex-ai-c">
      <NavLink to={`/`}><img src={logo} className="navBar__logo" alt="logo" /></NavLink>
      <p>Katsudon</p>
      </div>
      <div className="navBar__links flex flex-jc-sb flex-ai-c">
      <NavLink className="link" to={`/`}><p>Home</p></NavLink>
        <span className="link" href="#"><p>Productos</p></span>
        <span className="link" href="#"><p>Contacto</p></span>
      </div>
      <CartWidget/>
    </nav>
  )
}

export default NavBar;