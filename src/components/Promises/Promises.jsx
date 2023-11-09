import { useState } from "react";

export const Promises = () => {
    const [response, setResponse] = useState("");

    const task = new Promise ( (resolver, reject) =>{
        const condition = false;

        if (condition){
            resolver ("Tarea cumplida");
        } else {
            reject("Tarea rechazada");
        }
    });

//    task
//        .then ((resp) => setResponse(resp)) //si la promesa se cumple
//        .catch((error) => setResponse(error)) //en caso que no se cumple

//forma moderna de obtener info de las promesas

const resolvePromise = async () => {
    try{
    
        const resp = await task;
        console.log(resp);
        setResponse(resp);

    } catch (error){
        setResponse(error + " Entro en el catch")
    }
}

resolvePromise();

return (
    <>
    <h1>Promises</h1>

    <h4>Respuesta de nuestra promesa: {response}</h4>
    </>
);
};
