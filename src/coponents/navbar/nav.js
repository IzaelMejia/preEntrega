//Cración del Nav 
import React from 'react'
import logo from '../../imagenes/logo.png';
import Cardwidget from "../cardwidget/cardwidget"

const  nav=()=>{
  return <div className='Navbar'>
    <nav className="navbar navbar-expand-lg colorNav">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> <img src={logo}></img> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        <a className="nav-link" href="#">Productos</a>
        <a className="nav-link" href="#">Nosotros</a>
        <a className="nav-link" href="#">Carrito</a>
        <a className="nav-link" href="#"><Cardwidget/></a>

      </div>
    </div>
  </div>
</nav>

  </div>
};

export default nav