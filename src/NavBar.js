import React from "react"
import logo from './katsudon_logo.svg'


const NavBar = function(){
  return(
    <nav className="navBar container container--padd flex flex-jc-sb flex-ai-c">
      <div className="navBar__brand flex flex-jc-sb flex-ai-c">
      <img src={logo} className="navBar__logo" alt="logo" />
      <p>Katsudon</p>
      </div>
      <div className="navBar__links flex flex-jc-sb flex-ai-c">
        <p>Home</p>
        <p>Productos</p>
        <p>Contacto</p>
      </div>
    </nav>
  )
}

export default NavBar;