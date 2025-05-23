import { useEffect, useMemo } from 'react';
import { useUser } from '../hooks/4.use.user';
//import { ApiUserRepo } from '../services/api.user.repo';
import { InMemoryUserRepo } from '../services/in-memory.user.repo';

// Ejemplo de un componente que obtiene datos de un servicio y los muestra
// con la lógica de carga y error en el custom hook useUser

export const UserComponent: React.FC = () => {
  //const repo = new ApiUserRepo()
  const repo = useMemo(() => new InMemoryUserRepo(), [])
  const { user, loading, error, load } = useUser({ repo });

  useEffect(() => {
    load();
  }, [load]);

  return (
    <div>
      <h1>User</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Username: {user.name}</p>
        </div>
      )}
    </div>
  );
};
