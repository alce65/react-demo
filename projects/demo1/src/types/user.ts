// Definición de entidades y tipos relacionados con el usuario
// Definición de la entidad User
// Definición del DTO (Data Transfer Object) para el usuario

export type User = {
  id: string;
  name: string;
  email: string;
  age?: number;
  isActive: boolean;
  readonly role: "admin" | "user" | "guest";
};

export type UserList = User[];

export type UserCollection = {
  users: User[];
};

export type UserDTO = Omit<User, "id" | "role">;

//  export type UserID = Pick<User, 'id'>;

export type UserID = User["id"];
