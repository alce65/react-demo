import type { JSX } from 'react';

// Tipado de las funciones
// tanto el componente
// como el manejador del evento

export const SampleComponent = (): JSX.Element => {
  // const handleClick = (event: SyntheticEvent): void => {
  const handleClick = (event: React.MouseEvent): void => {
    event.preventDefault();
    console.log('Button clicked!');
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>Sample Component</h1>
      <p>This is a sample component.</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};
