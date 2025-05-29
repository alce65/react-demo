import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { AppContext } from './context/context.ts';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { createRoutes } from '@core/routes/routes.tsx';
import { InMemoryProductRepository } from '@products/services/in-memory.product.repo.ts';

const title = import.meta.env.VITE_APP_TITLE || 'React TS - Routes';
const productsRepo = new InMemoryProductRepository();

const router = createBrowserRouter(createRoutes(productsRepo))

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <StrictMode>
    <AppContext value={{ title, productsRepo }}>
      <RouterProvider router={router} />
    </AppContext>
  </StrictMode>,
);
