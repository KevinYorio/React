import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.Home}>
      <header>
        <h1>Bienvenido a nuestra tienda de ropa deportiva</h1>
        <p>Encuentra la mejor ropa para tus entrenamientos y actividades deportivas</p>
      </header>

      <section>
        <h2>Destacados</h2>
        <div className="featured-products">
          {/* Productos destacados */}
          <div className="product">
            <img src="../../../public/camisa.jpg" alt="Producto 1" />
            <h3>Camiseta Deportiva</h3>
            <p>Precio: $29.99</p>
          </div>

          <div className="product">
            <img src="../../../public/pantalon.jpeg" alt="Producto 2" />
            <h3>Pantalones Deportivos</h3>
            <p>Precio: $39.99</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Ofertas Especiales</h2>
        <div className="special-offers">
          {/* Ofertas especiales */}
          <div className="offer">
            <img src="../../../public/remera.jpg" alt="Oferta 1" />
            <h3>¡Descuento del 20% en toda la ropa deportiva!</h3>
            <p>Usa el código: OFERTADEPORTIVA20</p>
          </div>

          <div className="offer">
            <img src="../../../public/Curry3.jpeg" alt="Oferta 2" />
            <h3>Compra un par de zapatos deportivos y llévate una botella de agua gratis</h3>
          </div>
        </div>
      </section>

      <section>
        <h2>Explora por Categorías</h2>
        <ul className="categories-list">
          <li><Link to="/categories/ropa">Ropa Deportiva</Link></li>
          <li><Link to="/categories/zapatos">Zapatos Deportivos</Link></li>
          <li><Link to="/categories/accesorios">Accesorios</Link></li>
        </ul>
      </section>

      <section>
        <h2>Nuestros Clientes Opinan</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"La mejor tienda para encontrar ropa cómoda y de calidad para mis entrenamientos. ¡Altamente recomendada!"</p>
            <p>- Cliente Feliz</p>
          </div>

          <div className="testimonial">
            <p>"Amo la variedad de productos y la rapidez en el envío. Siempre encuentro lo que necesito aquí."</p>
            <p>- Cliente Satisfecho</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
