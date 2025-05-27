import { Routes, Route } from 'react-router';
import About from '../../features/about/about';

import Products from '../../features/products/products';
import { Layout } from '../components/layout/layout.outlet';
import { ProductDetail } from '../../features/products/details/product-detail';
import React from 'react';

const Home = React.lazy(() => import('../../features/home/home'));

export const AppRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path="/home"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Home />
              </React.Suspense>
            }
          />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<>Not Found</>} />
        </Route>
      </Routes>
    </>
  );
};
