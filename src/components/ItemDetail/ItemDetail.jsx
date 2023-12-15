import React, { useContext, useState } from 'react';
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector';
import { CartContext } from '../context/CartContext';

export const ItemDetail = ({ item }) => {
  const { addProductCart } = useContext(CartContext);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleAddToCart = () => {
    addProductCart(item, selectedQuantity);
  };

  return (
    <div className="pt-3 pb-3 border border-gray border-2">
      <h1>{item.name}</h1>
      <img src={item.img} alt={item.name} />
      <p>Price: ${item.price}</p>
      <p>{item.description}</p>
      <p>Stock: {item.stock}</p>
      <p>Category: {item.category}</p>
      <div className="d-flex justify-content-center">
        <ItemQuantitySelector max={item.stock} quantity={selectedQuantity} setQuantity={setSelectedQuantity} />
      </div>
      <button className="btn btn-primary" onClick={handleAddToCart}>
        Añadir al carrito
      </button>
    </div>
  );
};
