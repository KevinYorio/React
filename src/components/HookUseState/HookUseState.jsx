import { useState } from "react";
import { Button } from "../Button/Button";

export const HookUseState = () => {
  const [count, setCount] = useState(0);

  const handleSum = () => {
    setCount(count + 1);
  };

  const handleRes = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  console.log("cambio de estado");

  return (
    <>
      <div>Count: {count}</div>
      <Button functionClick={handleSum}>Sumar</Button>
      <Button functionClick={handleRes}>Restar</Button>
      <Button functionClick={handleReset}>Resetear</Button>
    </>
  );
};
