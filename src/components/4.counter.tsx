// Tipado de las props

type Props = {
  initial: number;
};

export const counter = ({ initial }: Props) => {
  return (
    <div>
      <h1>Counter</h1>
      <p>This is a counter component.</p>
      <button onClick={() => console.log("Counter clicked!", initial)}>
        Increment
      </button>
    </div>
  );
};
