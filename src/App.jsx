import { Count, CustomHook, HookUseState } from "./components"; 
import { Padre } from "./components";
import {NavBar} from "./components";
import {ItemListContainer} from "./components";
import { Promises, Maps, CharacterListContainer, CharacterDetailContainer, TaskListContainer } from "./components"

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
        <CharacterDetailContainer />
        <h1>Clase de Custom Hook</h1>
        <Count />
        <CustomHook />
        <h1>ToDoApp</h1>
        <TaskListContainer />
    </>
  );
};
