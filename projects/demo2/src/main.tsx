import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './core/components/app/App.tsx';
import { AppContext } from './context/context.ts';
import { BrowserRouter as Router } from 'react-router';

const title = 'React Routes';
// const title = import.meta.env.VITE_APP_TITLE || 'React TS - Routes';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <StrictMode>
    <AppContext.Provider value={{ title }}>
      <Router>
        <App />
      </Router>
    </AppContext.Provider>
  </StrictMode>,
);
