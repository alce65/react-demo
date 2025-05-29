import { lazy } from 'react';
import { type RouteObject } from 'react-router';
import { App } from '@core/components/app/App';
import { Layout } from '@core/components/layout/layout';
import type { Product, UUID } from '@products/types/product';
import type { ProductRepository } from '@products/services/product.repo';

export const createRoutes = (
  productsRepo: ProductRepository,
): RouteObject[] => {
  // const Home = React.lazy(() => import('@home/home'));
  const About = lazy(() => import('@about/about'));
  const Products = lazy(() => import('@products/products'));
  const ProductDetail = lazy(() => import('@products/details/product-detail'));

  // Caso general
  type Params = { params: Record<string, unknown> };

  // type PParams = { params: {id: UUID} };

  const productsLoader = async (): Promise<Product[]> => {
    console.log('Products loaded from Loader');
    const data = await productsRepo.getProducts();
    return data;
  };

  const productsDetailLoader = async ({ params: {id} }: Params): Promise<Product> => {
    console.log('Product Detail loaded from Loader');
    const data = await productsRepo.getProductById(id as UUID);
    return data;
  };

  const routes: RouteObject[] = [
    {
      Component: App,
      children: [
        {
          path: '/',
          Component: Layout,
          children: [
            {
              index: true,
              lazy: {
                Component: async () => (await import('@home/home')).Home,
              },
            },
            {
              path: '/products',
              Component: Products,
              loader: productsLoader,
            },
            {
              path: '/product/:id',
              Component: ProductDetail,
              loader: productsDetailLoader,
            },
            {
              path: '/about',
              Component: About,
            },
          ],
        },
      ],
    },
  ];

  return routes;
};
