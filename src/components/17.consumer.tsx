import { useEffect, use } from 'react';
import { AppContext } from '../context/context';

export const Consumer: React.FC = () => {
  // Consumiendo el contexto

  const {
    language,
    theme,
    userContext: { user, error, load },
  } = use(AppContext);


  useEffect(() => {load()}, [load]);

  return (
    <div>
      <h1>Consumer</h1>
      <p>App Language: {language}</p>
      <p>App Theme: {theme}</p>
      <p>User: {user?.name}</p>
      <p>Error: {error?.message}</p>
    </div>
  );
};
