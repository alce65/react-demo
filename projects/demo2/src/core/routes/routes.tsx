import React from 'react';
import { Routes, Route } from 'react-router';
import { Layout } from '@core/components/layout/layout.outlet';

const Home = React.lazy(() => import('@home/home'));
const About = React.lazy(() => import('@about/about'));
const Products = React.lazy(() => import('@products/products'));
const ProductDetail = React.lazy(
  () => import('@products/details/product-detail'),
);

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
          <Route
            path="/products"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Products />
              </React.Suspense>
            }
          />
          <Route
            path="/product/:id"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <ProductDetail />
              </React.Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <About />
              </React.Suspense>
            }
          />
          <Route path="*" element={<>Not Found</>} />
        </Route>
      </Routes>
    </>
  );
};
