import { HookUseState } from "./components/HookUseState/HookUseState";
import { Padre } from "./components/padre/padre";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


export const App = () => {
  return (
    <>
        <NavBar />
        <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
        <h2>Componente app</h2>    
        <Padre />
        <hr />
        <HookUseState />
    </>
  );
};
