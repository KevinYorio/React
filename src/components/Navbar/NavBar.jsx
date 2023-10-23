import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
return (
    <nav>
    <div>Mi tienda</div>
    <ul>
        <li><a href="#">Categoría 1</a></li>
        <li><a href="#">Categoría 2</a></li>
        <li><a href="#">Categoría 3</a></li>
    </ul>
    <CartWidget itemCount={3} />
    </nav>
);
}

export default NavBar;
