// Tipado de las props

import { useState, type SyntheticEvent } from 'react';
// import type { SyntheticEvent } from 'react';

type Props = {
  initial: number;
};

export const Counter: React.FC<Props> = ({ initial }) => {
  const [count, setCount] = useState(initial);

  const handleClick = (event:React.MouseEvent<HTMLButtonElement>) => {
  //const handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    // const button = event.target as HTMLButtonElement;
    const ds: DOMStringMap = button.dataset
    ds.value
    setCount(count + Number(ds.value));
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>This is a counter component.</p>
      <p>{count}</p>
      <button onClick={handleClick} data-value={1}>
        ➕
      </button>
      <button onClick={handleClick} data-value={-1}>
        ➖
      </button>
    </div>
  );
};

// Tipado de Records


interface MyRecord {
  [key: string]: string;
}

const obj: MyRecord = {} 
obj.z = 'z'

const Obj2: Record<string, string> = {}
Obj2.y = 'y'

