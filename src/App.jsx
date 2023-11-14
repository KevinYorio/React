import {NavBar, CartWidget, Count, CustomHook, Promises, Maps, CharacterListContainer, CharacterDetailContainer, ItemListContainer, ItemDetailContainer} from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
    <BrowserRouter >
      <NavBar />
      <Routes>
          <Route path="/character" element={<CharacterListContainer />} />
          <Route path="/category/calzados" element={<ItemListContainer />} />
          <Route path="/character/:id" element={<CharacterDetailContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
    </BrowserRouter>
        <Promises />
        <Maps /> 
    </>
  );
};
