import React, { useState } from 'react';
import { Count } from '../Count/Count';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemCount } from '../ItemCount/ItemCount';

export const Card = ({ name, description, stock, initial = 1, onAdd , image }) => {
  const [count, setCount] = useState(initial);
  const increment = () => {
    if (count < stock) {
      return setCount(count + 1);
    }
    setCount(count);
  };

  const decrement = () => {
    if (count === 0) {
      return setCount(0);
    }
    setCount(count - 1);
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
            <Count max={stock} />
          </div>
          <div className="col-4">
          <button className="btn btn-outline-primary mt-2" onClick={() => onAdd(count)}>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};
