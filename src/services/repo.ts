import type { User, UserDTO } from '../types/user';

export interface UserRepo {
  getUsers: () => Promise<User[]>;
  getUserById: (id: string) => Promise<User>;
  addUser: (user: UserDTO) => Promise<User>;
  updateUser: (id: User['id'], user: Partial<UserDTO>) => Promise<User>;
  deleteUser: (id: User['id']) => Promise<void>;
}


export interface Repo<T extends { id: unknown }, DTO> {
  getAll: () => Promise<T[]>;
  geById: (id: string) => Promise<T>;
  add: (user: DTO) => Promise<T>;
  update: (id: T[ 'id'], user: Partial<DTO>) => Promise<T>;
  delete: (id: T['id']) => Promise<void>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface UserRepoG extends Repo<User, UserDTO> {}
