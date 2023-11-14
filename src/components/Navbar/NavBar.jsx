import React from 'react';
import styles from './nav.module.css';
import { Button } from '../Button/Button';
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.navcontainer}>
      <div className={styles.titulo}> Derportivix </div>
      <ul className={styles.categorias}>
        <li><NavLink to="/categoria1">Categoría 1</NavLink></li>
        <li><NavLink to="/categoria2">Categoría 2</NavLink></li>
        <li><NavLink to="/categoria3">Categoría 3</NavLink></li>
      </ul>
      <NavLink to="/NavBar">
        <Button text="Carrito"></Button>
      </NavLink>
      <NavLink to="/character">
        <Button text="Personajes"></Button>
      </NavLink>
      <NavLink to={"/category/calzados"}>
          <Button text='Calzados' >Calzados</Button>
        </NavLink>
        <NavLink to={"/category/ropa"}>
          <Button text='Ropa'>Ropa</Button>
        </NavLink>
    </nav>

  );
}

export default NavBar;
