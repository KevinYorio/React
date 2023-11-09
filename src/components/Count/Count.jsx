import { useState } from "react"
import { Button } from "../Button/Button";

export const Count = ({initial = 0, max }) => {
  const [count, setcount] = useState(initial);
  
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

    return (
    <>
    <Button text="+" variant={"btn-secondary"} functionClick={increment} />
    <strong> {count} </strong>
    <Button text="-" variant={"btn-secondary"} functionClick={decrement} />
    </>
  )
}
