import { useEffect, useState } from 'react';
import { getUser, type User } from '../services/repo.fn.';

// type State = {
//   user: User | null;
//   loading: boolean;
//   error: Error | null;
// };

// Ejemplo de un componente que obtiene datos de un servicio y los muestra
// con la lógica de carga y error en el componente

export const UserComponent: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  //   const [{user, loading, error}, setState] = useState<State>({
  //     user: null,
  //     loading: false,
  //     error: null,
  //   });

  useEffect(() => {
    const load = async (): Promise<void> => {
      setLoading(true);
      // setState((prevState) => ({
      //   ...prevState,
      //   loading: true,
      // }));
      try {
        const user = await getUser();
        setUser(user);
        // setState((prevState) => ({
        //   ...prevState,
        //   user: user,
        //   loading: false,
        // }));
      } catch (error) {
        setError(error as Error);
        // setState((prevState) => ({
        //   ...prevState,
        //   error: error as Error,
        //   loading: false,
        // }));
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <div>
      <h1>User</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Username: {user.username}</p>
        </div>
      )}
    </div>
  );
};
