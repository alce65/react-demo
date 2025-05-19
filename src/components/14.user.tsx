import { useEffect, useState } from 'react';
import { getUser, type User } from '../services/repo';

// type State = {
//   user: User | null;
//   loading: boolean;
//   error: Error | null;
// };

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
    setLoading(true);
    // setState((prevState) => ({
    //   ...prevState,
    //   loading: true,
    // }));
    const load = async (): Promise<void> => {
      try {
        const user = await getUser();
        setUser(user);
        setLoading(false);
        // setState((prevState) => ({
        //   ...prevState,
        //   user: user,
        //   loading: false,
        // }));
      } catch (error) {
        setError(error as Error);
        setLoading(false);
        // setState((prevState) => ({
        //   ...prevState,
        //   error: error as Error,
        //   loading: false,
        // }));
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
