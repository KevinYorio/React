import React, { useContext } from "react";
import { FirebaseContext } from "../context/FirebaseContext";
import { CartContext } from "../context/CartContext";
import { Form } from "../Form/Form";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "../Button/Button"


export const Cart = () => {
  const { cart, total, removeProduct } = useContext(CartContext);
  const { addOrderDB, discountStock } = useContext(FirebaseContext);

  const handleCheckout = () => {
    cart.forEach((product) => {
      discountStock(product, product.quantity); 
    });

    const order = {
      products: cart,
      total: total,
    };

    addOrderDB(order);

  };

  return (
    <Box marginTop={4}>
      <Typography fontSize={25}>Carrito</Typography>
      <Box display="flex" flexDirection="column">
        {cart.map((item) => (
          <Box
            key={item.id}
            margin={1}
            border={1}
            borderColor={"gray"}
            borderRadius={2}
            padding={3}
            width={380}
            boxShadow={3}
          >
            <Typography>Nombre: {item.name} </Typography>
            <Typography>Precio Unitario: {item.price} </Typography>
            <Typography>Cantidad: {item.quantity} </Typography>
            <Typography>Subtotal: {item.subTotal} </Typography>
            <Button
              variant="contained"
              color="error"
              onClick={() => removeProduct(item.id)}
            >
              Eliminar
            </Button>
          </Box>
        ))}
      </Box>
      <Typography>Total de la compra ${total}</Typography>
      <Button variant="contained" color="primary" onClick={handleCheckout}>
        Checkout
      </Button>
      <Form />
    </Box>
  );
};
