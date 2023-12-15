import React from 'react';
import { CartWidget } from '../CartWidget/CartWidget';
import styles from "./nav.module.css";
import { Link, useParams } from 'react-router-dom';

export const NavBar = () => {
  const { category } = useParams();
    const whatsappNumber = '123456789';

  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"> Deportivix </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link" to="/products">Comprar</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/category/doublebass"> Double Basses </Link></li>
                <li><Link className="dropdown-item" to="/category/cars"> Old Cars </Link></li>
                <li><Link className="dropdown-item" to="/category/shirts"> Footbal Shirts </Link></li>
              </ul>
            </li>
            <li className="nav-item">
      <Link className="nav-link" to={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=¡Hola! Estoy interesado en ponerme en contacto contigo.`} target="_blank" rel="noopener noreferrer"> Contacto</Link>
          </li>
          </ul>
          <div className="nav-item">
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-danger" type="submit">Search</button>
            </form>
          </div>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};
