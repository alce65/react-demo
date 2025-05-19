import { useToggle } from './1.use.toggle';

export const SampleComponent: React.FC = () => {
  const [state, toggle] = useToggle();

  return (
    <div>
      <p>{state}</p>;<button onClick={toggle}>Toggle</button>;
    </div>
  );
};
