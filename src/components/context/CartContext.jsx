import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);

  const addProductCart = (product, quantity) => {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index === -1) {
      const newProduct = {
        ...product,
        quantity,
        subTotal: product.price * quantity,
      };
      setCart([...cart, newProduct]);
    } else {
      const cartCopy = [...cart];
      cartCopy[index].quantity += quantity;
      cartCopy[index].subTotal = cartCopy[index].price * cartCopy[index].quantity;

      setCart(cartCopy);
    }
  };

  const removeProduct = (id) => {
    const productsFilter = cart.filter((product) => product.id !== id);
    setCart(productsFilter);
  };

  const totalPrice = () => {
    return cart.reduce((acc, item) => acc + item.subTotal, 0);
  };

  const handleTotalProducts = () => {
    const items = cart.reduce((acum, item) => acum + item.quantity, 0);
    setTotalProducts(items);
  };

  useEffect(() => {
    handleTotalProducts();
    setTotal(totalPrice());
  }, [cart]);

  const contextValue = {
    cart,
    total,
    totalProducts,
    addProductCart,
    removeProduct,
    totalPrice,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};
