import styles from "./button.module.css";

export const Button = ({ text = "boton", variant = "btn-primary", variantCss }) => {
  const variantCssStyle = `${styles[variant]} ${variantCss ? styles[variantCss] : ''}`;

  return (
    <button className={variantCssStyle}>{text}</button>
  );
};
