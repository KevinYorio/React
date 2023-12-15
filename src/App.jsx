import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/Navbar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import ItemQuantitySelector from './components/ItemQuantitySelector/ItemQuantitySelector';
import { Item } from './components/Item/Item';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './components/context/CartContext';
import { Cart } from './components/Cart/Cart';
import { useState } from 'react';
import { Checkout } from './components/Checkout/Checkout';
import Home from './components/Home/Home'; 

function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
          <Route path='/' element={<Home />} />
  <Route path="/item/:id" element={<ItemDetailContainer />} />
  <Route path='/category/:category' element={<ItemListContainer />} />
  <Route path='/products' element={<ItemListContainer />} />
  <Route path='/cart' element={<Cart />} />
  <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

export default App;

