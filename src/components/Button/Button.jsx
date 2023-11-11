import styles from "./Button.module.css";

export const Button = ({ text = "Boton", variant = "btn-primary", functionClick, color, type, bClass }) => {
  const textColor = styles[color]; 
  return (
    <button type={type} className={`btn ${variant} m-2 ${styles[color]} ${bClass}`} onClick={functionClick} > {text} </button>
  )
}
