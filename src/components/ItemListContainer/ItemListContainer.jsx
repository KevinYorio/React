import React from 'react';
import styles from "./item.module.css";

const ItemListContainer = ({ greeting }) => {
return (
    <div className={styles.itemcontainer}>
    <h2>{greeting}</h2>
    {"Hola Cliente"}
    </div>
);
}

export default ItemListContainer;
