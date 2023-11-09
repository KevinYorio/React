import { HookUseState } from "./components/HookUseState/HookUseState";
import { Padre } from "./components/Padre/Padre";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Promises, Maps, CharacterListContainer } from "./components"

export const App = () => {
  return (
    <>
        <NavBar /> 
        <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
        <h2>Componente app</h2>    
        <Padre />
        <hr />
        <Promises />
        <Maps /> 
        <h1>App rick and morty</h1>
        <CharacterListContainer />
    </>
  );
};
