import { useState } from "react";
import { Button } from "../Button/Button";

export const FormInput = () => {
const [input, setinput] = useState("")

const handleInputChange = (e) => {
    e.preventDefault();
    setinput(e.target.value)
    console.log(e.target.value)
}
    return (
    <>
    <form className="d-flex col">
        <input 
        type="text" 
        className="form-control border border-2 border-black"
        placeholder="Ingrese su texto aqui"
        value={input}
        onChange={(e) => handleInputChange( e ) }
        />
        <Button text="Agregar" type={"submit"} />
    </form>
    </>
    )
}
