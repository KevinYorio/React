import { useEffect, useState } from "react";
import { CharacterList } from "../CharacterList/CharacterList";
import { Button } from "../Button/Button"

export const CharacterListContainer = () => {
    const [characters, setCharacters] = useState([])
    const [page, setpage] = useState(1)
    const getCharacters = async () =>{ 
    const resp = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    const data = await resp.json();
    setCharacters(data.results);
    console.log(data.results);
}

const handleNexPage = () => {
    setPage(page + 1);
}

const handlePrevPage = () => {
    setPage(page + 1);
}


useEffect(() => {
    getCharacters()
}, [])

return (
    <>
    
    <CharacterList characters={characters} />
    <Button text="atras" functionClick={handlePrevPage}/>
    <Button text="siguiente" functionClick={handleNexPage} />

    </>
)
}
