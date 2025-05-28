import { createContext } from "react";

export type AppContext = {
    title: string;
}

const initialContext: AppContext = {} as AppContext;

export const AppContext = createContext<AppContext>(initialContext)
