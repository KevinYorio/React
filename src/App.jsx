import { NavBar, Promises, CharacterListContainer, CharacterDetailContainer, ItemListContainer, ItemDetailContainer, Home } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Calzados, Cart } from "./components";
import { CartContextProvider } from "../src/components/context/CartContext";
import { FirebaseContextProvider } from "../src/components/context/FirebaseContext"; 

export const App = () => {
  return (
    <BrowserRouter>
      <FirebaseContextProvider> 
        <CartContextProvider> 
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
