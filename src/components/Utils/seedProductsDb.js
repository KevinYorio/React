import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

const products = [
    { name: "Remera", img: "../remera.jpg", price: 100, category: "ropa", description: "Una Remera", stock: 10 },
    { name: "Camisa", img: "../camisa.jpg", price: 100, category: "ropa", description: "Una Camisa", stock: 10 },
    { name: "Pantalón", img: "../pantalon.jpeg", price: 100, category: "ropa", description: "Una Pantalón", stock: 10 },
];

export const seedProductsDb = () => {
  products.forEach((product) => {
    addDoc(collection(db, "products"), product);
  });
};