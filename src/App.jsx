import styles from "./app.module.css"

export const App = () => {
  let name = "Kevin";
  return (
    <div className={`${styles.namecolor} ${styles.fontName}`} >Nombre: {name}</div>
  )
}
