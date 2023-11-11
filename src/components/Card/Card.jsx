import { Count } from "../Count/Count"
import { Button } from "../Button/Button";


export const Card = ({name, description, stock}) => {
  return (
    <div className="border border-1 border-dark rounded-3 col-5 p-3 m-2">
            <h5> {name} </h5>
            <p> {description} </p>
            <div className="col-4"></div>
            <Count max={stock}/>
            <Button text="Agregar al carrito" variant={"btn-secondary"} />
    </div>
  )
}
