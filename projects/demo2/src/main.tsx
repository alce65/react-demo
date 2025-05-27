import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './core/components/app/App.tsx';
import { AppContext } from './context/context.ts';

const title = 'React Routes';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <StrictMode>
    <AppContext.Provider value={{ title }}>
      <App />
    </AppContext.Provider>
  </StrictMode>,
);
