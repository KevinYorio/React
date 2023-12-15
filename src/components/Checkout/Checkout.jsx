import React from 'react';
import { useForm } from 'react-hook-form';
import { useContext , useState} from 'react';
import { CartContext } from '../context/CartContext';
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';


export const Checkout = () => {
  const { cart, emptyCart } = useContext(CartContext);
  const { register, handleSubmit } = useForm();
  const [orderDetails, setOrderDetails] = useState(null);
  const [emailMismatch, setEmailMismatch] = useState(false); 


  const totalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const updateStock = async () => {

    for (const product of cart) {
      const productDocRef = doc(db, "Products", product.id);

      try {
        const productDoc = await getDoc(productDocRef);
        if (productDoc.exists()) {
          const currentStock = productDoc.data().stock;
          await updateDoc(productDocRef, {
            stock: currentStock - product.quantity,
          });
        }
      } catch (error) {
        console.error('Error updating stock for product ID: ', product.id, error);
        
      }
    }
  };

  const buyCart = async (data) => {
    const { email, email2 } = data;

    if (email === email2) {
      setEmailMismatch(false); 

      const order = {
        client: data,
        products: cart,
        total: totalPrice(),
      };

  
      const orderRef = collection(db, 'order');
  
      try {
        const doc = await addDoc(orderRef, order);
        console.log('Document written with ID: ', doc.id);
        updateStock();
        emptyCart();
        setOrderDetails({
          orderId: doc.id,
          client: data,
          products: cart,
          total: totalPrice(),
        });
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    }  else {
      setEmailMismatch(true); 
    }
  };
  
  return (
    <div className='container'>
      <h2>Checkout</h2>
      {orderDetails ? (
        <>
          <h3>Order Details</h3>
          <p>Order ID: {orderDetails.orderId}</p>
          <p>Name: {orderDetails.client.name}</p>
          <p>Email: {orderDetails.client.email}</p>
          <p>Telephone: {orderDetails.client.telephone}</p>
          <p>Address: {orderDetails.client.address}</p>
          <p>Total: ${orderDetails.total}</p>
          <h4>Products:</h4>
          <ul>
            {orderDetails.products.map((product) => (
              <li key={product.id}>
                {product.name} - Quantity: {product.quantity}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <form onSubmit={handleSubmit(buyCart)}>
          <input type='text' placeholder='Nombre' {...register('name')} />
          <input type='email' placeholder='Email' {...register('email')} />
          <input type='email' placeholder='Repetir Email' {...register('email2')} />
          {emailMismatch && <p style={{ color: 'red' }}>El email esta incorrecto, intente de nuevo!</p>}
          <input type='number' placeholder='Telefono' {...register('telephone')} />
          <input type='text' placeholder='Domicilio' {...register('address')} />
          <button type='submit' className='btn btn-success'>
            Buy Cart
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;