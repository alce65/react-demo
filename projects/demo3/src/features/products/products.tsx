import { Link, useLoaderData } from 'react-router';
import './products.css';
import type { Product } from './types/product';
import { use, useEffect, useState } from 'react';

import { AppContext } from '@context/context';
import { useDispatch } from 'react-redux';
import {actions} from '@products/redux/cart.slice';

export const Products: React.FC = () => {
  const loadedProducts = useLoaderData<Product[]>();

  const [products, setProducts ] = useState<Product[]>(loadedProducts || []);
  const { productsRepo: repo } = use(AppContext);
  const dispatch = useDispatch()


  const handeClick = (product: Product) => {
    console.log('Product added to cart:', product);
    dispatch(actions.addProduct(product));
    
  };

  useEffect(() => {
    if (products.length > 0) return
    console.log(('Products loaded from useEffect'));
    repo
      .getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [repo, products.length]);

  return (
    <section className="products">
      <h2>Welcome to the Demo Project Products</h2>
      <ul className="products-list">
        {products.map((item) => (
          <li className="product-item" key={item.id}>
            <Link to={'/product/' + item.id}>{item.name}</Link>
            <button onClick={() => handeClick(item)}>Add to cart</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Products;
