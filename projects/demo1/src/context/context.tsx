/* eslint-disable react-refresh/only-export-components */
import React, { useState } from 'react';
import { createContext } from 'react';
import { useUser } from '../hooks/4.use.user';
import { ApiUserRepo } from '../services/api.user.repo';

// Creación del contexto

type Theme = 'light' | 'dark';
type Language = 'es' | 'en';

type AppContext = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  userContext: ReturnType<typeof useUser>;
};

const initialAppContext = {} as AppContext;

export const AppContext = createContext<AppContext>(initialAppContext);

// ContextApp.Consumer() -> useContext(ContextApp)
// ContextApp.Provider()

// Montaje del proveedor del contexto

type Props = {
  children: React.ReactNode;
};

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [language, setLanguage] = useState<Language>('es');

  const repo = new ApiUserRepo();
  const userContext = useUser({ repo }); // Aquí se puede instanciar el repositorio

  const context: AppContext = {
    theme,
    setTheme,
    language,
    setLanguage,
    userContext,
  };

  return <AppContext value={context}>{children}</AppContext>;
};

// En main usamos el ContextProvider
