/* eslint-disable react-refresh/only-export-components */
import type { JSX } from "react";

// Alternativas en el tipado de los componentes

export const Hello = (): JSX.Element => {
  return (
    <div>
      <h1>Hello World</h1>
      <p>This is a sample component.</p>
    </div>
  );
};

export const By: React.FC = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <p>This is a sample component.</p>
    </div>
  );
};

type MyFunction = () => number;
export const f: MyFunction = () => 22;
