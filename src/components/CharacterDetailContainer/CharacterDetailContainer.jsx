import { useEffect, useState } from "react"


export const CharacterDetailContainer = () => {

    const [character, setCharacter] = useState(null)
    
    const getCharacter = async (id) =>{ 
        const resp = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await resp.json();
        setCharacter(data);
        console.log(data);
        };

        useEffect(() => {
        getCharacter(30)
        }, []);
        

    return (
    <div className="container d-flex justify-content-center mt-5">

    </div>
    )
} 