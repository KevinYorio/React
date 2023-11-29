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
    // Aquí puedes agregar la lógica de checkout, por ejemplo, agregar la orden a Firebase y descontar el stock.
    // Puedes usar las funciones de FirebaseContext para esto.
    // Asegúrate de adaptar la lógica según tus necesidades específicas.

    // Ejemplo:
    cart.forEach((product) => {
      discountStock(product, product.quantity); // Descuenta el stock de los productos comprados
    });

    const order = {
      products: cart,
      total: total,
      // Otros campos necesarios para tu orden
    };

    addOrderDB(order); // Agrega la orden a Firebase

    // Puedes agregar más lógica aquí, como redireccionar a una página de confirmación, limpiar el carrito, etc.
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
