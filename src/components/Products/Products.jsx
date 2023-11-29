import { useEffect, useState } from "react";
import { collection, doc, getDocs, query, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [changes, setChanges] = useState(true);

  const descStock = async (product) => {
    const productRef = doc(db, "products", product.id);
    const newStock = product.stock - 1;
    await updateDoc(productRef, { stock: newStock });
    setChanges(!changes);
  }

  useEffect(() => {
    const myProducts = query(collection(db, "products"));
    getDocs(myProducts)
      .then((resp) => {
        const productsList = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log(productsList);
        setProducts(productsList);
      })
      .catch((error) => console.log(error));
  }, [changes]);
  return (
    <>
      <h1>Productos</h1>
      {products.map((product) => (
        <div className="border border-2 m-3 p-3" key={product.id}>
          <p>Nombre: {product.name}</p>
          <p>Precio: {product.price}</p>
          <p>Descripción: {product.description}</p>
          <p>Stock: {product.stock}</p>
          <button className="btn btn-primary" onClick={() => descStock(product)} >Comprar</button>
        </div>
      ))}
    </>
  );
};