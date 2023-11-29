import React from 'react';
import styles from './nav.module.css';
import { Button } from '../Button/Button';
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.navcontainer}>
      <div className={styles.titulo}> Derportivix </div>
      <NavLink to="/">
        <Button text="Home"></Button>
      </NavLink>
      <NavLink to="/Cart">
        <Button text="Carrito"></Button>
      </NavLink>
      <NavLink to="/character">
        <Button text="Personajes"></Button>
      </NavLink>
      <NavLink to="/Calzados">
          <Button text='Calzados' >Calzados</Button>
        </NavLink>
        <NavLink to={"/category/ropa"}>
          <Button text='Ropa'>Ropa</Button>
        </NavLink>
    </nav>

  );
}

export default NavBar;
