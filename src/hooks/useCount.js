import { useState } from "react";


export const useCount = (initial = 0, max) => { 
    const [count,setcount] = useState(initial);

    const increment = () => {
        if(count === max){
            return setcount(count)
        }
        setcount(count +1);
        }
    
        const decrement = () => {
        if(count === 0) {
            return setcount(0);
        }
        setcount(count -1);
        }

        const reset = () =>{
            setcount(initial);
        }

        return{
            count, 
            increment,
            decrement,
            reset
        }
}