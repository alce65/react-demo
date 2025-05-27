import { Link } from 'react-router';
import './products.css';

export const Products: React.FC = () => {
  return (
    <section className="products">
      <h2>Welcome to the Demo Project Products</h2>
      <p>
        This project demonstrates the use of TypeScript, React, Vite, and
        Vitest.
      </p>
      <p>
        <Link to="/product/1">View Product 1</Link>
      </p>
    </section>
  );
};

export default Products;
