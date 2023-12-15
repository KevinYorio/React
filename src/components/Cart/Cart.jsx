import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export const Cart = () => {
  const { cart, emptyCart, removeProduct, totalPrice } = useContext(CartContext);

  const handleEmptyCart = () => {
    emptyCart();
  };

  const handleRemoveProduct = (productId) => {
    removeProduct(productId);
  };
  
  return (
    <div className='container px-3 py-2'>
      <h2> Tu carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito esta vacio</p>
      ) : (
        <div className='container card'>
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                <h3>{product.brand}</h3>
                <p>{product.name}</p>
                <p>Price: ${product.price}</p>
                <p> Units: {product.quantity}</p>
                <p> subtotal: ${product.price * product.quantity}</p>
                <button className="btn btn-danger m-2" onClick={() => handleRemoveProduct(product.id)}> Borrar producto</button>
              </li>
            ))}
          </ul>
          <button className='btn btn-danger m-2' onClick={handleEmptyCart}> Carrito vacio</button>
          <p>Total: $ {totalPrice()}</p>
        </div>
      )}
      <Link to="/checkout" className='btn btn-success m-2'> Finalizar compra</Link>
    </div>
  );
};
