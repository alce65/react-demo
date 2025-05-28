import {lazy} from 'react';
import { type RouteObject } from 'react-router';
import { App } from '@core/components/app/App';
import { Layout } from '@core/components/layout/layout';

// const Home = React.lazy(() => import('@home/home'));
const About = lazy(() => import('@about/about'));
const Products = lazy(() => import('@products/products'));
const ProductDetail = lazy(
  () => import('@products/details/product-detail'),
);

export const routes: RouteObject[] = [
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
             path:"/products",
             Component: Products
          },
          {
            path:"/product/:id",
            Component: ProductDetail
          },
          {
            path:"/about",
            Component: About
          }
        ],
      },
    ],
  },
];

// export const AppRoutes: React.FC = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route
//             path="/"
//             element={
//               <React.Suspense fallback={<div>Loading...</div>}>
//                 <Home />
//               </React.Suspense>
//             }
//           />
//           <Route
//             path="/home"
//             element={
//               <React.Suspense fallback={<div>Loading...</div>}>
//                 <Home />
//               </React.Suspense>
//             }
//           />
//           <Route
//             path="/products"
//             element={
//               <React.Suspense fallback={<div>Loading...</div>}>
//                 <Products />
//               </React.Suspense>
//             }
//           />
//           <Route
//             path="/product/:id"
//             element={
//               <React.Suspense fallback={<div>Loading...</div>}>
//                 <ProductDetail />
//               </React.Suspense>
//             }
//           />
//           <Route
//             path="/about"
//             element={
//               <React.Suspense fallback={<div>Loading...</div>}>
//                 <About />
//               </React.Suspense>
//             }
//           />
//           <Route path="*" element={<>Not Found</>} />
//         </Route>
//       </Routes>
//     </>
//   );
// };
