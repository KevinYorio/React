import React from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { db } from '../../config/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import {ItemDetail} from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const { cart, setCart } = useContext(CartContext);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  useEffect(() => {
    const fetchItem = async () => {
      const docRef = doc(db, 'products', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setItem({ ...docSnap.data(), id: docSnap.id });
      } else {
        console.error('Item not found');
      }
    };

    fetchItem();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ItemDetail item={item} selectedQuantity={selectedQuantity} setSelectedQuantity={setSelectedQuantity} setCart={setCart} />
    </div>
  );
};

export default ItemDetailContainer;