import React, { useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';

export const Card = ({ name, description, stock, initial = 1, image }) => {
  const [count, setCount] = useState(initial);

  const handleAddToCart = (count) => {
    console.log(`Agregar al carrito: ${count} productos`);
    // Aquí puedes llamar a la función onAdd y pasarle la cantidad seleccionada
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <img src={image} alt="zapas" className="card-img-top" style={{ width: '100px' }} />
        <hr />
        <div className="row">
          <div className="col-8">
            {/* Suponiendo que Count es simplemente para mostrar la cantidad seleccionada */}
            <p>Cantidad seleccionada: {count}</p>
          </div>
          <div className="col-4">
            <ItemCount stock={stock} initial={initial} onAdd={handleAddToCart} />
          </div>
        </div>
      </div>
    </div>
  );
};
