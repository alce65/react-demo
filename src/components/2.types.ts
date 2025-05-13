export type Primitive = string | number | boolean | null | undefined;
export type ValidValues = "error" | "warning" | "info" | "success";
export type User = {
  id: number;
  name: string;
  email: string;
  age?: number;
  isActive: boolean;
  readonly role: "admin" | "user" | "guest";
};

// Ejemplo de interface

export interface UserI {
  id: number;
  name: string;
  email: string;
  age?: number;
  isActive: boolean;
  readonly role: "admin" | "user" | "guest";
}

// Extensión por Redeclaracion

export interface UserI {
  address: string;
}

//// Común a tipos e interfaces

export type UserExtended = User & {
  address: string | null;
};

export interface UserExtendedI extends UserI {
  address2: string | null;
}

export type UserCombination = User | UserI | UserExtended | UserExtendedI;

/// Solo en los interfaces: fusión de declaraciones

interface Error {
  x: number;
}

const error: Error = { ...new Error(), x: 1 }; // Example of using the Error type
console.error(error);
