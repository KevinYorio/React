import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import styles from './nav.module.css';

const NavBar = () => {
return (
    <nav className={styles.navcontainer}>
    <div className={styles.titulo}> Derportivix </div>
    <ul className={styles.categorias}>
        <li><a href="#">Categoría 1</a></li>
        <li><a href="#">Categoría 2</a></li>
        <li><a href="#">Categoría 3</a></li>
    </ul>
    <CartWidget itemCount={3} />
    </nav>
);
}

export default NavBar;
