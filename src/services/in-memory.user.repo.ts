import type { User, UserDTO } from '../types/user';
import type { UserRepo } from './repo';

export class InMemoryUserRepo implements UserRepo {
  private users: User[] = [];
  private static lastId = 0;

  constructor() {
    this.users = [];
  }

  private generateId(): string {
    return (InMemoryUserRepo.lastId++).toString();
  }

  async getUsers(): Promise<User[]> {
    return this.users;
  }

  getUserById(id: string): Promise<User> {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      return Promise.reject(new Error('User not found'));
    }
    return Promise.resolve(user);
  }

  addUser(user: UserDTO): Promise<User> {
    const role: User['role'] = 'user';
    const newUser: User = { ...user, id: this.generateId(), role };
    this.users.push(newUser);
    return Promise.resolve(newUser);
  }
  updateUser(id: string, user: Partial<Omit<User, 'id'>>): Promise<User> {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) {
      return Promise.reject(new Error('User not found'));
    }
    this.users[index] = { ...this.users[index], ...user };
    return Promise.resolve(this.users[index]);
  }
  deleteUser(id: string): Promise<void> {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      return Promise.reject(new Error('User not found'));
    }
    this.users.splice(index, 1);
    return Promise.resolve();
  }
}
