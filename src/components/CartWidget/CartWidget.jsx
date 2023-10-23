import React from 'react';

const CartWidget = ({ itemCount }) => {
return (
    <div>
    <img src='/Carroimagen.png'></img>
    <span>{itemCount}</span>
    </div>
);
}

export default CartWidget;
