import { NavBar, Promises, CharacterListContainer, CharacterDetailContainer, ItemListContainer, ItemDetailContainer, Home } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Calzados, Cart } from "./components";
import { CartContextProvider } from "../src/components/context/CartContext";
import { FirebaseContextProvider } from "../src/components/context/FirebaseContext"; // Asegúrate de importar FirebaseContextProvider

export const App = () => {
  return (
    <BrowserRouter>
      <FirebaseContextProvider> {/* Envuelve la aplicación con FirebaseContextProvider */}
        <CartContextProvider> {/* Envuelve la aplicación con CartContextProvider */}
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/character" element={<CharacterListContainer />} />
              <Route path="/Calzados" element={<Calzados />} />
              <Route path="/character/:id" element={<CharacterDetailContainer />} />
              <Route path="/category/:category" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
            <Promises />
          </>
        </CartContextProvider>
      </FirebaseContextProvider>
    </BrowserRouter>
  );
};
