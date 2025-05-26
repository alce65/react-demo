/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { createContext } from "react";

// Creación del contexto

type SimpleContext = {
    name: string | null;
    isLogged: boolean
} 

const initialSimpleContext: SimpleContext = {
    name: null,
    isLogged: false
} 

export const SimpleContext = createContext<SimpleContext>(initialSimpleContext)

// ContextApp.Consumer() -> useContext(ContextApp)
// ContextApp.Provider()


// Montaje del proveedor del contexto

type Props = {
    children: React.ReactNode;
}

export const ContextProvider: React.FC<Props> = ({ children }) => {
  
const context: SimpleContext = {
    name: 'Pepe',
    isLogged: true
}


  return (
    <SimpleContext.Provider value={context}>
      {children}
    </SimpleContext.Provider>
  )
}

// En main usamos el ContextProvider