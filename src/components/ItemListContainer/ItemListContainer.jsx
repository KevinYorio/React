import React from 'react';
import styles from "./Item.module.css";

const ItemListContainer = ({ greeting }) => {
return (
    <div className={styles.Itemcontainer}>
    <h2>{greeting}</h2>
    {"Hola Cliente"}
    </div>
);
}

export default ItemListContainer;
