// Tipado de las props

import { useState, type JSX } from 'react';

type Props = {
  initial: number;
};

export const Counter = ({ initial }: Props): JSX.Element => {
  return (
    <div>
      <h1>Counter</h1>
      <p>This is a counter component.</p>
      <button onClick={() => console.log('Counter clicked!', initial)}>
        Increment
      </button>
    </div>
  );
};

export const CounterG: React.FC<Props> = ({ initial }) => {
  const [count, setCount] = useState(initial);

  const [user, setUser] = useState<string | null>(null);

  setUser('Pepe');
  setUser(null);

  // const handleClick(n = 1) => {
  //   setCount(count + n)
  // }

  return (
    <div>
      <h1>Counter</h1>
      <p>This is a counter component.</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>➕</button>
      <button onClick={() => setCount(count - 1)}>➖</button>
    </div>
  );
};
